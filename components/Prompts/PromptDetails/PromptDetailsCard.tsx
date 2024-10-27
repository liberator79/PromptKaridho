import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/styles";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";

type Props = {
  promptData: any;
};

const PromptDetailsCard = ({ promptData }: Props) => {
  const [imageUrl, setImageUrl] = useState(promptData?.images?.[0]?.url);
  const tags = promptData?.tags;
  const tagsList = tags.split(",").map((tag: string) => tag.trim());
  const percentageDifference =
    ((promptData?.estimatedPrice - promptData?.price) /
      promptData?.estimatedPrice) *
    100;

  const promptDiscount = percentageDifference?.toFixed(0);
  return (
    <div className="bg-[#1211023] p-3 w-full min-h-[50vh] shadow rounded-xl mt-8">
      <div className="w-full flex flex-wrap">
        <div className="md:w-[48%] w-full m-2 bg-[#270c07] rounded-lg">
          <div className="">
            <Image
              alt=""
              height={500}
              width={500}
              src={imageUrl}
              className="m-auto p-2"
            />
          </div>
          <br />
          <div className="w-full flex">
            <Marquee className="w-[70%] p-2">
              {promptData?.images?.map((image: any, index: number) => (
                <Image
                  key={index}
                  alt=""
                  height={250}
                  width={250}
                  src={image.url}
                  onClick={() => setImageUrl(image.url)}
                />
              ))}
            </Marquee>
          </div>
        </div>
        <div className="md:w-[48%] w-full m-2 p-2">
          <h1 className={`${styles.label} !text-2xl font-Monserrat`}>
            {promptData?.name}
          </h1>
          <br />
          <Chip className="bg-[#1f2d2b] rounded-md p-3 h-[35px]">
            <span
              className={`${styles.label} !text-2xl !text-[rgb(255,100,26)] font-Monserrat`}
            >
              {promptDiscount}%
            </span>
          </Chip>
          <span
            className={`${styles.label} !text-2xl pl-2 text-white font-Monserat`}
          >
            Off
          </span>
          <div className="w-full flex items-center justify-between my-2">
            <div>
              <span
                className={`${styles.label} inline=-block pt-4 !text-xl line-through text-[#8FADB6]`}
              >
                $ {promptData?.estimatedPrice}
              </span>
              <span
                className={`${styles.label} inline=-block pt-4 !text-xl pl-3 text-white`}
              >
                $ {promptData?.price}
              </span>
            </div>
            <Ratings rating={promptData?.rating} />
          </div>
          <br />
          <p className={`${styles.paragraph}`}>
            {promptData?.shortDescription}
          </p>
          <br />
          <div className="w-full">
            <span
              className={`${styles.label} pl-2 text-white font-Inter !text-2xl`}
            >
              Tags
            </span>
            <br />
            <div>
              {tagsList.map((tag: string) => {
                return (
                  <Chip className="bg-[rgb(177,91,51)] rounded-md h-[25px] mr-2 my-2 2xl:mr-4 cursor-pointer">
                    <span
                      className={`${styles.label} text-xl text-white md:text-sm font-Monserrat`}
                    >
                      {tag}
                    </span>
                  </Chip>
                );
              })}
            </div>
            <br />
            <Button className="w-full text-black bg-[rgb(255,100,26)]">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptDetailsCard;
