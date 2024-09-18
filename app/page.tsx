"use client"
import Header from "@/components/Header";
import Hero from "@/components/Route/Hero"
import About from "@/components/Route/About"
import Image from "next/image";
import PromptCard from "@/components/Prompts/PromptCard"
import { styles } from "@/utils/styles";
export default function Home() {
  return (
    <div>
      <div className="banner">
        <Header activeItem={0} />
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
          <h1 className={`${styles.heading} p-2 `}>
            Latest Prompts
          </h1>
          <div className="md:flex flex-wrap">
            <PromptCard />
            <PromptCard />
            <PromptCard />
          </div>
        </div>
      </div>

    </div>
  );
}
