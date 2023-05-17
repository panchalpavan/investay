import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { RightArrow } from "../SVGComponents/RightArrow";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

type TProps = {
  pageName: string;
};
const ShortListSlider = ({ pageName }: TProps) => {
  // image slider
  const image_data = [
    "/assets/images/CardImage.png",
    "/assets/images/CardImage2.jpg",
    "/assets/images/CardImage3.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const handleBackWard = () => {
    if (index != 0) {
      setIndex((val) => val - 1);
    }
  };
  const handleForward = () => {
    if (image_data.length - 1 != index) {
      setIndex((val) => val + 1);
    }
  };
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);

  const [nextEl, setNextel] = useState<HTMLElement | null>(null);
  return (
    <>
      <p className="text-lg  xl:ml-0 ml-10 font-bold mt-20">{pageName}</p>
      <div className="relative mt-5">
        <Swiper
          breakpoints={{
            1900: {
              slidesPerView: 3,
            },

            800: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation]}
          spaceBetween={10}
          navigation={{ prevEl, nextEl }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="shadow-lg flex flex-col rounded-lg overflow-hidden h-fit z-50 mb-5">
              <div className="h-48 xxs:h-[15.2rem] relative ">
                <p className="bg-greenBg text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center">
                  Trending
                </p>
                <img
                  src={image_data[index]}
                  alt="card image"
                  className="h-full w-full"
                />
                <div className="absolute bottom-0 right-0 flex m-2">
                  <span>
                    <ChevronLeftIcon
                      className={`w-5 h-5  cursor-pointer ${
                        index === 0 ? "text-gray-400" : "text-white"
                      }`}
                      onClick={handleBackWard}
                    />
                  </span>
                  <span>
                    <ChevronRightIcon
                      className={`w-5 h-5  cursor-pointer ${
                        index === image_data.length - 1
                          ? "text-gray-400"
                          : "text-white"
                      }`}
                      onClick={handleForward}
                    />
                  </span>
                </div>
              </div>
              <div className=" mt-1 xxs:mt-4">
                <div className="px-3 xxs:px-6">
                  <p className="text-lg font-semibold  	">
                    Modern and quirky flat
                  </p>
                  <p className="font-normal text-xs ">
                    611 W 180th St, Bangalore, Karnatak 10033,{" "}
                  </p>
                  <p className="text-lg font-semibold text-primaryColor mt-1">
                    ₹88 Lac + 10k{" "}
                    <span className="text-sm"> Maintaince Monthly</span>{" "}
                  </p>
                </div>

                <div className="px-3 xxs:px-6 mt-2 grid grid-cols-12 ">
                  <div className="col-span-6 flex justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold">Project Name</p>
                      <p className="text-xs font-semibold ">Direction Facing</p>
                      <p className="text-xs font-semibold ">Property Type</p>
                      <p className="text-xs font-semibold ">
                        Constuction Status
                      </p>
                      <p className="text-xs font-semibold ">Tenancy Status</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-normal">Modern</p>
                      <p className="text-xs font-normal">North East</p>
                      <p className="text-xs font-normal">Building</p>
                      <p className="text-xs font-normal">Done</p>
                      <p className="text-xs font-normal">Immediate</p>
                    </div>
                  </div>
                  <div className="flex col-span-6 justify-between ml-5">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold">Area</p>
                      <p className="text-xs font-semibold ">Furnishing</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-normal">1200 sq.ft</p>
                      <p className="text-xs font-normal">Full</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 w-full flex justify-between">
                  <button className="bg-black rounded-b-lg rounded-r-lg text-primaryColor text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex justify-center items-center">
                    ENQUIRE NOW
                  </button>
                  <button className="bg-primaryColor rounded-b-lg rounded-l-lg  text-black text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex items-center justify-center">
                    Details
                    <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg flex flex-col rounded-lg overflow-hidden h-fit z-50 mb-5">
              <div className="h-48 xxs:h-[15.2rem] relative ">
                <p className="bg-greenBg text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center">
                  Trending
                </p>
                <img
                  src={image_data[index]}
                  alt="card image"
                  className="h-full w-full"
                />
                <div className="absolute bottom-0 right-0 flex m-2">
                  <span>
                    <ChevronLeftIcon
                      className={`w-5 h-5  cursor-pointer ${
                        index === 0 ? "text-gray-400" : "text-white"
                      }`}
                      onClick={handleBackWard}
                    />
                  </span>
                  <span>
                    <ChevronRightIcon
                      className={`w-5 h-5  cursor-pointer ${
                        index === image_data.length - 1
                          ? "text-gray-400"
                          : "text-white"
                      }`}
                      onClick={handleForward}
                    />
                  </span>
                </div>
              </div>
              <div className=" mt-1 xxs:mt-4">
                <div className="px-3 xxs:px-6">
                  <p className="text-lg font-semibold  	">
                    Modern and quirky flat
                  </p>
                  <p className="font-normal text-xs ">
                    611 W 180th St, Bangalore, Karnatak 10033,{" "}
                  </p>
                  <p className="text-lg font-semibold text-primaryColor mt-1">
                    ₹88 Lac + 10k{" "}
                    <span className="text-sm"> Maintaince Monthly</span>{" "}
                  </p>
                </div>

                <div className="px-3 xxs:px-6 mt-2 grid grid-cols-12 ">
                  <div className="col-span-6 flex justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold">Project Name</p>
                      <p className="text-xs font-semibold ">Direction Facing</p>
                      <p className="text-xs font-semibold ">Property Type</p>
                      <p className="text-xs font-semibold ">
                        Constuction Status
                      </p>
                      <p className="text-xs font-semibold ">Tenancy Status</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-normal">Modern</p>
                      <p className="text-xs font-normal">North East</p>
                      <p className="text-xs font-normal">Building</p>
                      <p className="text-xs font-normal">Done</p>
                      <p className="text-xs font-normal">Immediate</p>
                    </div>
                  </div>
                  <div className="flex col-span-6 justify-between ml-5">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold">Area</p>
                      <p className="text-xs font-semibold ">Furnishing</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-normal">1200 sq.ft</p>
                      <p className="text-xs font-normal">Full</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 w-full flex justify-between">
                  <button className="bg-black rounded-b-lg rounded-r-lg text-primaryColor text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex justify-center items-center">
                    ENQUIRE NOW
                  </button>
                  <button className="bg-primaryColor rounded-b-lg rounded-l-lg  text-black text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex items-center justify-center">
                    Details
                    <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-lg flex flex-col rounded-lg overflow-hidden h-fit z-50 mb-5">
              <div className="h-48 xxs:h-[15.2rem] relative ">
                <p className="bg-greenBg text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center">
                  Trending
                </p>
                <img
                  src={image_data[index]}
                  alt="card image"
                  className="h-full w-full"
                />
                <div className="absolute bottom-0 right-0 flex m-2">
                  <span>
                    <ChevronLeftIcon
                      className={`w-5 h-5  cursor-pointer ${
                        index === 0 ? "text-gray-400" : "text-white"
                      }`}
                      onClick={handleBackWard}
                    />
                  </span>
                  <span>
                    <ChevronRightIcon
                      className={`w-5 h-5  cursor-pointer ${
                        index === image_data.length - 1
                          ? "text-gray-400"
                          : "text-white"
                      }`}
                      onClick={handleForward}
                    />
                  </span>
                </div>
              </div>
              <div className=" mt-1 xxs:mt-4">
                <div className="px-3 xxs:px-6">
                  <p className="text-lg font-semibold  	">
                    Modern and quirky flat
                  </p>
                  <p className="font-normal text-xs ">
                    611 W 180th St, Bangalore, Karnatak 10033,{" "}
                  </p>
                  <p className="text-lg font-semibold text-primaryColor mt-1">
                    ₹88 Lac + 10k{" "}
                    <span className="text-sm"> Maintaince Monthly</span>{" "}
                  </p>
                </div>

                <div className="px-3 xxs:px-6 mt-2 grid grid-cols-12 ">
                  <div className="col-span-6 flex justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold">Project Name</p>
                      <p className="text-xs font-semibold ">Direction Facing</p>
                      <p className="text-xs font-semibold ">Property Type</p>
                      <p className="text-xs font-semibold ">
                        Constuction Status
                      </p>
                      <p className="text-xs font-semibold ">Tenancy Status</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-normal">Modern</p>
                      <p className="text-xs font-normal">North East</p>
                      <p className="text-xs font-normal">Building</p>
                      <p className="text-xs font-normal">Done</p>
                      <p className="text-xs font-normal">Immediate</p>
                    </div>
                  </div>
                  <div className="flex col-span-6 justify-between ml-5">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold">Area</p>
                      <p className="text-xs font-semibold ">Furnishing</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-normal">1200 sq.ft</p>
                      <p className="text-xs font-normal">Full</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 w-full flex justify-between">
                  <button className="bg-black rounded-b-lg rounded-r-lg text-primaryColor text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex justify-center items-center">
                    ENQUIRE NOW
                  </button>
                  <button className="bg-primaryColor rounded-b-lg rounded-l-lg  text-black text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex items-center justify-center">
                    Details
                    <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="absolute p-3 left-[-23px] top-[43%] first-letter: z-10 rounded-full bg-[#D9D9D9]"
          ref={(node) => setPrevEl(node)}
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#757575] " />
        </button>
        <button
          className="absolute p-3  top-[43%]  right-[-24px] z-10 rounded-full bg-black"
          ref={(node) => setNextel(node)}
        >
          <ChevronRightIcon className="w-6 h-6 text-white " />
        </button>
      </div>
    </>
  );
};
export default ShortListSlider;
