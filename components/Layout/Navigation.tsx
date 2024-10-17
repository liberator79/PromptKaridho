import Link from "next/link";
import React from "react";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Promps",
    href: "/markeplace",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="block md:flex">
      {navItems.map(({ title, href }, index) => {
        return (
          <div key={title} className="">
            <Link
              href={href}
              className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${
                activeItem === index && "text-[rgb(255,100,26)]"
              } cursor-pointer`}
            >
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
