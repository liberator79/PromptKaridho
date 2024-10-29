"use client";
import { getShopById } from "@/actions/shop/getShopById";
import ReviewCard from "./ReviewCard";
import { styles } from "@/utils/styles";
import { Avatar, Divider, Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Props = {
  promptData: any;
};

const tabs = [
  {
    title: "Description",
  },
  {
    title: "Reviews",
  },
  {
    title: "Author",
  },
];

const PromptInformation = ({ promptData }: Props) => {
  const [shopData, setShopData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getShopById(promptData.sellerId);
      setShopData(data);
    };
    fetchData();
  }, []);
  console.log(shopData);
  return (
    <div>
      <div className="flex flex-col bg-slate-900 p-3 rounded-md">
        <Tabs items={tabs} variant="light" color="warning">
          {(item) => {
            return (
              <Tab
                key={item.title}
                title={item.title}
                className="text-[15px] font-Inter "
              >
                <Divider className="bg-[#ffffff18]" />
                <div className="py-2">
                  {item.title === "Description" && (
                    <p
                      className={`${styles.paragraph} whitespace-pre-line w-full overflow-hidden font-Inter`}
                    >
                      {promptData.description}
                    </p>
                  )}
                  {
                    item.title === "Author" && (
                      <>
                        <div className="flex w-full my-2">
                          <Avatar size="lg" src={shopData?.avatar} />
                          <div>
                            <span
                              className={`${styles.label} pl-3 !text-xl text-white`}
                            >
                              @{shopData?.name}
                            </span>
                            <br />
                            <span className={`${styles.label} pl-3`}>
                              Prompts: {shopData?.allProducts}
                            </span>
                            <br />
                            <span className={`${styles.label} pl-3`}>
                              Reviews: {shopData?.ratings} / 5
                            </span>
                          </div>
                        </div>
                      </>
                    )
                    // (shopData ? (

                    // ) : (
                    //   <>
                    //     <Loader />
                    //   </>
                    // ))
                  }
                  {item.title === "Reviews" && (
                    <>
                      <ReviewCard />
                      <ReviewCard />
                      <ReviewCard />
                    </>
                  )}
                </div>
              </Tab>
            );
          }}
        </Tabs>
      </div>
    </div>
  );
};

export default PromptInformation;
