import React from "react";
import { Filter } from "../../components/property/Filter";
import { Products } from "../../components/property/Products";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Map } from "./Map";

export const Home = ({ ...pageProps }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(pageProps.windowWidth);
  const [isDisable, setIsDisable] = useState(false);
  // console.log(pageProps.properties);

  useEffect(() => {
    if (router.isReady) {
      //TODO: for real time window resize
      window.addEventListener("resize", function (event) {
        if (window.innerWidth < 1280) {
          // setIsDisable(true)
        } else {
          setIsDisable(false);
        }
      });
      //TODO: for the first time when window is rendered
      if (window.innerWidth < 1024) {
        //   setIsDisable(true)
      } else {
        setIsDisable(false);
      }
    }
  }, [router.isReady]);

  useEffect(() => {
    setWindowWidth(pageProps.windowWidth);
  }, [pageProps]);

  return (
    <div>
      <div className="grid grid-cols-12  md_link:gap-10 2xl:gap-14 gap-4 md_link:px-20 px-4 mt-4 relative ">
        <div
          className={`absolute left-4 md_link:left-[8%] cursor-pointer inline-flex col-span-12 ${
            windowWidth ? "block" : "hidden"
          }`}
          onClick={() => setIsDisable(!isDisable)}
        >
          <FiFilter className="h-5 w-5 sm:w-8 sm:h-8 mb-4 " />
          <IoMdArrowDropdown
            className={`h-5 w-5 absolute bottom-3 left-5 ${
              isDisable ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        <div
          className={`${
            windowWidth && isDisable
              ? " absolute bg-transparent grid grid-cols-12 rounded-l-lg  z-20 lg:left-[6%] left-[1.5%] top-[40px]"
              : windowWidth && !isDisable
              ? "hidden"
              : "block"
          } col-span-3`}
        >
          <Filter
            isDisable={isDisable}
            properties={pageProps.properties}
            setProperties={pageProps.setProperties}
            myproperties={pageProps.myproperties}
            loading={pageProps.loading}
            filter={pageProps.filter}
            setFilter={pageProps.setFilter}
            filterProperties={pageProps.filterProperties}
          />
        </div>

        <div className={`${windowWidth ? "col-span-12" : "col-span-9"} `}>
          <div className="space-x-2 mb-4  items-end flex">
            <p className="text-base font-medium ml-auto">Grid</p>
            <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
              <div className="toggle bg-primaryColor">
                <input
                  className="toggle-state"
                  type="checkbox"
                  name="check"
                  value="check"
                />
                <div
                  className={`indicator ${
                    toggle ? "translate" : "translate_back"
                  }`}
                ></div>
              </div>
            </div>
            <p className="text-base font-medium"> Map</p>
          </div>
          {toggle ? pageProps.properties && <Map {...pageProps} /> : <Products {...pageProps} />}
        </div>
      </div>
    </div>
  );
};
