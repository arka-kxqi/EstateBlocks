"use client";
import Image from "next/image";
import React from "react";

const ParticularLandGallery = ({ gallery }: { gallery: string[] }) => {
  return (
    <div
      className="bg-[#ffffff49] rounded-2xl border-[0.1px] border-[#fff] sm:backdrop-blur-[6px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)]
    sm:grid md:grid-cols-8 w-full gap-4 h-full flex flex-col p-3 max-w-4xl"
    >
      <section className="col-start-1 col-span-4 h-full">
        <div className="relative h-[360px]">
          {gallery &&
            (gallery?.slice(0, 1) ?? []).map((img,ind) => (
              <Image
              key={ind}
                alt=""
                width={400}
                height={400}
                src={img}
                className="w-full h-[inherit] rounded-xl"
              />
            ))}
        </div>
      </section>

      {/* Secondary Section */}
      <section className="col-span-4 h-full">
        <div className="flex flex-col sm:grid grid-cols-2 grid-rows-2 gap-4 md:h-[360px] ">
          {gallery &&
            (gallery?.slice(1, 5) ?? []).map((img,ind) => (
              <Image
                key={ind}
                alt=""
                width={400}
                height={400}
                src={img}
                className="h-[170px] rounded-xl mx-auto"
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ParticularLandGallery;
