import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import Image from "next/legacy/image";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { RightArrow } from "../../SVGComponents/RightArrow";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type TProps = {
  isOpen: boolean;
  setIsOpen: Function;
  gallery: any;
};
const arr = [
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
  "ds",
  "asd",
  "asd",
];
const GalleryModal = ({ isOpen, setIsOpen, gallery }: TProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);

  const [nextEl, setNextel] = useState<HTMLElement | null>(null);

  const [index, setIndex] = useState(0);

  // console.log("----------------gallery modal: ", gallery);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[80] "
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transition-all bg-white rounded-lg py-10 sm:px-20 px-10 relative   w-full max-w-6xl mt-20 overflow-x-hidden">
                  <ArrowLeftIcon
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6  absolute left-3 sm:left-6 top-10 cursor-pointer"
                  />
                  <div>
                    <ul className="flex gap-5 items-center overflow-x-auto">
                      <li className="min-w-[140px] sm:min-w-auto text-base font-bold ">
                        Outside images
                      </li>
                      <li className="text-base font-bold border-b-4 border-primaryColor ">
                      Room
                      </li>
                      {/* <li className="text-base font-bold ">Amenities</li> */}
                      {/* <li className="min-w-[90px] sm:min-w-auto text-base text-start font-bold">
                        Floor Plan
                      </li> */}
                      {/* <li className="text-base font-bold ">Video</li> */}
                    </ul>
                  </div>

                  <div className="mt-5 relative">
                    <div className="w-full base:h-[30rem] xs:h-[20rem] h-[15rem]">
                      {gallery?.length > 0 && <img
                        src={`/uploads/${gallery[index].filename}`}
                        alt="Gallery_image"
                        className="w-full h-full "
                      />}
                    </div>

                    <div className="mt-5">
                      <Swiper
                        breakpoints={{
                          2000: {
                            slidesPerView: 10,
                          },
                          950: {
                            slidesPerView: 8,
                          },
                          850: {
                            slidesPerView: 7,
                          },
                          700: {
                            slidesPerView: 5,
                          },
                          550: {
                            slidesPerView: 3,
                          },
                          200: {
                            slidesPerView: 2,
                          },
                        }}
                        className="relative"
                        // install Swiper modules
                        modules={[Navigation]}
                        spaceBetween={10}
                        // slidesPerView={11}
                        navigation={{ prevEl, nextEl }}
                      >
                        {gallery?.map((img:any, key:any) => {
                          return (
                            <SwiperSlide key={key}>
                              <div className="h-[5rem] w-[6rem]" onClick={()=> setIndex(key)}>
                                <img
                                  src={`/uploads/${img?.filename}`}
                                  alt="gallery_slide"
                                  className="w-full h-full"
                                />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                      <button
                        className="absolute p-1 left-[-12px] bottom-[19px] z-10 rounded-full bg-[#D9D9D9]"
                        ref={(node) => setPrevEl(node)}
                      >
                        <ChevronLeftIcon className="w-6 h-6 text-[#757575] " />
                      </button>
                      <button
                        className="absolute p-1  bottom-[19px] right-[-10px] z-10 rounded-full bg-black"
                        ref={(node) => setNextel(node)}
                      >
                        <ChevronRightIcon className="w-6 h-6 text-white " />
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default GalleryModal;
