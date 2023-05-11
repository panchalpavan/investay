import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavDropDown from "./NavDropDown";
import ConfigDefaults from "../../Config/ConfigDefaults";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
type TProps = {
  buttonMode: boolean;
  shadow: boolean;
};

const Header = ({ buttonMode, shadow }: TProps) => {
  const router = useRouter();
  const reduxUser = useSelector((state: any) => {
    return state.getUserData;
  });

  // const [navBottomMode, setNavBottomMode] = useState(false);
  // useEffect(() => {
  //   setNavBottomMode(pageProps.buttonMode);
  // }, [pageProps]);

  const navigate = (e:any,path:String)=> {
    e.preventDefault();
    router.push(`${path}`);
  }

  return (
    <>
      <div
        className={`w-full h-16 xs:h-16 bg-primaryColor flex justify-between items-center px-4 xs:px-14 transition-all ease-in-out duration-300 ${
          shadow ? "shadow-nav nav-bg-color" : "bg-primaryColor"
        }`}
      >
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src={"/assets/images/whiteMainLogo.svg"}
            className="h-9 xs:h-12 w-28 xs:w-36"
            height={100}
            width={100}
            alt="MainLogo"
            priority
          />
        </div>
        <div className="flex  gap-6">
          {!buttonMode && !reduxUser.token && typeof window !== "undefined" ? (
            <div className="flex items-center gap-6">
              <button onClick={(e)=> navigate(e,"/signin")} className="bg-black text-primaryColor py-2 px-6 rounded-3xl font-inter font-normal text-xs">
                Sign In
              </button>
              <button onClick={(e)=> navigate(e,"/signup")} className="bg-black text-primaryColor py-2 px-6 rounded-3xl font-inter font-normal text-xs">
                Sign Up
              </button>
            </div>
          ) : (
            ""
          )}
          <NavDropDown buttonMode={buttonMode} />
        </div>
      </div>
    </>
  );
};

export default Header;
