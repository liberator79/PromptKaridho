"use client";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Route/Hero";
import About from "@/components/Route/About";
import Image from "next/image";
import PromptCard from "@/components/Prompts/PromptCard";
import BestSellers from "@/components/Shop/BestSellers";
import Future from "@/components/Route/Future";
import Partners from "@/components/Route/Partners";
import SellerBanner from "@/components/Shop/SellerBanner";
import Footer from "@/components/Layout/Footer";
import { styles } from "@/utils/styles";
import { User } from "@clerk/nextjs/server";
type Props = {
  user: User | undefined;
  isSellerExist: boolean | undefined;
  promptsData: any;
};
export default function RootPage({ user, isSellerExist, promptsData }: Props) {
  return (
    <div>
      <div className="banner">
        <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
        <Hero />
      </div>
      <div>
        <Image
          src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
          width={120}
          height={120}
          alt=""
          className="absolute right-[-30px] "
        />
      </div>
      <br />
      <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
        <div>
          <h1 className={`${styles.heading} p-2 `}>Latest Prompts</h1>
          <div className="md:flex flex-wrap">
            {promptsData.map((prompt: any) => {
              return <PromptCard key={prompt.id} prompt={prompt} />;
            })}
          </div>
          <br />
          <BestSellers />
          <Future />
          <Partners />
          <SellerBanner />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}
