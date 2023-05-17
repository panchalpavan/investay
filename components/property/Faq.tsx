import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Rental } from "./disclosure/Rental";
import { Resale } from "./disclosure/Resale";

type TProps = {
  isRental: boolean;
  setIsRental: Function;
};

export const Faq = ({ isRental, setIsRental }: TProps) => {
  const router = useRouter();
  const [rental, setRental] = useState(true);

  return (
    <>
      <div id="faq" className="w-full z-[200]">
        <p className="text-center font-bold text-[26px] xxs:text-3xl text-primaryColor">
          FAQs
        </p>
        <div className="text-center mt-6 xxs:mt-10 space-x-6">
          <button
            onClick={() => setIsRental(true)}
            className={`px-4 xxs:px-8 py-2 xxs:py-3  bg-primaryColor text-black text-base xxs:text-md rounded-t-lg ${
              isRental ? "shadow-resale_shadow  font-bold" : "font-normal"
            }`}
          >
            Rental
          </button>
          <button
            onClick={() => setIsRental(false)}
            className={`px-4 xxs:px-8 py-2 xxs:py-3  bg-primaryColor text-black text-base xxs:text-md rounded-t-lg ${
              !isRental ? "shadow-resale_shadow  font-bold" : "font-normal"
            }`}
          >
            Resale
          </button>
        </div>
      </div>
      <div>{isRental ? <Rental /> : <Resale />}</div>
    </>
  );
};
