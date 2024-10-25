import ShopSideBar from "@/components/Shop/ShopSideBar";
import AllPrompts from "@/components/Prompts/AllPrompts";
const Page = () => {
  return (
    <div className="flex w-full">
      <div className="h-screen  flex p-2  md:w-[20%] 2xl:w-[17%] bg-[rgb(41,23,15)] sticky left-0 top-0">
        <ShopSideBar active={2} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%]">
        <AllPrompts />
      </div>
    </div>
  );
};

export default Page;
