import React from "react";

const UpperGradient = () => {
  return (
    <div
      className="w-[90vw] h-[120vw] fixed rounded-full bottom-[40%]"
      style={{
        backdropFilter: "blur(3px)",
        boxShadow: "inset 0px 0px 10px 10px #000",
        background:
          "linear-gradient(180deg, hsla(13, 80%, 43%, 1) 80%, hsla(54, 90%, 73%, 1) 100%)",
      }}
    ></div>
  );
};

export default UpperGradient;
