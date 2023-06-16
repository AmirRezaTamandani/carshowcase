import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px=16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/AmirRezaTamandaniLogoBlack.png"
            alt="amir reza tanandani logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            a demo sight using next js 13 <br />
            all rights preserved &copy;
          </p>
        </div>
        <div className="footer__links"></div>
      </div>
    </footer>
  );
};

export default Footer;
