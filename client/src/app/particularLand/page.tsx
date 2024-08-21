"use client";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import ParticularLandCard from "@/components/ParticularLandCard";
import ParticularLandDesc from "@/components/ParticularLandDesc";
import ParticularLandGallery from "@/components/ParticularLandGallery";
import UpperGradient from "@/components/upperGradient";
import React from "react";

const ParticularLand = () => {
  const imageGallery: string[] = [
    "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
    "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
  ];
  const defaultLandDesc: ILandDescProps = {
    name: "IIIT Lucknow Gomti Nagar",
    location: "Chak Ganjaria, C.G. City, Uttar Pradesh, 226002",
    room: 3,
    bathroom: 2,
    area: 2500,
    parking: "Indoor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing.",
  };

  function handleProceed() {}
  return (
    <div className="bg-black max-w-[1660px] mx-auto flex min-h-screen flex-col gap-y-8 items-center px-2 sm:px-6 lg:px-8 pt-32 sm:pt-40">
      <Navbar />
      <UpperGradient />
      <div className="flex flex-col justify-center items-center lg:items-start gap-y-6 lg:justify-start lg:flex-row gap-x-6 w-[90%] z-10">
        <div className="w-full lg:w-[64%]">
          <ParticularLandGallery gallery={imageGallery} />
          <ParticularLandDesc land={defaultLandDesc} />
        </div>
        <div className="w-full lg:w-[32%]">
          <ParticularLandCard />
          <Button
            title="Proceed to checkout"
            onClick={handleProceed}
            className="my-4 !max-w-sm !min-w-80 mx-auto"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ParticularLand;
