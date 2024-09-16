"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import Navigation from "./Navigation"
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";


type Props = {
    activeItem: number
}

const Header = ({ activeItem }: Props) => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.screenY > 100) {
                setActive(true);
            } else {
                setActive(false);
            }
        })
    }
    const handleClose = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.id === "screen") {
            setOpen(!open);
        }
    }
    return (
        <div className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] ${active && "fixed top-0 left-0 bg-[#00000] z-[9999]"}`}>
            <div className='hidden md:w-[90%] mx-auto md:flex items-center justify-between'>
                <div>
                    <Link href={"/"}>
                        <h1 className='font-Inter text-3xl cursor-pointer'>
                            <span className='text-[#64ff4c]'>Prompt</span>Karido
                        </h1>
                    </Link>
                </div>
                <div className='flex'>
                    <Navigation activeItem={activeItem} />
                </div>
                <div className='flex items-center ml-10'>
                    <AiOutlineSearch className='text-[25px] mr-5 cursor-pointer' />
                    {/* Auth */}
                    <Link href={"/signin"}>
                        <CgProfile className='text-[25px] cursor-pointer' />
                    </Link>
                </div>
            </div>
            {/*for mobile devices */}
            <div className='w-full md:hidden flex items-center justify-between'>
                <div>
                    <Link href={"/"}>
                        <h1 className='font-Inter text-3xl cursor-pointer'>
                            <span className='text-[#64ff4c]'>Prompt</span>Karido
                        </h1>
                    </Link>
                </div>
                <div>
                    <FaBars
                        className='text-2xl cursor-pointer'
                        onClick={() => { setOpen(!open) }}
                    />
                </div>
                {
                    open && (
                        <div className='fixed md:hidden w-full h-full top-0 left-0 z-40 bg-[unset]'
                            onClick={handleClose}
                            id="screen"
                        >
                            <div className='fixed bg-black h-full top-0 right-0 w-[60%] z-10'>
                                <div className='mt-20 p-5'>
                                    <Navigation activeItem={activeItem}/>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header
