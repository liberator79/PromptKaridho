"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type Props = {};

const Page = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const [shopData, setShopData] = useState({
    shopName: "",
    shopDescription: "",
    shopProductTypes: "",
    shopAvatar: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (user) {
      const data = {
        name: shopData.shopName,
        description: shopData.shopDescription,
        productsType: shopData.shopProductTypes,
        avatar: user?.imageUrl || "",
        userId: user?.id,
      };
      await axios
        .post("/api/create-shop", data)
        .then((res) => {
          setLoading(false);
          toast.success("Shop Created");
          setShopData({
            shopAvatar: "",
            shopDescription: "",
            shopName: "",
            shopProductTypes: "",
          });
          router.push("/");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.response.data);
          setShopData({
            shopAvatar: "",
            shopDescription: "",
            shopName: "",
            shopProductTypes: "",
          });
        });
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div>
        <h1 className="text-center font-bold text-2xl text-[rgb(255,100,26)]">
          Sell Prompts With Us
        </h1>
        <form
          className="2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[90%] m-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full my-5 font-bold">
            <Input
              isRequired
              type="name"
              value={shopData.shopName}
              label="Shop Name"
              onChange={(e) =>
                setShopData({ ...shopData, shopName: e.target.value })
              }
              size="sm"
              color="default"
              className="font-bold"
              variant="bordered"
            />
          </div>
          <div className="w-full my-5">
            <Input
              type="text"
              value={shopData.shopDescription}
              label="Description(max 120)"
              onChange={(e) =>
                setShopData({ ...shopData, shopDescription: e.target.value })
              }
              size="sm"
              maxLength={120}
              variant="bordered"
            />
          </div>
          <div className="w-full my-5">
            <Input
              isRequired
              type="description"
              value={shopData.shopProductTypes}
              label="Products Type"
              onChange={(e) =>
                setShopData({ ...shopData, shopProductTypes: e.target.value })
              }
              size="sm"
              variant="bordered"
            />
          </div>
          <div>
            <Button
              type="submit"
              disabled={loading}
              disableAnimation={loading}
              className="w-full bg-black text-white hover:text-black border border-[rgb(255,100,26)] hover:bg-[rgb(255,100,26)] font-bold font-Inter"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
