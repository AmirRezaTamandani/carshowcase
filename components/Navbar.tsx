import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import ThemeSwitch from "./ThemeSwitcher";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link
          href="/"
          className="flex justify-center items-center"
          scroll={false}
        >
          <Image
            src="logo.svg"
            alt="carhub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Navbar;
