import React from "react";
import { BiCamera } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MenuBar from "../../Dashboard/MenuBar";
import { ArrowLeftIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { VisitProperty } from "../../Dashboard/VisitProperty";
import deleteIcon from "../../../public/assets/images/delete.svg";
import Image from "next/image";

type TProps = {
  children: React.ReactElement;
};

const targetRoutes = [
  "/dashboard/owners-you-contacted",
  "/dashboard/interested-properties",
  "/dashboard/your-payments",
];

const DashBoardSidebar = (props: TProps) => {
  const router = useRouter();
  const [buttonMode, setButtonMode] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      // console.log(router.route.slice(11).replace("_"," "));
      // console.log(router.route.split("/"));

      //TODO: for real time window resize
      window.addEventListener("resize", function (event) {
        if (window.innerWidth < 1273) {
          setButtonMode(true);
        } else {
          setButtonMode(false);
        }
      });
      //TODO: for the first time when window is rendered
      if (window.innerWidth < 1273) {
        setButtonMode(true);
      } else {
        setButtonMode(false);
      }
    }
  }, [router.isReady]);
  return (
    <div className=" md_link:px-20 px-4 mt-6">
      <button
        onClick={() => router.back()}
        className="absolute left-3 top-[5rem] sm:left-5 sm:top-20 cursor-pointer"
      >
        <ArrowLeftIcon className="h-8 w-8 text-black" />
      </button>
      <div
        className={`grid grid-cols-12 relative ${
          targetRoutes.indexOf(router.pathname) !== -1
            ? "gap-y-5 gap-x-0"
            : "gap-5"
        }`}
      >
        <div className="col-span-12">
          <div className={`flex justify-between items-center border-b-4 pb-5 px-8 border-black`}>
            <div className="flex justify-start items-center">
              <span
                onClick={() => {
                  setToggle(!toggle);
                }}
                className={`cursor-pointer w-full mr-4 ${
                  !buttonMode ? "hidden" : "block"
                }`}
              >
                <Bars3Icon className="w-7 h-7 ml-5" />
              </span>
              <p className="text-lg min-w-[150px] font-bold">
                {router.route === "/dashboard"
                  ? router.route
                      .replaceAll("/", "")
                      .toLowerCase()
                      .replace(/\b(\w)/g, (s) => s.toUpperCase())
                  : router.route
                      .slice(11)
                      .replaceAll("-", " ")
                      .toLowerCase()
                      .replace(/\b(\w)/g, (s) => s.toUpperCase())}
              </p>
            </div>
            {["/dashboard", "/dashboard/edit-profile"].indexOf(
              router.pathname
            ) === -1 ? (
              [
                "/dashboard/owners-you-contacted",
                "/dashboard/your-payments",
              ].indexOf(router.pathname) === -1 ? (
                <Image src={deleteIcon} alt="Delete Icon" />
              ) : (
                <select className="py-[0.2rem] px-2 cursor-pointer rounded-xl text-white bg-black outline-none">
                  <option value="Sort By">Sort By</option>
                </select>
              )
            ) : null}
          </div>
          {router.pathname === "/dashboard" && (
            <div className="mt-10 xs:mb-6 md:mb-20">
              <div className="grid grid-cols-12 gap-5 bg-red-500] xs:place-items-center text-base">
                <div className="xs:col-span-2 col-span-12 flex flex-col xs:items-center items-start">
                  <div className="rounded-full  bg-primaryColor md:text-4xl text-2xl flex justify-center items-center  md:h-28 h-16 md:w-28 w-16  font-bold ">
                    S
                  </div>
                  <span className="mt-2 xs:ml-0 ml-[1.4rem]">
                    <BiCamera className="w-5 h-5 " />
                  </span>
                </div>
                <div className="xs:col-span-5 col-span-12  space-y-2 h-[6rem]">
                  <p className=" font-bold">
                    Name
                    <span className=" font-normal">:&#32;Suresh Singh</span>
                  </p>
                  <p className="font-bold">
                    E-mail
                    <span className=" font-normal">:&#32;suresh@abc.com</span>
                  </p>
                  <p className="font-bold">
                    Mobile
                    <span className="font-normal">:&#32;+91 01234 56789</span>
                  </p>
                </div>
                <div className="xs:col-span-5 col-span-12 space-y-2 h-[6rem] justify-between">
                  <p className=" font-bold">
                    Address
                    <span className="font-normal">
                      :&#32;611 W 180th St, Bangalore,Karnataka 560033
                    </span>
                  </p>
                  <p className=" font-bold">
                    ID
                    <span className="  font-normal">:&#32;ABC45DE67</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className={`${
            buttonMode
              ? !toggle
                ? "hidden"
                : `absolute ${
                    router.route !== "/dashboard" ? "top-[3rem]" : "top-[2rem]"
                  }  border-none shadow-lg rounded-md bg-white z-30 sm:w-[50%] w-[81%] h-[50rem] max-h-[50rem] px-5`
              : "col-span-3"
          }  border-r-4 border-black bg-white`}
        >
          {/* <div className={`absolute top-[22.5rem]  border-r-4 shadow-lg rounded-md bg-white z-50 w-[50%] h-[50rem] px-5`}> */}
          <MenuBar
            toggle={toggle}
            setToggle={setToggle}
            buttonMode={buttonMode}
          />
        </div>
        <div className={`${buttonMode ? "col-span-12" : "col-span-9 "}   mt-5`}>
          {/* <span
            onClick={() => {
              setToggle(!toggle);
            }}
            className={`absolute top-[0rem] left-[-1.5rem] cursor-pointer w-full ${
              !buttonMode ? "hidden" : "block"
            }`}
          >
            <Bars3Icon className="w-7 h-7 ml-5" />
          </span> */}
          {props.children}
        </div>
      </div>
      {router.route.length <= 10 && <VisitProperty />}
    </div>
  );
};
export default DashBoardSidebar;
