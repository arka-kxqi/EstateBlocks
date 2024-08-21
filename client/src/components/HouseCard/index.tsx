"use client";
import Image from "next/image";
import houseStyle from "./house.module.css";
import React from "react";
import { useRouter } from "next/navigation";

interface IHouseCardProps {
  property: Iproperty;
}

const HouseCard = ({ property }: IHouseCardProps) => {
  {
    /* Link to particular property page */
  }
  const router = useRouter();
  const handleRoute = (id: string) => {
    router.push("/particularLand");
  };
  return (
    <div
      onClick={() => {
        handleRoute(property.id as string);
      }}
      className="max-w-sm w-[90%] sm:w-full h-full rounded-xl bg-white "
    >
      <Image
        src={property.imageUrl}
        alt={property.name}
        width={500}
        height={500}
        className="w-full h-48 rounded-xl"
      />
      <div className="text-black flex flex-col p-4">
        <div className=" font-bold flex flex-wrap">
          <span className="break-all mr-1 ">{property.name} -</span>
          <span className="break-all">{property.location}</span>
        </div>
        <div className="text-[#B0B0B0] text-[13px] font-normal mt-1 line-clamp-3 h-[60px]">
          {property.description}
        </div>
        <div className="flex justify-between items-center w-full my-1">
          <span className="font-bold">Area : {property.area} sq ft.</span>
          <span className="bg-black font-[700] text-white px-3 py-2 rounded-full">
            {property.amount} <span className="text-xs  mt-auto">sBTC</span>
          </span>
        </div>
        <div className={houseStyle.slideContainer}>
          <input
            type="range"
            min="1"
            max="100"
            value={property.percentage}
            className={houseStyle.slider}
            id="myRange"
          />
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
