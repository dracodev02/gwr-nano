"use client";

import { cn } from "@/utils/utils";
import { title } from "process";
import React from "react";

type ButtonPropsCustom = {
  variant?: "primary" | "outline";
  title: string;
  icon?: React.ReactNode;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonPropsCustom;

const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "primary",
  icon,
  title,
  ...props
}) => {
  const classes = cn(
    {
      "bg-primary text-white hover:bg-[#08acf2] px-4 py-2 max-md:text-sm":
        variant === "primary",
      "bg-transparent text-primary hover:text-black p-0": variant === "outline",
      "flex items-center gap-x-2": icon,
    },
    "rounded-lg font-bold transition-all duration-500",
    className
  );

  return (
    <button className={`${classes}`} {...props}>
      {title}
      {icon}
    </button>
  );
};

export default Button;
