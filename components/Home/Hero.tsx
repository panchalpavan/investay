import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Rental } from "../property/disclosure/Rental";
export const Hero = () => {
  const [isRental, setIsRental] = useState(true);
  const [isResale, setIsResale] = useState(false);
  const [before, setBefore] = useState(false);
  const [after, setAfter] = useState(false);

  return (
    <div className="mt-8">
      <p className="text-center text-xl  italic">
        “Ninety percent of all millionaires become so through owning real
        estate."
      </p>
      <p className="text-center text-xl font-semibold">- Andrew Carnegie</p>
      <div className="bg-star_bg bg-contain bg-no-repeat w-full h-[40%] top-20 absolute  "></div>
      <div className="mt-10 5xl:h-[55rem] lg1:h-[35rem] sm:h-[20rem] h-[10rem] w-full relative  overflow-hidden flex ">
        <div
          // onMouseOver={() => {
          //   setBefore(true);
          //   setAfter(false);
          // }}
          onMouseOver={() => {
            setBefore(true);
            setAfter(false);
            setBefore(false);
            setAfter(true);
            setTimeout(() => {
              setIsRental(false);
              setIsResale(true);
            }, 600);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsRental(true);
              setIsResale(false);
            }, 600);
          }}
          className="relative h-full w-[30%] hover:w-[70%] bg-Rental bg-cover bg-center transition-all duration-[1.2s] ease-in-out"
        >
          <Link href={{ pathname: "/property", query: { Rental: true } }}>
            <button
              className={`${
                isRental ? "translate-x-52" : "translate-x-0"
              }  absolute hover:shadow-resale_shadow transition-all duration-[0.8s] bg-primaryColor lg1:px-12 px-5  lg1:py-3  py-2 rounded-lg bottom-1 right-10  text-lg font-semibold `}
            >
              Rental
            </button>
          </Link>
        </div>
        <div
         
          className="relative  border-l-[6px] overflow-hidden border-black h-full w-[70%]  group bg-Resale bg-cover bg-center transition-all duration-[1.2s] ease-in-out"
        >
          <Link href={{ pathname: "/property", query: { Rental: false } }}>
            <button
              className={`${
                isResale ? "translate-x-[-15rem]" : "translate-x-0"
              } transition-all duration-[0.8s]  absolute hover:shadow-resale_shadow bg-primaryColor lg1:px-12 px-5 lg1:py-3 py-2 rounded-lg bottom-1 left-10 text-lg font-semibold`}
            >
              Resale
            </button>
          </Link>
        </div>
      </div>

      <div className="sm:h-[15rem] h-[6rem] ">
        <img
          src="/assets/images/homeIllustrator.png"
          alt="rental image"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
