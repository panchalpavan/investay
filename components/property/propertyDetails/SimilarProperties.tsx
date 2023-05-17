import React, { useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { RightArrow } from "../../SVGComponents/RightArrow";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { getProperties } from "../../../action-creators/properties";
import Property from "../Property";
export const SimilarProperties = ({property}:any) => {
  const router = useRouter();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);

  const [nextEl, setNextel] = useState<HTMLElement | null>(null);
  const [similar, setSimilar] = useState([]);

  useEffect(()=> {

    if(router.isReady) {
  
      getProperties({id: router.query.id}).then((response:any)=> {
        if(response.success) {
          // console.log("smimilar properties----------------------------------",response.properties);
          setSimilar(response.properties);
         
          
        }
      }).catch((error:any)=> {
        // console.log("similar properties error: ", error.response.data.error);
      })


      
    }
  }, [router.isReady]);

  return (
    <>

    {
      similar?.length !== 0 && 
      <>
           <div className="bg-star_bg bg-contain bg-no-repeat w-[50%] h-[100%]  absolute right-0"></div>
      <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
        Similar Properties
      </p>

      <div className="mt-10 relative">
        <Swiper
          breakpoints={{
            1350: {
              slidesPerView: 3,
            },

            900: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation]}
          spaceBetween={10}
          navigation={{ prevEl, nextEl }}
             className=" grid grid-cols-12"
        >

          {
            similar.map((property,key)=>{
                  return (

                    <SwiperSlide className="col-sapn-4 h-full" key={key}>  <Property  property={property} /></SwiperSlide>
          //           <SwiperSlide key={key}>
          //   <div className="shadow-lg flex flex-col rounded-lg overflow-hidden h-fit z-50 mb-5">
          //     <div className="h-48 xxs:h-[15.2rem] relative ">
          //       <p className="bg-greenBg text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center">
          //         Trending
          //       </p>
          //       <img
          //         src={image_data[index]}
          //         alt="card image"
          //         className="h-full w-full"
          //       />
          //       <div className="absolute bottom-0 right-0 flex m-2">
          //         <span>
          //           <ChevronLeftIcon
          //             className={`w-5 h-5  cursor-pointer ${
          //               index === 0 ? "text-gray-400" : "text-white"
          //             }`}
          //             onClick={handleBackWard}
          //           />
          //         </span>
          //         <span>
          //           <ChevronRightIcon
          //             className={`w-5 h-5  cursor-pointer ${
          //               index === image_data.length - 1
          //                 ? "text-gray-400"
          //                 : "text-white"
          //             }`}
          //             onClick={handleForward}
          //           />
          //         </span>
          //       </div>
          //     </div>
          //     <div className=" mt-1 xxs:mt-4">
          
          //       <div className="px-3 xxs:px-6">
          //       <p className="text-xl font-semibold  tracking-wide cap">
          //     {property?.projectName}
          //   </p>
          //   <p className="font-normal text-xs ">
          //     {property?.addressLine1 +
          //       (property?.addressLine2 !== "N/A"
          //         ? `, ${property?.addressLine2}`
          //         : "")}
          //   </p>
          //   <p className="text-xl font-semibold text-primaryColor mt-1">
          //     ₹{price}
          //     {property?.bookingPricing.maintenanceCharges2 && (
          //       <span className="text-sm">
          //         + {property.bookingPricing.maintenanceCharges2 / 1000} K
          //         Maintaince Monthly
          //       </span>
          //     )}
          //   </p>
          //       </div>

          //       <div className="px-3 xxs:px-6 mt-2 grid grid-cols-12 capitalize">
          //         <div className="col-span-6 flex justify-between">
          //           <div className="space-y-1">
          //             <p className="text-xs font-semibold">Project Name</p>
          //             <p className="text-xs font-semibold ">Direction Facing</p>
          //             <p className="text-xs font-semibold ">Property Type</p>
          //             <p className="text-xs font-semibold ">
          //               Constuction Status
          //             </p>
          //             <p className="text-xs font-semibold ">Tenancy Status</p>
          //           </div>
          //           <div className="space-y-1">
          //             <p className="text-xs font-normal">Modern</p>
          //             <p className="text-xs font-normal">{property?.directionFacing}</p>
          //             <p className="text-xs font-normal">{property?.propertyType}</p>
          //             <p className="text-xs font-normal">  {property?.constructionStatus}</p>
          //             <p className="text-xs font-normal"> {property?.tenancyStatus ? property?.tenancyStatus : "N/A"}</p>
          //           </div>
          //         </div>
          //         <div className="flex col-span-6 justify-between ml-5">
          //           <div className="space-y-1">
          //             <p className="text-xs font-semibold">Area</p>
          //             <p className="text-xs font-semibold ">Furnishing</p>
          //           </div>
          //           <div className="space-y-1">
          //             <p className="text-xs font-normal">{property?.carpetArea
          //           ? `${property?.carpetArea} sq.ft`
          //           : "N/A"}</p>
          //             <p className="text-xs font-normal"> {property?.furnishingStatus
          //           ? property?.furnishingStatus
          //           : "N/A"}</p>
          //           </div>
          //         </div>
          //       </div>
          //       <div className="mt-8 w-full flex justify-between">
          //         <button className="bg-black rounded-b-lg rounded-r-lg text-primaryColor text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex justify-center items-center">
          //           ENQUIRE NOW
          //         </button>
          //         <button className="bg-primaryColor rounded-b-lg rounded-l-lg  text-black text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex items-center justify-center">
          //           Details
          //           <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
          //         </button>
          //       </div>
          //     </div>
          //   </div>
          // </SwiperSlide>
                  )
            })
          }

        </Swiper>
        <button
          className="absolute p-3 left-[-25px] top-[43%] first-letter: z-10 rounded-full bg-[#D9D9D9]"
          ref={(node) => setPrevEl(node)}
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#757575] " />
        </button>
        <button
          className="absolute p-3  top-[43%] right-[-22px] z-10 rounded-full bg-black"
          ref={(node) => setNextel(node)}
        >
          <ChevronRightIcon className="w-6 h-6 text-white " />
        </button>

        <div className="bg-star_bg bg-contain bg-no-repeat w-full md:w-[50%] h-[30.5%]  absolute left-0 bottom-[-30%] "></div>
      </div>
      </>
    }


 
    </>
  );
};
