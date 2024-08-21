import React from "react";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="mx-4 justify-center flex flex-col h-screen gap-y-6 items-center mt-10">
      <div className="text-2xl text-center">
        <span className="mx-2">-</span> WELCOME TO{" "}
        <span className="text-[#F24405] font-[600]">
          CRYPTO<span className="text-white">REALMS</span>
        </span>
      </div>
      <div className="text-[28px] sm:text-[40px] lg:text-[60px] font-[800] tracking-wider text-center">
        WE ARE REDEFINING PROPERTY <span className="italic">OWNERSHIP</span>{" "}
        THROUGH <span className="text-[#F24405]">DECENTRALIZATION</span>
      </div>
      <div className="flex gap-x-6">
        <Button variant="secondary" title="BUY PROPERTIES"></Button>
        <Button variant="secondary" title="SELL PROPERTIES"></Button>
      </div>
    </div>
  );
};

export default Hero;
