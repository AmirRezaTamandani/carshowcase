"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Header = () => {
  const handleScroll = () => {};
  return (
    <header className="header">
      <div className="flex-1 pt-36 padding-x">
        <div className="header__title">
          Find ,book or rent a car -quickly and easily
        </div>
        <p className="header__subtitle ">
          search cars and get some real data on em !
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="header__image-container">
        <div className="header__image">
          <Image
            src="/cart-transparent.png"
            alt="car Image"
            fill
            className="object-contain"
          />
        </div>
        <div className="header__image-overlay" />
      </div>
    </header>
  );
};

export default Header;
