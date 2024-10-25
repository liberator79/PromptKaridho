"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { User } from "@clerk/nextjs/server";
import DropDown from "./DropDown";
import { UserProfile } from "@clerk/nextjs";
import { TbXboxXFilled } from "react-icons/tb";

type Props = {
  activeItem: number;
  user: User | undefined;
  isSellerExist: boolean | undefined;
};

const Header = ({ activeItem, user, isSellerExist }: Props) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProfile = () => {
    setActiveProfile(!activeProfile);
  };

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };

  return (
    <div
      className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] ${
        active && "fixed top-0 left-0 bg-[#000] bg-opacity-80 z-[999]"
      }`}
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer font-[700]">
              <span className="text-[rgb(255,100,26)]">Prompt</span>Karido
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem} />
        </div>
        <div className="flex items-center ml-10">
          <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer" />
          {/* Auth */}
          {user ? (
            <div>
              <DropDown
                user={user}
                setOpen={setOpen}
                handleProfile={handleProfile}
                isSellerExist={isSellerExist}
              />
            </div>
          ) : (
            <Link href={"/sign-in"}>
              <CgProfile className="text-[25px] cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      {activeProfile && (
        <div className="w-full top-0 left-0 h-screen overflow-hidden fixed flex justify-center items-center z-[999] bg-[#00000068]">
          <div className="w-min relative rounded-xl bg-white overflow-y-scroll h-[90vh] shadow">
            <UserProfile />
            <TbXboxXFilled
              className="absolute text-black text-2xl top-8 right-10 cursor-pointer"
              onClick={handleProfile}
            />
          </div>
        </div>
      )}
      {/* For mobile devices */}
      <div className="w-full md:hidden flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer font-[700]">
              <span className="text-[rgb(255,100,26)]">Prompt</span>Karido
            </h1>
          </Link>
        </div>
        <div>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div
            className="fixed md:hidden w-full h-full top-0 left-0 z-40 bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed bg-black h-full top-0 right-0 w-[60%] z-10">
              <div className="mt-20 p-5">
                <Navigation activeItem={activeItem} />
                {user ? (
                  <div>
                    <DropDown
                      user={user}
                      setOpen={setOpen}
                      handleProfile={handleProfile}
                      isSellerExist={isSellerExist}
                    />
                  </div>
                ) : (
                  <Link href={"/sign-in"}>
                    <CgProfile className="text-[25px] cursor-pointer" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
