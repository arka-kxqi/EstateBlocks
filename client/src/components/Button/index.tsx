import React from "react";

const variants = {
  primary:
    "bg-[#F24405] rounded-md px-8 py-2 flex gap-2 w-full justify-center items-center hover:bg-[#F24405]/80",
  secondary:
    "bg-[#F24405] px-4 py-1 flex gap-2 w-fit justify-center items-center hover:bg-[#F24405]/80",
  link: "",
  pill: "",
  nav: "px-6 py-2 rounded-lg hover:opacity-90",
};

interface ButtonProperties
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  textClassName?: string;
  variant?: keyof typeof variants;
}

const Button = ({
  title,
  onClick,
  className = "",
  disabled = false,
  textClassName = "",
  variant = "primary",
  children,
  type,
  style,
  ...properties
}: ButtonProperties) => {
  const BASE_CLASS = "transition-all";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`${BASE_CLASS} ${variant && variants[variant]} ${className}`}
      {...properties}
    >
      {children && children}
      {title && <div className={`font-[500] ${textClassName}`}>{title}</div>}
    </button>
  );
};

export default Button;
