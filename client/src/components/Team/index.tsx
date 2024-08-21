import Quote from "@/assets/quote";
import React from "react";
const team = [
  {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Aviral Hatwal",
    title: "Blockchain Developer",
    desc: "Passionate about blockchain technology. Skilled in smart contract development.",
  },
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Yash Agarwal",
    title: "Web Developer",
    desc: "Experienced in frontend and backend development. Enthusiastic about creating user-friendly interfaces.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Akhilesh Jyotishi",
    title: "Blockchain Developer",
    desc: "Expertise in smart contract development. Knowledgeable in decentralized applications (DApps).",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Mayank Rawat",
    title: "Product designer",
    desc: "Specializes in user-centered design. Proficient in UI/UX principles and prototyping tools.",
  },
];

const Team = () => {
  return (
    <div className="w-full flex flex-col gap-4 mx-4 my-16 sm:my-24">
      <div className="w-[90%] mx-auto text-3xl font-[600]">
        <span className="px-4">-</span> Team
      </div>
      <div className="min-w-[90%] max-w-[840px] mx-auto grid items-center gap-6 grid-cols-1 md:grid-cols-2">
        {team.map((item, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[90%] mx-auto flex gap-2 items-center rounded-xl"
          >
            <div className="">
              <div className="sm:w-32 sm:h-32 w-24 h-24 rounded-full bg-[#F24405]"></div>
            </div>
            <div>
              <div className="">
                <Quote />
              </div>
              <figure className="">
                <blockquote>
                  <p className="sm:text-sm text-xs px-4 py-1">{item.desc}</p>
                </blockquote>
                <div className=" px-4 py-2 mt-2 ">
                  <span className="block text-[#F24405] font-[600] text-xl">
                    {item.name}
                  </span>
                  <span className="block text-[#F24405] text-sm">
                    {item.title}
                  </span>
                </div>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
