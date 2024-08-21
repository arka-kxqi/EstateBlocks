import Image from "next/image";
import React from "react";
import logo_main from "@/assets/logo_main.png";
import logo_orange from "@/assets/logo_orange.png";

const OurWork = () => {
  return (
    <div className="flex w-[90%] mx-auto flex-col gap-y-11  my-10">
      <div className=" flex gap-x-6 flex-wrap justify-between items-center gap-y-4">
        <div className="min-w-[160px] flex w-[25%] text-2xl sm:text-4xl md:text-4xl font-[400]">
          <span className="mx-2 font-[700]">-</span>
          <p>The work we perform</p>
        </div>
        <div className="min-w-[160px] w-[60%] text-xs sm:text-sm font-light mx-auto">
          By harnessing the power of decentralization, CryptoRealms aims to
          provide a seamless platform for buying, renting, and selling real
          estate properties directly, while also enabling fractional ownership,
          thus democratizing access to real estate investment opportunities.
          This project seeks to empower individuals globally by offering a
          transparent, efficient, and secure way to engage in real estate
          transactions, ultimately reshaping the landscape of property ownership
          and investment.
        </div>
      </div>
      <div className="flex gap-x-4 items-center justify-center">
        <div>
          <Image
            src={logo_orange}
            alt="Logo"
            width={500}
            height={500}
            className="w-24 h-24 sm:w-32 sm:h-32  rounded-full"
          />
        </div>
        <div className="justify-start flex gap-x-14 items-center">
          <div className="hidden sm:block  h-[40px] border border-white/80"></div>
          {/* <Image
            src={
              "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI="
            }
            alt="Logo"
            width={500}
            height={500}
            className="w-32 h-32 rounded-full"
          />
          <div className="max-w-[45%] text-3xl sm:text-[44px] leading-[44px] font-[700]">
            {" "}
            HAMARA PROJECT
          </div> */}
          <Image
            src={logo_main}
            alt=""
            width={700}
            height={700}
            className="w-[280px] sm:w-[280px] md:w-[340px] lg:w-[440px] h-24 sm:h-32 md:h-36 lg:h-44"
          />
        </div>
      </div>
      <div className="text-center w-[80%] font-[400] mx-auto">
        CryptoRealms offers a decentralized platform for global real estate
        transactions, ensuring transparency, security, and efficiency through
        blockchain technology.
      </div>
    </div>
  );
};

export default OurWork;
