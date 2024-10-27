"use client";
import Header from "@/components/Layout/Header";
import { User } from "@clerk/nextjs/server";
import ShopBanner from "@/components/Shop/ShopBanner";
import PromptDetails from "@/components/Prompts/PromptDetails/PromptDetails";
import { Divider } from "@nextui-org/react";
type Props = {
  user: User | undefined;
  isSellerExist: boolean | undefined;
  promptData: any;
};

const PromptDetailsPage = ({ user, isSellerExist, promptData }: Props) => {
  return (
    <div>
      <div className="shop-banner">
        <Header user={user} isSellerExist={isSellerExist} activeItem={2} />
        <ShopBanner />
      </div>
      <div className="w-[95%] nd:w-[80%] xl:w-[85%] 2xl:w-[80%] auto">
        <PromptDetails promptData={promptData} />
        <Divider className="mt-5 bg-[#ffffff14]" />
      </div>
    </div>
  );
};

export default PromptDetailsPage;
