"use client";
import React from "react";
import { CostumeButtonProps } from "@/types";
import Image from "next/image";

const CostumeButton = ({
  title,
  type,
  containerStyles,
  handleClick,
}: CostumeButtonProps) => {
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

export default CostumeButton;
