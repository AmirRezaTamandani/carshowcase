"use client";
import React from "react";
import { CustomeButtonProps } from "@/types";
import Image from "next/image";

const CustomeButton = ({
  title,
  type,
  containerStyles,
  handleClick,
}: CustomeButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomeButton;
