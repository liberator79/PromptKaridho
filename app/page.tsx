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
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/utils/Loader";
export default function Home() {
  const [user, setUser] = useState(null);
  const [isSellerExist, setSellerExist] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/me")
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        if (res.data?.shop) {
          setSellerExist(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div>
          <div className="banner">
            <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
            <Hero />
          </div>
          <div>
            <Image
              src={
                "https://pixner.net/aikeu/assets/images/footer/shape-two.png"
              }
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
                <PromptCard />
                <PromptCard />
                <PromptCard />
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
      )}
    </>
  );
}
