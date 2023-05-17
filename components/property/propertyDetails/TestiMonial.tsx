import React from "react";
import { Star } from "../../SVGComponents/property/Star";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Review from "../../Modal/Review/ReviewModal";
import { reviews } from "../../../utilities/amenities";

const TestiMonial = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [viewAll, setviewAll] = useState(false);
  const [nextEl, setNextel] = useState<HTMLElement | null>(null);
  const [isOpen, setisOpen] = useState(false);
  const reduxData = useSelector((state: any) => {
    return state.getReviewsData;
  });

  const [review, setReview] = useState(undefined);

  return (
    <>
      <Review
        isOpen={isOpen}
        setIsOpen={setisOpen}
        review={review}
        setReview={setReview}
      />
      {reduxData.reviews?.length > 0 && (
        <div className="mt-10 mb-20 relative">
          <button
            onClick={() => setviewAll(!viewAll)}
            className="text-base absolute right-0 "
          >
            {" "}
            {viewAll ? "View Less" : "View All"}
          </button>
        </div>
      )}
      {viewAll ? (
        <div
          id="review"
          className="mt-24 bg-white relative h-[45rem] overflow-y-auto overflow-x-hidden  grid grid-cols-12  lg:gap-6 gap-5 lg1:p-20 md:p-12 base:p-6 xxs:p-10 p-4"
        >
          {reduxData.reviews?.map((review: any, index: number) => {
            const day = new Date(review.createdAt).getDay();
            const month = new Date(review.createdAt).getMonth() + 1;
            const year = new Date(review.createdAt).getFullYear();
            return (
              <div
                key={review?._id}
                className="md_link:h-[320px] lg:h-[250px] 2xl:col-span-4 base:col-span-6 col-span-12 lg1:px-8 xs:py-4 xs:px-4 p-2 border-2 border-secondaryColor  bg-[#F3F3F3] rounded-md flex flex-col justify-between items-start z-10"
              >
                <div className="w-full">
                  <div className="w-full flex sm:items-center base:items-start lg:items-center sm:flex-row flex-col base:flex-col lg:flex-row">
                    <div className="flex items-center">
                      <div className="rounded-full bg-[#D9D9D9] capitalize text-[#757575] xs:text-3xl text-xl xs:w-12 w-10 xs:h-12 h-10 flex justify-center items-center">
                        {review.name.substring(0, 1)}
                      </div>
                      <p className=" text-lg ml-2">{review.name}</p>
                    </div>
                    <div className=" sm:ml-auto base:ml-0 lg:ml-auto sm:mt-0 mt-4 base:mt-4 lg:mt-0">
                      <div className="flex gap-1">
                        <Star
                          width="1.5rem"
                          height="1.5rem"
                          index={1}
                          ratings={review.avg}
                        />
                        <Star
                          width="1.5rem"
                          height="1.5rem"
                          index={2}
                          ratings={review.avg}
                        />
                        <Star
                          width="1.5rem"
                          height="1.5rem"
                          index={3}
                          ratings={review.avg}
                        />
                        <Star
                          width="1.5rem"
                          height="1.5rem"
                          index={4}
                          ratings={review.avg}
                        />
                        <Star
                          width="1.5rem"
                          height="1.5rem"
                          index={5}
                          ratings={review.avg}
                        />
                      </div>
                      <p className=" text-start mt-2 text-secondaryColor font-semibold ">
                        {day}/{month}/{year}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 font-medium  xs:text-base text-sm capitalize">
                    {review.likes.length > 100
                      ? `${review.likes.substring(0, 100)}...`
                      : review.likes}
                    {review.likes.length > 100 && (
                      <span
                        className="font-[600] cursor-pointer"
                        onClick={() => {
                          setisOpen(true);
                          setReview(review);
                        }}
                      >
                        Read More
                      </span>
                    )}
                  </div>
                </div>
                <div className=" mt-5  font-medium  text-base capitalize">
                  <p>{review.name}</p>
                  <p>{review.role}</p>
                </div>
              </div>
            );
          })}
          <div className="bg-star_bg bg-cover bg-no-repeat w-[40%] h-[26%]  absolute right-0 top-0 z-0"></div>
        </div>
      ) : reduxData.reviews?.length === 0 ? (
        // <div className="text-red-400">No Reviews</div>
        <></>
      ) : (
        <div id="review" className="mt-24 relative ">
          <Swiper
            breakpoints={{
              // 1500: {
              //   slidesPerView: 4,
              // },
              1350: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation]}
            spaceBetween={10}
            navigation={{ prevEl, nextEl }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {reduxData.reviews?.map((review: any) => {
              const day = new Date(review.createdAt).getDay();
              const month = new Date(review.createdAt).getMonth() + 1;
              const year = new Date(review.createdAt).getFullYear();
              return (
                <SwiperSlide key={review?._id}>
                  <div className="h-[300px] xxs:h-[280px] xs:py-4 xs:px-4 py-2 px-5 border-2 border-secondaryColor w-full bg-[#F3F3F3] rounded-md flex flex-col justify-between items-start">
                    <div className="w-full">
                      <div className="w-full flex xs:items-center xs:flex-row flex-col">
                        <div className="flex items-center">
                          <div className="rounded-full bg-[#D9D9D9] capitalize text-[#757575] xs:text-3xl text-xl xs:w-12 w-10 xs:h-12 h-10 flex justify-center items-center">
                            {review.name.substring(0, 1)}
                          </div>
                          <p className=" text-lg ml-2">{review.name}</p>
                        </div>
                        <div className=" xs:ml-auto xs:mt-0 mt-4">
                          <div className="flex gap-1">
                            <Star
                              width="1.5rem"
                              height="1.5rem"
                              index={1}
                              ratings={review.avg}
                            />
                            <Star
                              width="1.5rem"
                              height="1.5rem"
                              index={2}
                              ratings={review.avg}
                            />
                            <Star
                              width="1.5rem"
                              height="1.5rem"
                              index={3}
                              ratings={review.avg}
                            />
                            <Star
                              width="1.5rem"
                              height="1.5rem"
                              index={4}
                              ratings={review.avg}
                            />
                            <Star
                              width="1.5rem"
                              height="1.5rem"
                              index={5}
                              ratings={review.avg}
                            />
                          </div>
                          <p className=" text-start mt-2 text-secondaryColor font-semibold ">
                            {day}/{month}/{year}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 font-medium  xs:text-base text-sm capitalize">
                        {review.likes.length > 100
                          ? `${review.likes.substring(0, 100)}...`
                          : review.likes}
                        {review.likes.length > 100 && (
                          <span
                            className="font-[600] cursor-pointer"
                            onClick={() => {
                              setisOpen(true);
                              setReview(review);
                            }}
                          >
                            Read More
                          </span>
                        )}
                      </div>
                    </div>
                    <div className=" mt-5  font-medium  text-base capitalize">
                      <p>{review.name}</p>
                      <p>{review.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
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
      )}

      {viewAll && (
        <div className="bg-star_bg bg-contain bg-no-repeat w-[40%] h-[26%]  absolute left-0 z-0"></div>
      )}
    </>
  );
};
export default TestiMonial;
