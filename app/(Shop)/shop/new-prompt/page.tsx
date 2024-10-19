import ShopSideBar from "@/components/Shop/ShopSideBar";
import UploadPrompt from "@/components/Shop/UploadPrompt";
const Page = () => {
  return (
    <div className="flex w-full">
      <div className="h-screen  flex p-2 bg-[#1111c42] md:w-[20%] 2xl:w-[17%]  bg-[rgb(41,23,15)] sticky left-0 top-0">
        <ShopSideBar active={1} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%]">
        <UploadPrompt />
      </div>
    </div>
  );
};

export default Page;
