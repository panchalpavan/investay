import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Navigation } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const InspectionImageSlider = ({gallery}:any) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextel] = useState<HTMLElement | null>(null);
  // const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  // console.log(gallery);
  
  return (
    <>
      <div className="3xl:h-[45rem] lg:h-[30rem]  rounded xs:h-[25rem] h-[15rem]  ">
        <div className="h-full overflow-hidden">
          <div className="w-full h-full flex justify-center items-center bg-[#dcdcdc]">
            <img
              src={`/uploads/${gallery[0]?.filename}`}
              className="object-fit w-full h-full "
              alt="gallery-image"
            />
          </div>
        </div>
      </div>
      <div className="  md_link:px-20 px-4">

        <div className=" my-6 relative">
          <Swiper
            breakpoints={{
              1500: {
                slidesPerView: 10,
              },
              1350: {
                slidesPerView: 8,
              },

              900: {
                slidesPerView: 5,
              },
              700: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            spaceBetween={10}
            navigation={{ prevEl, nextEl }}
            className=" grid grid-cols-8"
          >
            {
              gallery?.map((img:any, index:any) => {
                return (
                  <SwiperSlide key={index} className=" h-full">
                    <div className=" flex flex-col justify-center items-center  h-full">
                      <div className="h-[8rem] w-[8rem] shadow-testimonial_shadow overflow-hidden">
                        <img
                          src={`/uploads/${img?.filename}`}
                          alt="property image"
                          className="w-full h-full "
                        />
                      </div>

                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          <button
            className="absolute p-3 top-[30%] left-[-21px] z-30 rounded-full bg-[#D9D9D9]"
            ref={(node) => setPrevEl(node)}
          >
            <ChevronLeftIcon className="w-5 h-5 text-[#757575] " />
          </button>
          <button
            className="absolute p-3 top-[30%] right-[-21px]  rounded-full z-30 bg-black"
            ref={(node) => setNextel(node)}
          >
            <ChevronRightIcon className="w-5 h-5 text-white " />
          </button>
        </div>
      </div>
    </>
  );
};
