import Image from "next/image";
import React from "react";
import github from "@/assets/Github.png";
import Link from "next/link";
import logo_text from "@/assets/logo_text.png";

const FooterLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sell",
    path: "/addProperty",
  },
  {
    name: "Rent",
    path: "/addProperty",
  },
  {
    name: "Buy",
    path: "/properties",
  },
  {
    name: "My Properties",
    path: "/dashboard",
  },
];

const Footer = () => {
  return (
    <div className=" p-2 max-w-[1440px] w-[100%] flex items-center gap-4 justify-center my-10 sm:my-16 z-20">
      <Image
        src={logo_text}
        alt="logo"
        width={700}
        height={700}
        className="w-36 sm:w-60 md:w-72 lg:w-96 h-20 sm:h-28 md:h-32 lg:h-40"
      />
      <div className="hidden sm:block  h-[40px] border border-white/80"></div>
      <div className="flex min-w-[10%] flex-col gap-y-[1px] px-4">
        {FooterLinks.map((link, ind) => {
          return (
            <Link key={ind} href={link.path} className="font-[600] uppercase">
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="hidden sm:block  h-[40px] border border-white/80"></div>
      <div className="flex items-center gap-2">
        <Image
          src={github}
          alt="Logo"
          width={500}
          height={500}
          className="w-8 h-8 rounded-full"
        />
        <Link
          href={"https://github.com/AkhileshJyotishi/sBTCEstate"}
          className="font-[500] tracking-wider text-xl"
        >
          GITHUB
        </Link>
      </div>
    </div>
  );
};

export default Footer;
