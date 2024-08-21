import React from "react";

import Bathroom from "../../assets/bathroom";
import Bed from "../../assets/bed";
import Directions_car from "../../assets/directions_car";
import Crop from "../../assets/crop";
import clsx from "clsx";

interface IParticularLandDescProps {
  land: ILandDescProps;
}

const DescItem = ({
  title,
  icon,
  desc,
  className = "",
}: {
  title: string;
  icon: React.JSX.Element;
  desc: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-2 px-4 sm:w-[25%] w-[50%] py-3",
        className
      )}
    >
      <p className="text-sm">{title}</p>
      <p className="flex gap-2 font-[600]">
        <span>{icon}</span>
        <span>{desc}</span>
      </p>
    </div>
  );
};

const mapping: { [key: number]: string } = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};

const ParticularLandDesc = ({ land }: IParticularLandDescProps) => {
  return (
    <div className="flex flex-col gap-y-4 py-6 md:py-10 max-w-4xl w-[100%]">
      <div className="flex flex-col gap-y-3">
        <p className="text-white text-3xl font-[500]">{land.name}</p>
        <p className="font-light text-md">{land.location}</p>
      </div>
      <div className="border-2 flex flex-wrap border-white rounded-2xl">
        {land.room && (
          <DescItem
            className="border-r-2"
            desc={mapping[land.room as number]}
            title="Rooms"
            icon={<Bed />}
          />
        )}
        {land.bathroom && (
          <DescItem
            className="sm:border-r-2"
            desc={mapping[land.bathroom as number]}
            title="Bathrooms"
            icon={<Bathroom />}
          />
        )}
        {land.area && (
          <DescItem
            className="border-r-2"
            desc={land.area.toString() + "sq ft"}
            title="Area"
            icon={<Crop />}
          />
        )}
        {land.parking && (
          <DescItem
            desc={land.parking}
            title="Parking"
            icon={<Directions_car />}
          />
        )}
      </div>
      <div className="py-2">
        <p className="font-[400] text-2xl py-2">Description</p>
        <p className="font-light text-sm">{land.description}</p>
      </div>
    </div>
  );
};

export default ParticularLandDesc;
