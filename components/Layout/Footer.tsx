import React from "react";
import Image from "next/image";
import MobileIcon from "../SVGComponents/Footer/MobileIcon";
import ReraIcon from "../SVGComponents/Footer/ReraIcon";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { RiCellphoneLine } from "react-icons/ri";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div id="footer" className="mt-auto w-full">
        <div
          className={`${
            ["/signin", "/signup", "/signup/change-password"].indexOf(
              router.pathname
            ) === -1
              ? "border-t border-secondaryColor mt-16"
              : "border-none mt-0"
          } mx-2 sm:mx-4 md_link:mx-20`}
        >
          <div className="flex flex-col md_link:flex-row justify-between items-center gap-4 md_link:gap-8 w-full p-2 md_link:py-4 md_link:px-10">
            <div className="space-y-[0.25rem] md_link:space-y-2 mt-4 sm:mt-10 w-full flex flex-col items-start text-xxs xxs:text-sm ">
              <div className="flex justify-center items-center gap-1 xxs:gap-2 ">
                <AiOutlinePhone className="text-primaryColor h-6 w-6" />
                <p className="font-normal">+91 8044334464 </p>
              </div>
              <div className="flex justify-center items-center gap-1 xxs:gap-2 ">
                {/* <RiCellphoneLine className="text-primaryColor h-6 w-6" /> */}
                <MobileIcon width="1.5rem" height="1.5rem" />
                <p className="font-normal">+91 9900062997 </p>
              </div>
              <div className="flex items-center justify-center gap-1 xxs:gap-2">
                <AiOutlineMail className="text-primaryColor h-6 w-6" />
                <p className="font-normal">enquiry@investayrealty.com</p>
              </div>
              <div className="w-full flex items-center justify-center gap-1 xxs:gap-2">
                <TfiLocationPin className="text-primaryColor h-6 w-6" />
                <p className="w-full font-normal">
                  No. 10/1, Ground Floor, Lakshminarayana Complex, Palace Road,
                  Bangalore, Karnataka, India-560052
                </p>
              </div>
              <div className="w-full flex items-center justify-center gap-1 xxs:gap-2">
                {/* <TfiLocationPin className="text-primaryColor h-6 w-6" /> */}
                <ReraIcon width="1.5rem" height="1.5rem" />

                <p className="w-full font-normal">
                  RERA No: PRM/KA/RERA/1251/309/AG/221220/003308
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 text-xxs xxs:text-sm bg-primaryColor flex flex-col items-center justify-between xl:flex-row py-[0.3rem] md:px-16 xl:px-28 ">
          <p className="font-normal text-black">
            © 2022 INVESTAY. All rights reserved
          </p>
          <div className="flex flex-row items-center justify-center gap-1 xs:gap-2 md_link:gap-10 mt-2 md_link:mt-0">
            <Link href="/terms-conditions">
              <p className="font-normal text-black  cursor-pointer ">
                Terms & Conditions
              </p>
            </Link>
            <div className="h-2 xxs:h-3 sm:h-4 border border-black" />
            <Link href="/privacy-policies">
              <p className="font-normal text-black cursor-pointer">
                Privacy Policy
              </p>
            </Link>
            <div className="h-2 xxs:h-3 sm:h-4  border border-black" />
            <Link href="/privacy-policies">
              <p className="font-normal text-black cursor-pointer">Site Map</p>
            </Link>
            <div className="h-2 xxs:h-3 sm:h-4  border border-black" />
            <Link href="/disclaimer">
              <p className="font-normal text-black cursor-pointer">
                Disclaimer
              </p>
            </Link>

            {/* <div className="h-2 xxs:h-3 sm:h-4 border border-black" /> */}
            {/* <p className="font-normal text-black cursor-pointer">Sitemap</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
