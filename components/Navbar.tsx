import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomeButton from "./CustomeButton";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="logo.svg"
            alt="carhub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomeButton
          title={"Sign In"}
          type="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
        />
      </nav>
    </header>
  );
};

export default Navbar;
