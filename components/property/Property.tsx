import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { RightArrow } from "../SVGComponents/RightArrow";
import noImg from "../../public/assets/images/noImg1.svg";
import Image from "next/image";
import EnquiryForm from "../Modal/Property/EnquiryForm";
import { useRouter } from "next/router";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ThankYou from "../Modal/ThankYou";
import validatePrice from "../../utilities/validatePrice";

const Property = ({ property }: any) => {
  const router = useRouter();
  // const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [gallery, setGallery]: any = useState([]);

  // const handleBackWard = () => {
  //   if (index != 0) {
  //     setIndex((val) => val - 1);
  //   }
  // };
  // const handleForward = (image_data: any) => {
  //   if (image_data.length - 1 != index) {
  //     setIndex((val) => val + 1);
  //   }
  // };

  const fetchPrice = (price: any) => {
    return validatePrice(price);
  };

  const price = property?.bookingPricing.expectedPrice1
    ? fetchPrice(property?.bookingPricing.expectedPrice1)
    : property?.bookingPricing.monthlyRental
      ? fetchPrice(property?.bookingPricing.monthlyRental)
      : "N/A";

  useEffect(() => {
    if (router.isReady && property?._id) {
      const data = property?.gallery
      setGallery(data);
      // setIndex(data.length - 1);
    }
  }, [router.isReady, property?._id]);

  return (
    <>
      <EnquiryForm
        isOpen={open}
        setIsOpen={setOpen}
        propertyId={property?._id}
      />
      {
        property?.status === "published" && property?.propertyActivateStatus === "activated" &&
        <div className="col-span-4 h-full  shadow-md flex flex-col rounded-lg overflow-hidden">
          <div className="h-48 xxs:h-[15.2rem] w-full relative overflow-hidden">
            <p className="bg-greenBg text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center">
              Trending 
            </p>

            <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
              {gallery.length > 0 ? (
                <img
                  src={`/uploads/${gallery[0].filename}`}
                  alt="Property"
                  className="h-full w-full"
                // className="h-full w-full hover:scale-[1.05] cursor-pointer transition-all"
                />
              ) : (
                <Image src={noImg} alt="No Image" className="h-[7rem] w-[7rem]" />
              )}
            </div>
           
          </div>

          <div className=" mt-1 xxs:mt-4 mb-8">
            <div className="px-2 lg1:px-4 capitalize">
              <p className="text-xl font-semibold  tracking-wide cap">
                {property?.projectName}
              </p>
              <p className="font-normal text-xs ">
                {property?.propertyAddress}
              </p>
              <p className="text-xl font-semibold text-primaryColor mt-1">
                ₹{price}
                {property?.bookingPricing?.maintenanceCharges2 && (
                  <span className="text-sm">
                    + {property.bookingPricing?.maintenanceCharges2 / 1000} K
                    Maintaince Monthly
                  </span>
                )}
              </p>
            </div>

            <div className="px-2 lg1:px-4 mt-2 flex items-start justify-between">
              <div className="flex gap-x-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold">Project Name</p>
                  <p className="text-xs font-semibold">Direction Facing</p>
                  <p className="text-xs font-semibold">Property Type</p>
                  <p className="text-xs font-semibold">Construction Status</p>
                  <p className="text-xs font-semibold">Tenancy Status</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-normal capitalize">{property?.projectName}</p>
                  <p className="text-xs font-normal capitalize">
                    {property?.directionFacing}
                  </p>
                  <p className="text-xs font-normal capitalize">
                    {property?.propertyType}
                  </p>
                  <p className="text-xs font-normal capitalize">
                    {(property?.constructionStatus).toLowerCase() === "rtmi" ? 'RTMI' : property?.constructionStatus}
                  </p>
                  <p className="text-xs font-normal capitalize">
                    {property?.tenancyStatus ? property?.tenancyStatus : "N/A"}
                  </p>
                </div>
              </div>

              <div className="col-span-6 gap-2 flex flex-col ">
                <div className="flex justify-between items-center">
                  <p className=" text-xs font-semibold">Area</p>
                  <p className=" text-xs">
                    {property?.carpetArea
                      ? `${property?.carpetArea} sq.ft`
                      : property?.sba
                        ? `${property?.sba} sq.ft`
                        : "N/A"}
                  </p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className=" text-xs font-semibold">Furnishing</p>
                  <p className=" text-xs ml-4 capitalize">
                    {property?.furnishingType
                      ? property?.furnishingType
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto w-full flex justify-between">
            <button
              onClick={() => setOpen(true)}
              className="bg-black rounded-b-lg rounded-r-lg text-primaryColor text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex justify-center items-center"
            >
              ENQUIRE NOW
            </button>
            <button
              onClick={() => router.push(`/property/${property?._id}`)}
              className="bg-primaryColor rounded-b-lg rounded-l-lg text-black text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex items-center justify-center"
            >
              Details
              <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default Property;
