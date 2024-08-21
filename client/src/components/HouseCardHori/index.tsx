import Image from "next/image";
import React from "react";

interface IHouseCardHoriProps {
  property: Iproperty;
}

const HouseCardHori = ({ property }: IHouseCardHoriProps) => {
  return (
    <div className="w-full justify-between flex gap-4 bg-[#ffffff5d] rounded-xl border-[1px] border-[#fff] sm:backdrop-blur-[3px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] p-3">
      <div>
        <Image
          src={property.imageUrl}
          alt={property.name}
          width={500}
          height={500}
          className="w-full h-24 rounded-lg"
        />
      </div>
      <div className="flex flex-col w-[70%]">
        <div className="font-bold text-xl flex flex-wrap">
          <span className="break-all mr-1 ">{property.name} -</span>
          <span className="break-all">{property.location}</span>
        </div>
        <div className="text-white text-sm font-normal mt-1 line-clamp-2 h-[40px]">
          {property.description}
        </div>
        <span className="text-black font-bold">
          Time Left : <span className="text-xl">{property.equity}% left</span>
        </span>
      </div>
      <div className="flex flex-col items-end justify-between">
        <span className="bg-black font-[500] text-white px-2 py-1 text-center rounded-full">
          {property.amount} <span className="text-xs  mt-auto">sBTC</span>
        </span>
        <span className="text-black text-center font-bold">
          Equity : <span className="text-xl">{property.equity}%</span>
        </span>
      </div>
    </div>
  );
};

export default HouseCardHori;
