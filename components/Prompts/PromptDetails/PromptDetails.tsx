import { styles } from "@/utils/styles";
import React from "react";
import SellerBanner from "../../Shop/SellerBanner";
import PromptDetailsCard from "./PromptDetailsCard";
import PromptInformation from "./PromptInformation";
type Props = {
  promptData: any;
};

const PromptDetails = ({ promptData }: Props) => {
  return (
    <div>
      <PromptDetailsCard promptData={promptData} />
      <br />
      <br />
      <PromptInformation promptData={promptData} />
      <br />
      <h1 className={`${styles.heading} px-2 pb-2`}>Related Prompts</h1>
      <br />
      <br />
      <div className="w-full h-full flex items-center justify-center relative gap-2">
        <SellerBanner />
      </div>
      <br />
    </div>
  );
};

export default PromptDetails;
