import { styles } from "@/utils/styles";
import Link from "next/link";
import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";
import { GoArrowSwitch, GoHome } from "react-icons/go";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";

type Props = {
  active: number;
};

const sideBarItems = [
  {
    icon: <GoHome />,
    title: "Dashboard",
    href: "/my-shop",
  },
  {
    icon: <MdOutlineCreateNewFolder />,
    title: "New Prompt",
    href: "/shop/new-prompt",
  },
  {
    icon: <BsWallet2 />,
    title: "Prompts",
    href: "/shop/prompts",
  },
  {
    icon: <TbMoneybag />,
    title: "Orders",
    href: "/shop/orders",
  },
  {
    icon: <LiaFileInvoiceDollarSolid />,
    title: "Invoices",
    href: "/shop/invoices",
  },
  {
    icon: <BiMoneyWithdraw />,
    title: "Withdraw Earnings",
    href: "/shop/withdraw",
  },
  {
    icon: <GoArrowSwitch />,
    title: "Switch to user",
    href: "/",
  },
];

const ShopSideBar = ({ active }: Props) => {
  return (
    <div className="">
      {sideBarItems.map((item, key) => {
        return (
          <div className="w-full mx-5 my-10" key={key}>
            <Link href={item.href}>
              <div
                className={`flex items-center ${
                  active === key ? "text-[rgb(255,100,26)]" : "text-white"
                }`}
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="pl-4 font-semibold">{item.title}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShopSideBar;
