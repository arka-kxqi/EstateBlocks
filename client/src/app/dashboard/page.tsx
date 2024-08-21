import Logout from "@/assets/logout";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import HouseCardHori from "@/components/HouseCardHori";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import UpperGradient from "@/components/upperGradient";
import React from "react";

const Dashboard = () => {
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
  const userData = {
    name: "Yash Agarwal",
    walletAddress: "0vctftvcdftyyftytybunyunnnnnnn4e",
  };
  return (
    <div className="bg-black max-w-[1660px] mx-auto flex min-h-screen flex-col gap-y-8 items-center px-2 sm:px-6 lg:px-8 pt-32 sm:pt-40">
      <Navbar />
      <UpperGradient />
      <div className="flex flex-col md:items-start items-center gap-y-5 md:justify-start md:flex-row gap-x-6 z-10">
        <div>
          <ProfileCard
            className="!h-fit"
            userData={userData}
            activeTab="On Sale"
          />
          <Button title="Sign Out" className="my-4">
            <Logout />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {dummyDataArray.map((item, ind) => {
            return <HouseCardHori key={ind} property={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
