import React from "react";
import p1 from "@/assets/stacks.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/clarity.svg";
import p4 from "@/assets/p4.png";
import p6 from "@/assets/p6.png";
import Image from "next/image";

const Promotion = () => {
  return (
    <div className="w-full flex flex-col items-center gap-y-16 mx-4 my-16 sm:my-24">
      <div className="font-[500] text-2xl sm:text-3xl md:text-[40px] w-full sm:w-[80%] text-center">
        TRADE WITH CONFIDENCE. BACKED BY MAJOR PLAYERS
      </div>
      <div className="w-full sm:w-[90%] flex flex-wrap gap-y-6 justify-center">
        <div className="min-w-[140px] w-[25%]">
          <Image
            alt=""
            width={800}
            height={800}
            src={p1}
            className="mx-auto  grid place-items-center px-2 w-[120px] bg-[#F24405] h-[36px] py-2"
          />
        </div>
        <div className="min-w-[140px] w-[25%]">
          <Image
            alt=""
            width={800}
            height={800}
            src={p2}
            className="mx-auto w-[100px] h-[36px] py-2"
          />
        </div>
        <div className="min-w-[140px] w-[25%]">
          <Image
            alt=""
            width={800}
            height={800}
            src={p3}
            className="mx-auto h-[36px] grid place-items-center px-2 w-[120px] bg-[#F24405]"
          />
        </div>
        <div className="min-w-[140px] w-[25%]">
          <Image
            alt=""
            width={800}
            height={800}
            src={p4}
            className="mx-auto w-[130px] h-[36px]"
          />
        </div>
        <div className="min-w-[140px] w-[25%]">
          <div className="mx-auto grid place-items-center px-2 w-[120px] font-[600] h-[36px] bg-[#F24405]">
            COINSCRUM
          </div>
        </div>
        <div className="min-w-[140px] w-[25%]">
          <Image
            alt=""
            width={800}
            height={800}
            src={p6}
            className="mx-auto w-[100px] h-[36px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
