import React from "react";
import { DoubleQuote } from "../SVGComponents/Home/DoubleQuote";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdStarHalf  , IoIosStar} from "react-icons/io";
import { Star } from "../SVGComponents/property/Star";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const Testimonial = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);

  const [nextEl, setNextel] = useState<HTMLElement | null>(null);
  return (
    <div className="sm:mt-20 mt-8  md_link:px-20 px-4">
      <p className="sm:text-2xl  text-xl font-bold  text-primaryColor text-center ">
        CUSTOMER TESTIMONIALS
      </p>

      <div className="mt-20 home_swiper relative">
        <Swiper
          breakpoints={{
            1350: {
              slidesPerView: 2,
            },

            900: {
              slidesPerView: 1,
            },
          }}
          modules={[Navigation]}
          spaceBetween={10}
          navigation={{ prevEl, nextEl }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className=" grid grid-cols-12"
        >
          

          <SwiperSlide className="col-span-6 h-full">
            <div className=" flex flex-col justify-center items-center  h-full">
              <div className="h-[10rem] w-[8rem]  pt-10 z-20 absolute bottom-[80%] rounded-full shadow-testimonial_shadow overflow-hidden">
                <img
                  // public/assets/images/Man.png
                  src="/assets/images/Man.png"
                  alt="customer"
                  className="w-full h-full "
                />
              </div>
              <div className="bg-[#F0F0F0]  w-full h-full flex flex-col justify-between items-center  rounded-lg z-10 pt-20 pb-5 px-16">
                <DoubleQuote />
                <p className=" font-semibold text-center text-base mt-10">
                  Its totally good.
                </p>
                <div className="mt-12 flex flex-col justify-center items-center">
                <div className="flex gap-x-2  items-center">
                    <IoIosStar className="w-8 h-8 text-black"></IoIosStar>
                    <IoIosStar className="w-8 h-8 text-black"></IoIosStar>
                    <IoIosStar className="w-8 h-8 text-black"></IoIosStar>
                    <IoIosStar className="w-8 h-8 text-black"></IoIosStar>
                    <IoMdStarHalf   className="w-9 h-9"/>
                   
                  </div>

                  <p className="mt-12 text-sm font-bold">Basavaraj</p>
                  <p className="text-sm  text-secondaryLightColor">Seller</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
             

          <SwiperSlide className="col-span-6 h-full">
            <div className=" flex flex-col justify-center items-center  h-full">
              <div className="h-[10rem] w-[8rem]  pt-10 z-20 absolute bottom-[80%] rounded-full shadow-testimonial_shadow overflow-hidden">
                <img
                  // public/assets/images/Man.png
                  src="/assets/images/Man.png"
                  alt="customer"
                  className="w-full h-full "
                />
              </div>
              <div className="bg-[#F0F0F0] w-full h-full flex flex-col justify-between items-center  rounded-lg z-10 pt-20 pb-5 px-16">
                <DoubleQuote />
                <p className=" font-semibold text-center text-base mt-10">
                  Well experienced, job done in given time limit & overall
                  satisfied. Great job. Keep it up.
                </p>
                <div className="mt-12 flex flex-col justify-center items-center">
                <div className="mt-12 flex flex-col justify-center items-center">
                  <div className="flex gap-x-2  items-center">
                    <IoIosStar className="w-8 h-8 text-black"></IoIosStar>
                    <IoIosStar className="w-8 h-8 text-black"></IoIosStar>
                    <IoIosStar className="w-8 h-8 text-black"></IoIosStar>
                    <IoIosStar className="w-8 h-8 text-black"></IoIosStar>
                    <IoMdStarHalf   className="w-9 h-9"/>
                   
                  </div>

            
                  <p className="mt-12 text-sm font-bold">Bhaskaran C</p>
                  <p className="text-sm  text-secondaryLightColor">Seller</p>
                </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="absolute p-3 top-[58%] left-[-21px] z-30 rounded-full bg-[#D9D9D9]"
          ref={(node) => setPrevEl(node)}
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#757575] " />
        </button>
        <button
          className="absolute p-3 top-[58%] right-[-21px]  rounded-full z-30 bg-black"
          ref={(node) => setNextel(node)}
        >
          <ChevronRightIcon className="w-6 h-6 text-white " />
        </button>
      </div>
    </div>
  );
};
