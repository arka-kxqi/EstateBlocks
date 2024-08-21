"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UpperGradient from "@/components/upperGradient";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { MdOutlineShareLocation } from "react-icons/md";
import { SiBitcoin } from "react-icons/si";
import { listProperty } from "@/utils";

const AddProperty = () => {
  const [formfields, setFormfield] = useState({
    nameProp: "",
    category: "",
    description: "",
    files: [],
    country: "",
    state: "",
    pincode: 0,
    address: "",
    area: 0,
    price: 0,
  });

  const handleChange = async (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name == "files") {
      // @ts-ignore
      console.log("he")
      const files = (e.target as any)?.files;
      const imageUrl: string[] = [];
      if (files && files.length > 0) {
        // @ts-ignore
        Array.from(files).map(async (file: any) => {
          const image = new FormData();
          image.append("file", file);
          image.append(
            "cloud_name",
            process.env.NEXT_PUBLIC_CLOUD_NAME as string
          );
          image.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_UPLOAD_PRESET as string
          );
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/di8ui03yr/image/upload",
            {
              method: "POST",
              body: image,
            }
          );
          const resp = await response.json();
          imageUrl.push(resp.url);
          console.log(imageUrl)
        });
        // @ts-ignore
        setFormfield((prev) => {
          return {
            ...prev,
            ["files"]: imageUrl,
          };
        });
      }
    } else {
      setFormfield((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };
  return (
    <div className="bg-black max-w-[1660px] mx-auto flex min-h-screen flex-col gap-y-8 items-center px-2 sm:px-6 lg:px-8 pt-32 sm:pt-40">
      <Navbar />
      <UpperGradient />
      <div className="w-[100%] sm:w-[90%] text-center tracking-wider mx-auto text-xl sm:text-3xl font-[500] z-10">
        <span className="px-4">-</span> Add Property
      </div>
      <div className="z-10 w-full sm:w-[90%] p-6 border rounded-lg flex flex-col  items-start gap-y-8">
        <p className="font-[600] text-2xl flex gap-4 items-center">
          <span>
            <CiCircleInfo strokeWidth={"0.5px"} />
          </span>
          <span>Basic Information</span>
        </p>
        <div className="w-full flex flex-col gap-y-2">
          <p className="font-[500] ">Name of the Property</p>
          <input
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            name="nameProp"
            value={formfields.nameProp}
            id="nameProp"
            placeholder="Indian Institute of Information Technology Lucknow"
            className="!text-black max-w-[520px] rounded-lg px-4 py-1 w-full sm:w-[70%]"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <p className="font-[500] ">Category</p>
          <input
            type="text"
            name="category"
            onChange={(e) => {
              handleChange(e);
            }}
            value={formfields.category}
            id="category"
            placeholder="Agriculture"
            className=" !text-black rounded-lg px-4 py-1 max-w-[320px] w-full sm:w-[45%]"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <p className="font-[500]">Description</p>
          <textarea
            name="description"
            onChange={(e) => {
              handleChange(e);
            }}
            id="description"
            value={formfields.description}
            placeholder="Description..."
            className="placeholder:text-white font-light placeholder:font-light bg-transparent border rounded-xl px-4 py-2 text-sm w-full h-[80px]"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <p className="font-[500]">Photos of the Property</p>
          <div className="border border-dashed rounded-md w-full">
            {formfields.files && formfields.files.length == 0 && (
              <div className="flex items-center rounded-md justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    name="files"
                    accept="image/png"
                    id="dropzone-file"
                    type="file"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    multiple
                    className="hidden"
                  />
                </label>
              </div>
            )}
            {formfields.files && formfields.files.length > 0 && (
              <div className="text-3xl text-center font-[400] p-2">
                Image Uploaded
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="z-10 w-full sm:w-[90%] p-6 border rounded-lg flex flex-col  items-start gap-y-8">
        <p className="font-[600] text-2xl flex gap-4 items-center">
          <span>
            <MdOutlineShareLocation />
          </span>
          <span>Location</span>
        </p>
        <div className="flex gap-x-2 md:gap-x-4 gap-y-4 w-full flex-wrap">
          <div className="flex justify-center items-start w-[90%] sm:w-[49%] flex-col gap-y-[5px]">
            <p className="font-[500]">Country / Region</p>
            <input
              type="text"
              name="country"
              value={formfields.country}
              id="country"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="India"
              className="text-black rounded-lg px-4 py-1  w-full"
            />
          </div>
          <div className="flex justify-center items-start w-[90%] sm:w-[49%] flex-col gap-y-[5px]">
            <p className="font-[500]">State</p>
            <input
              type="text"
              name="state"
              value={formfields.state}
              id="state"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Uttar Pradesh"
              className="text-black rounded-lg px-4 py-1  w-full"
            />
          </div>
          <div className="flex justify-center items-start w-[90%] sm:w-[49%] flex-col gap-y-[5px]">
            <p className="font-[500]">Pincode</p>
            <input
              type="number"
              name="pincode"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formfields.pincode}
              id="pincode"
              placeholder="234542"
              className="text-black rounded-lg px-4 py-1  w-full"
            />
          </div>
          <div className="flex justify-center w-[90%] items-start sm:w-[49%] flex-col gap-y-[5px]">
            <p className="font-[500]">Address / Locality</p>
            <input
              type="text"
              name="address"
              id="address"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formfields.address}
              placeholder="e.g. neharia chouraha"
              className="text-black rounded-lg px-4 py-1  w-full"
            />
          </div>
        </div>
      </div>
      <div className="z-10 w-full sm:w-[90%] p-6 border rounded-lg flex flex-col  items-start gap-y-8">
        <p className="font-[600] text-2xl flex gap-4 items-center">
          <span>
            <FaFileCircleExclamation />
          </span>
          <span>Property Details</span>
        </p>
        <div className="flex justify-center items-start w-[90%] sm:w-[49%] flex-col gap-y-[5px]">
          <p className="font-[500]">Area</p>
          <div className="flex items-center w-full gap-x-4">
            <input
              type="number"
              name="area"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formfields.area}
              id="area"
              placeholder="2500"
              className="text-black max-w-sm rounded-lg px-4 py-1 w-[90%]"
            />
            <span className="w-[10%]">sq ft</span>
          </div>
        </div>
      </div>
      <div className="z-10 w-full sm:w-[90%] p-6 border rounded-lg flex flex-col  items-start gap-y-8">
        <div className="flex justify-center items-start w-[90%] sm:w-[49%] flex-col gap-y-[5px]">
          <p className="flex text-2xl items-center font-[500]">
            <span className="mr-4">
              <SiBitcoin />
            </span>
            Price{" "}
            <span className="font-[500] !mt-auto ml-4 mb-[3px] text-[10px]">
              (in sBTC)
            </span>
          </p>
          <div className="flex items-center mt-4 w-full gap-x-4">
            <input
              type="number"
              onChange={(e) => {
                handleChange(e);
              }}
              name="price"
              value={formfields.price}
              id="price"
              placeholder="2500"
              className="text-black max-w-sm rounded-lg px-4 py-1 w-[90%]"
            />
          </div>
        </div>
      </div>
      <Button
        title="Complete Process"
        className="!w-[90%] md:!w-[50%] max-w-md mx-auto !z-50"
        onClick={()=>listProperty({area1:formfields.area,address1:formfields.address,BHK1:0,category1:formfields.category,country1:formfields.country,description1:formfields.country,images1:formfields.files,name1:formfields.nameProp,pincode1:formfields.pincode.toString(),price1:formfields.price,state1:formfields.state,status1:"available"})}
      ></Button>
      <Footer />
    </div>
  );
};

export default AddProperty;
