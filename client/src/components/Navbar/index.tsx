"use client";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { showConnect } from "@stacks/connect";
import { userSession } from "@/components/use-connect";
import { useUserContext } from "@/contexts/user-context";

const NavbarLink = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Buy",
    path: "/properties",
  },
  {
    name: "Sell",
    path: "/addProperty",
  },
  {
    name: "Rent",
    path: "/addProperty",
  },
];

const Navbar = () => {
  const { setUser, user } = useUserContext();

  const connectWallet = () => {
    const myAppName = "My Stacks Web-App"; // shown in wallet pop-up
    const myAppIcon = window.location.origin + "/my_logo.png"; // shown in wallet pop-up

    showConnect({
      userSession, // `userSession` from previous step, to access storage
      appDetails: {
        name: myAppName,
        icon: myAppIcon,
      },
      // @ts-ignore
      onFinish: (s: any) => {
        console.log(s.userSession.loadUserData());
        setUser((prev) => ({
          ...prev,
          walletAddress:
            s.userSession.loadUserData().profile.stxAddress.testnet,
        }));
        console.log("ho gya");
      },
      onCancel: () => {
        console.log("cancel ho gya");
        console.log("oops"); // WHEN user cancels/closes pop-up
      },
    });
  };
  return (
    <div className="z-50 max-w-[1660px]  w-[90%] fixed top-[40px]  flex justify-between items-center px-8 py-3 bg-[#ffffff49] rounded-full border-[1px] border-[#fff] sm:backdrop-blur-[6px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)]">
      <div className="text-white font-bold text-xl">
        <span className="text-[#F24405]">Crypto</span>Realms
      </div>
      <div className="bg-white rounded-full w-[36%] flex gap-4 justify-around text-black px-4 py-1">
        {NavbarLink.map((link, ind) => {
          return (
            <Link key={ind} href={link.path}>
              {link.name}
            </Link>
          );
        })}
      </div>
      {user?.walletAddress ? (
        <div className="border border-white text-sm font-semibold text-white px-2 py-1 rounded-full ">
          {user?.walletAddress?.substring(0, 7) +
            "...." +
            user?.walletAddress?.substring(
              user?.walletAddress?.length - 4,
              user?.walletAddress?.length - 1
            )}{" "}
        </div>
      ) : (
        <button
          className={
            "cursor-pointer text-md font-medium hover:bg-white hover:text-black text-white border border-white px-2 py-1 rounded-full"
          }
          onClick={() => connectWallet()}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default Navbar;
