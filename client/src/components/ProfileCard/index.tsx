"use client";
import Image from "next/image";
import React from "react";
import Apartment from "../../assets/apartment";
import Real_estate from "../../assets/real_estate_agent";
import StoreFront from "../../assets/storefront";

interface IprofileCardProps {
  userData: Iuser;
  activeTab?: string;
  className?: string;
}

const ProfileCard = ({
  userData,
  activeTab,
  className = "",
}: IprofileCardProps) => {
  const addProperty = () => {};
  return (
    <div
      className={`bg-[#ffffff5d] max-w-md min-w-80 rounded-xl border-[0.1px] border-[#fff] sm:backdrop-blur-[3px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] flex flex-col items-center justify-stretch ${className}`}
    >
      <Image
        src={
          userData?.profileImage ??
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjGnnelatTe1FbI6RHusiWG4wkbtmnjVC9uTBkSBX_g&s"
        }
        alt={userData?.name ?? "User"}
        width={500}
        height={500}
        className="w-32 h-32 mt-3 rounded-full bg-cover"
      />
      <div className="font-bold text-[24px] break-all mt-1">
        {userData.name ?? "User"}
      </div>
      <div className="flex flex-col items-center my-2 text-sm">
        <span className="font-semibold">Wallet Address</span>
        <span className="font-semibold">
          {(userData.walletAddress ?? "").substring(0, 10) +
            "...." +
            (userData.walletAddress ?? "").substring(
              (userData.walletAddress ?? "").length - 4,
              (userData.walletAddress ?? "").length - 1
            )}{" "}
        </span>
      </div>
      <button
        onClick={() => {
          addProperty();
        }}
        className="bg-black rounded-lg flex justify-center text-md items-center w-[90%] py-2 font-[600]"
      >
        + Add Property
      </button>
      <div className="w-full mt-9">
        <div
          className={`border-t-[2px] border-b-[1px] border-white px-6 py-2 ${
            activeTab == "Bought" ? "bg-white text-black font-[700]" : ""
          }  flex  items-center`}
        >
          <StoreFront color={activeTab == "Bought" ? "black" : "white"} />
          <span className="ml-4">Bought</span>
        </div>
        <div
          className={`border border-white px-6 py-2 ${
            activeTab == "Rented" ? "bg-white text-black font-[700]" : ""
          } flex  items-center`}
        >
          <Apartment color={activeTab == "Rented" ? "black" : "white"} />
          <span className="ml-4">Rented</span>
        </div>
        <div
          className={`border border-white px-6 py-2 ${
            activeTab == "On Sale" ? "bg-white text-black font-[700]" : ""
          }  flex  items-center`}
        >
          <Real_estate color={activeTab == "On Sale" ? "black" : "white"} />
          <span className="ml-4">On Sale</span>
        </div>
        <div
          className={`border border-white px-6 py-2 rounded-b-xl ${
            activeTab == "On Rent" ? "bg-white text-black font-[700]" : ""
          } flex  items-center`}
        >
          <Apartment color={activeTab == "On Rent" ? "black" : "white"} />
          <span className="ml-4">On Rent</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
