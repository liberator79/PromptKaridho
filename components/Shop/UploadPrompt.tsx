"use client";
import { styles } from "@/utils/styles";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import {
  Button,
  Input,
  Select,
  Selection,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";
import { ChangeEvent, useState, DragEvent } from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";

type Props = {};

type PromptData = {
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  attachments: string[];
  estimatedPrice: string;
  price: string;
  tags: string;
};

const categoryItems = [
  {
    title: "ChatGpt",
  },
  {
    title: "Midjourney",
  },
  {
    title: "Bard",
  },
  {
    title: "Dalle",
  },
];

const UploadPrompt = (props: Props) => {
  const [promptData, setPromptData] = useState<PromptData>({
    name: "",
    shortDescription: "",
    description: "",
    images: [],
    attachments: [],
    estimatedPrice: "",
    price: "",
    tags: "",
  });
  console.log(promptData.images);
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false); // Corrected to 'boolean'
  const [dragging, setDragging] = useState<boolean>(false); // Corrected to 'boolean'
  const [category, setCategory] = useState<Selection>(new Set([]));

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(new Set([e.target.value]));
  };
  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPromptData((prevData) => ({
              ...prevData,
              images: [...prevData.images, reader.result as string],
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Handle drag over event
  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  // Handle drag leave event
  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  // Handle image drop
  const handleImageDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPromptData((prevData) => ({
              ...prevData,
              images: [...prevData.images, reader.result as string], // Corrected key from 'images' to 'image'
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Handle attachment file input change
  const handleAttachmentFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPromptData((prevData) => ({
              ...prevData,
              attachments: [...prevData.attachments, reader.result as string], // Corrected key from 'image' to 'attachments'
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Handle attachment drop
  const handleAttachmentDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPromptData((prevData) => ({
              ...prevData,
              attachments: [...prevData.attachments, reader.result as string],
            }));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const categoryString = Array.from(category).join(",");
    setIsLoading(true); // Set loading state to true

    try {
      const res = await axios.post("/api/upload-prompt/", {
        ...promptData,
        category: categoryString,
        sellerId: userId,
      });
      // Handle success (e.g., reset form, display success message)
      console.log("Upload successful:", res.data);
      // Optionally reset the form
      setPromptData({
        name: "",
        shortDescription: "",
        description: "",
        images: [],
        attachments: [],
        estimatedPrice: "",
        price: "",
        tags: "",
      });
      setCategory(new Set([]));
    } catch (error) {
      console.error("Error uploading prompt:", error);
      // Handle error (e.g., display error message to user)
      alert("Failed to upload prompt. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="p-2">
      <h1 className={`${styles.heading} font-Inter text-center py-5`}>
        New Prompt
      </h1>
      <br />
      <form className="w-[90%] m-auto" onSubmit={handleSubmit}>
        {/* Title Input */}
        <Input
          type="text"
          label="Title"
          value={promptData.name}
          onChange={(e) => {
            setPromptData({ ...promptData, name: e.target.value });
          }}
          variant="bordered"
          required
          placeholder="Enter your prompt title"
        />
        <br />

        {/* Short Description Input */}
        <Input
          type="text"
          label="Short Description"
          value={promptData.shortDescription}
          onChange={(e) =>
            setPromptData({ ...promptData, shortDescription: e.target.value })
          }
          variant="bordered"
          required
          placeholder="Enter a short Description for your prompt *"
        />
        <br />

        {/* Description Textarea */}
        <Textarea
          variant="bordered"
          value={promptData.description}
          onChange={(e) =>
            setPromptData((prevData) => ({
              ...prevData,
              description: e.target.value,
            }))
          }
          required
          size="lg"
          placeholder="Write a detailed description for your prompt *"
        />
        <br />

        {/* Estimated Price and Price Inputs */}
        <div className="md:flex md:w-full">
          <Input
            type="number"
            label="Estimated Price"
            value={promptData.estimatedPrice}
            onChange={(e) =>
              setPromptData({ ...promptData, estimatedPrice: e.target.value })
            }
            variant="bordered"
            required
            placeholder="INR 500"
            className="mb-6 md:mb-0"
          />
          <Input
            type="number"
            label="Price"
            value={promptData.price}
            onChange={(e) =>
              setPromptData({ ...promptData, price: e.target.value })
            }
            variant="bordered"
            required
            placeholder="INR 400"
            className="md:ml-10"
          />
        </div>
        <br />

        {/* Category Select and Tags Input */}
        <div className="md:flex md:w-full">
          <Select
            label="Choose one category"
            variant="bordered"
            placeholder="Select one category"
            selectedKeys={category}
            className="max-w-full mb-5 md:mb-[0]"
            onChange={handleSelectionChange}
          >
            {categoryItems.map((item) => (
              <SelectItem
                key={item.title}
                value={item.title}
                className="text-black"
              >
                {item.title}
              </SelectItem>
            ))}
          </Select>

          <Input
            type="text"
            label="Prompt tags *"
            value={promptData.tags}
            onChange={(e) =>
              setPromptData((prevData) => ({
                ...prevData,
                tags: e.target.value,
              }))
            }
            required
            variant="bordered"
            placeholder="AI,Photo,Arts"
            className="md:ml-10"
          />
        </div>
        <br />

        {/* Image Upload Section */}
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            multiple
            id="file"
            className="hidden"
            onChange={handleImageFileChange}
          />
          <label
            className={`w-full rounded-md min-h-[15vh] border-white p-3 border flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            htmlFor="file"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleImageDrop}
          >
            {promptData.images.length !== 0 ? (
              <div className="w-full flex flex-wrap">
                {promptData.images.map((item, index) => (
                  <Image
                    src={item}
                    alt={`Prompt Image ${index + 1}`}
                    width={500}
                    height={400}
                    key={index}
                    className="w-full md:w-[48%] object-cover md:m-2 my-2"
                  />
                ))}
              </div>
            ) : (
              <span className="text-white">
                Drag and drop your prompt images here or click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <br />

        {/* Attachment Upload Section */}
        <div className="w-full">
          <input
            type="file"
            accept=".txt, .pdf"
            multiple
            id="attachment"
            className="hidden"
            onChange={handleAttachmentFileChange}
          />
          <label
            className={`w-full rounded-md min-h-[15vh] border-white p-3 border flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            htmlFor="attachment" // Corrected to "attachment"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleAttachmentDrop}
          >
            {promptData.attachments.length !== 0 ? (
              <div className="flex items-center">
                <IoDocumentAttachOutline className="text-3xl" />
                <span className={`${styles.label} pl-2 !text-2xl pt-1`}>
                  {promptData?.attachments?.length}{" "}
                  {promptData?.attachments?.length > 1 ? "files" : "file"}
                </span>
              </div>
            ) : (
              <span className="text-white">
                Drag and drop your attachments here or click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <br />

        {/* Submit Button */}
        <div className="w-full flex items-center justify-center">
          <Button
            color="primary"
            className={`${styles.button}`}
            type="submit"
            disabled={isLoading}
            isLoading={isLoading} // Updated to use isLoading prop
          >
            Upload
          </Button>
        </div>
      </form>
      <br />
      <br />
    </div>
  );
};

export default UploadPrompt;
