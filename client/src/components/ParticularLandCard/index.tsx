import React from "react";
import Exchange from "../../assets/exchange";

interface IitemProps {
  title: string;
  subtitle: string;
}
const Item = ({ title, subtitle }: IitemProps) => {
  return (
    <div className="flex flex-col gap-y-[0.3px] py-2 border-b-[2px]">
      <p className="font-[500] text-[13px]">{title}</p>
      <p className="text-[17px] font-medium">{subtitle}</p>
    </div>
  );
};

const PriceSection = () => {
  return (
    <div className="flex py-4 justify-between w-full items-end">
      <div className="flex flex-col gap-y-1">
        <p className="font-[500]">
          Price <span className="font-[300] text-xs">(in sBTC)</span>
        </p>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="26.67"
          className="rounded-xl px-2 py-1 max-w-[140px] md:max-w-[120px]"
        />
      </div>
      <Exchange />
      <div className="flex flex-col gap-y-1">
        <p className="font-[500]">
          Equity <span className="font-[300] text-xs">(in %)</span>
        </p>
        <input
          type="number"
          name="equity"
          id="equity"
          placeholder="26.67"
          className="rounded-xl px-2 py-1 max-w-[140px] md:max-w-[120px]"
        />
      </div>
    </div>
  );
};
const ParticularLandCard = () => {
  return (
    <div className="bg-[#ffffff49] max-w-sm min-w-80 rounded-xl border-[0.1px] border-[#fff] sm:backdrop-blur-[6px] shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] flex flex-col p-5 mx-auto">
      <p className="text-[26px] font-semibold pb-1 border-b-[2px]">
        IIIT Lucknow Gomti Nagar
      </p>
      <Item title="Owner Name" subtitle="Yash Agarwal" />
      <Item
        title="Address"
        subtitle="Chak Ganjaria, C.G. City, Uttar Pradesh, 226002"
      />
      <Item title="Country" subtitle="India" />
      <Item title="State" subtitle="Uttar Pradesh" />
      <PriceSection />
    </div>
  );
};

export default ParticularLandCard;
