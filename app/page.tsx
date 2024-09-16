"use client"
import Header from "@/components/Header";
import Hero from "@/components/Route/Hero"
import About from "@/components/Route/About"
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="banner">
      <Header activeItem = {0}/>
      <Hero />
      </div>
      <Image 
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      />
      <br/>
      <div  className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">

      </div>
    </div>
  );
}
