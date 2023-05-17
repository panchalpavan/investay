import React from "react";
import { useState, useEffect } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";

type TProps = {
  scrollToTop: boolean;
};

export const ScrollToTop = ({ scrollToTop }: TProps) => {
  const [upperArrow, setUpperArrow] = useState(scrollToTop);
  useEffect(() => {
    setUpperArrow(scrollToTop);
  }, [scrollToTop]);

  return (
    <div>
      {upperArrow && (
        <div
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-10 right-5 sm:right-7 md_link:right-5 cursor-pointer rounded-full h-12 w-12 hover:h-14 hover:w-14 bg-primaryColor flex justify-center items-center shadow-[3px_2px_14px_8px_#76a0ff52] hover:shadow-[2px_1px_12px_6px_#76a0ff52] transition-all duration-300 ease-in-out z-[60] "
        >
          <ArrowSmallUpIcon className="h-8 w-8 text-white transition-all duration-300 ease-in-out" />
        </div>
        // </div>
      )}
    </div>
  );
};
