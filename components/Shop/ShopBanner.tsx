import { styles } from "@/utils/styles";
import Image from "next/image";
import React from "react";

type Props = {
  promptData: any;
};

const ShopBanner = ({ promptData }: Props) => {
  console.log(promptData);
  return (
    <div className="w-full h-full flex items-center justify-center relative gap-2">
      <div className="">
        <Image
          src={
            "https://pixner.net/aikeu/assets/images/banner/cmn-thumb-left.png"
          }
          alt="styling"
          height={180}
          width={180}
          className="absolute top-0 left-10"
        />
      </div>
      <h4 className={`${styles.heading} font-Inter xl:text-6xl 2xl:text-7xl`}>
        {promptData?.name}
      </h4>
      <div>
        <Image
          src={
            "https://pixner.net/aikeu/assets/images/banner/cmn-thumb-right.png"
          }
          alt="styling"
          height={180}
          width={180}
          className="absolute top-0 right-10"
        />
      </div>
    </div>
  );
};

export default ShopBanner;
