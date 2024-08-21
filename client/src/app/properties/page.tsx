import HouseCard from "@/components/HouseCard";
import Navbar from "@/components/Navbar";
import React from "react";
import PropertyHero from "./PropertyHero";
import Footer from "@/components/Footer";
import UpperGradient from "@/components/upperGradient";

const Properties = () => {
  const dummyDataArray: Iproperty[] = [
    {
      id: 1,
      name: "Property 1",
      imageUrl:
        "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
      location: "Location 1",
      description: "Description for property 1",
      area: 750,
      amount: 75000,
      percentage: 3.5,
      equity: 64,
    },
    {
      id: 2,
      name: "Property 2",
      imageUrl:
        "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
      location: "Location 2",
      description: "Description for property 2",
      area: 800,
      amount: 120000,
      percentage: 7.2,
      equity: 12,
    },
    {
      id: 3,
      name: "Property 3",
      imageUrl:
        "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
      location: "Location 3",
      description: "Description for property 3",
      area: 900,
      amount: 80000,
      percentage: 19.8,
      equity: 91,
    },
    {
      id: 4,
      name: "Property 4",
      imageUrl:
        "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
      location: "Location 4",
      description: "Description for property 4",
      area: 950,
      amount: 90000,
      percentage: 5.5,
      equity: 35,
    },
    {
      id: 5,
      name: "Property 5",
      imageUrl:
        "https://media.istockphoto.com/id/1398087835/photo/pink-palace-hawa-mahal-jaipur-india-beautiful-sunset-view.jpg?s=612x612&w=0&k=20&c=S8X6bk4Mdp0xu624dFZCHfobotdwdIp7K1FEQJV6hkI=",
      location: "Location 5",
      description:
        "Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5Description for property 5.",
      area: 600,
      amount: 70000,
      percentage: 2.3,
      equity: 78,
    },
  ];
  return (
    <div className="bg-black max-w-[1660px] mx-auto flex min-h-screen flex-col gap-y-8 items-center px-2 sm:px-6 lg:px-8 pt-32 sm:pt-40">
      <Navbar />
      <UpperGradient />
      <PropertyHero />
      <div className="max-w-[1330px] mx-auto w-full flex flex-wrap justify-center sm:grid gap-6 grid-cols-2 md:grid-cols-3 place-items-center my-8 z-10">
        {dummyDataArray.map((item, ind) => {
          return <HouseCard key={ind} property={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
