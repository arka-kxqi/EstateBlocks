"use client";
import Button from "@/components/Button";
import React, { useState } from "react";

const PropertyHero = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex flex-col items-center gap-y-8 mb-10 sm:mb-16 z-10">
      <p className="text-xs">
        <span className="mx-2">-</span>Decentralizing the Real Estate
      </p>
      <p className="text-5xl font-[600] text-center">
        Best Properties of the year
      </p>
      <label className="shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-full bg-white p-[2px]">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded-full py-2 px-[12px] text-sm text-gray-600 font-medium ${
            !isChecked ? "text-primary bg-black !text-white" : "text-body-color"
          }`}
        >
          Houses
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded-full py-2 px-[12px] text-sm text-gray-600 font-medium ${
            isChecked ? "text-primary bg-black !text-white" : "text-body-color"
          }`}
        >
          Land
        </span>
      </label>
      <div className="flex gap-x-4 gap-y-4 justify-center items-end flex-wrap">
        <div className="flex justify-center items-start w-[90%] sm:w-[48%] md:w-[18%] flex-col gap-y-[5px]">
          <p className="font-[500] pl-2">
            Price Range <span className="font-[300] text-xs">(in sBTC)</span>
          </p>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="0-2000"
            className="text-black rounded-xl px-4 py-1  w-full"
          />
        </div>
        <div className="flex justify-center items-start w-[90%] sm:w-[48%] md:w-[18%] flex-col gap-y-[5px]">
          <p className="font-[500] pl-2">Country</p>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="India"
            className="text-black rounded-xl px-4 py-1  w-full"
          />
        </div>
        <div className="flex justify-center items-start w-[90%] sm:w-[48%] md:w-[18%] flex-col gap-y-[5px]">
          <p className="font-[500] pl-2">State</p>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Uttar Pradesh"
            className="text-black rounded-xl px-4 py-1  w-full"
          />
        </div>
        <div className="flex justify-center w-[90%] items-start sm:w-[48%] md:w-[18%] flex-col gap-y-[5px]">
          <p className="font-[500] pl-2">Address</p>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="e.g. neharia chouraha"
            className="text-black rounded-xl px-4 py-1  w-full"
          />
        </div>
        <Button
          title="Apply filters"
          variant="secondary"
          className="!w-[90%] rounded-xl font-[600] border !bg-black md:!w-[18%]"
        ></Button>
      </div>
    </div>
  );
};

export default PropertyHero;
