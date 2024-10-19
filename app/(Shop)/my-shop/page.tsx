import ShopSideBar from "@/components/Shop/ShopSideBar";
import ShopRoot from "./_page";
const Page = () => {
  return (
    <div className="flex w-full">
      <div className="h-screen  flex p-2 bg-[#1111c42] md:w-[20%] 2xl:w-[17%]  bg-[rgb(41,23,15)]">
        <ShopSideBar active={0} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%]">
        <ShopRoot />
      </div>
    </div>
  );
};

export default Page;
