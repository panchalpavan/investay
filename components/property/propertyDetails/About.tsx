import React, { useEffect, useState } from "react";
import { ArrowDownTrayIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/legacy/image";
import { IoStarSharp } from "react-icons/io5";
import { Star } from "../../SVGComponents/property/Star";
import TestiMonial from "./TestiMonial";
import ReviewForm from "../../Modal/Property/ReviewForm";
import Broucher from "../../Modal/Property/Broucher";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Location from "./Location";

export const About = ({
  property,
  gallery,
  setOnSuccess,
  aboutref,
  locationref,
  reviewref,
}: any) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [overall, setOverall] = useState(0);
  const [constructionQuality, setConstructionQuality] = useState(0);
  const [connectivity, setConnectivity] = useState(0);
  const [amenitiesAndFacilities, setAmenitiesAndFacilities] = useState(0);
  const [greenSpaces, setGreenSpaces] = useState(0);
  const [rwa, setRwa] = useState(0);
  const brochure = gallery.filter((item: any) => item.category === "brochure");
  const reduxData = useSelector((state: any) => {
    return state.getReviewsData;
  });

  const thumbnail = gallery.filter(
    (item: any) => item.category === "thumbnail"
  );

  useEffect(() => {
    if (router.isReady) {
      let avg1 = 0;
      let avg2 = 0;
      let avg3 = 0;
      let avg4 = 0;
      let avg5 = 0;
      let avg6 = 0;
      for (let i = 0; i < reduxData.reviews?.length; i++) {
        avg1 += reduxData.reviews[i].overall;
        avg2 += reduxData.reviews[i].constructionQuality;
        avg3 += reduxData.reviews[i].connectivity;
        avg4 += reduxData.reviews[i].amenitiesAndFacilities;
        avg5 += reduxData.reviews[i].greenSpaces;
        avg6 += reduxData.reviews[i].rwa;
      }

      avg1 = avg1 / reduxData.reviews?.length;
      setOverall(avg1);
      avg2 = avg2 / reduxData.reviews?.length;
      setConstructionQuality(avg2);
      avg3 = avg3 / reduxData.reviews?.length;
      setConnectivity(avg3);
      avg4 = avg4 / reduxData.reviews?.length;
      setAmenitiesAndFacilities(avg4);
      avg5 = avg5 / reduxData.reviews?.length;
      setGreenSpaces(avg5);
      avg6 = avg6 / reduxData.reviews?.length;
      setRwa(avg6);
    }
  }, [router.isReady, reduxData]);

  return (
    <>
      <ReviewForm isOpen={open} setIsOpen={setOpen} property={property} />
      <Broucher
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        gallery={gallery}
        property={property}
        action="brochure"
        setOnSuccess={setOnSuccess}
      />

      <div ref={aboutref} id="about" className="flex gap-2  items-center">
        <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
          About Project
        </p>
        <span>
          <ArrowDownTrayIcon
            onClick={() => (brochure.length > 0 ? setIsOpen(true) : null)}
            className={`${
              brochure.length === 0 ? "text-gray-500" : "text-primaryColor"
            } w-8 h-8 mt-2 cursor-pointer`}
          />
        </span>
      </div>

      <div className="mt-10 flex base:gap-20 gap-5 base:flex-row flex-col">
        <div className="h-[20rem] base:w-[25%] w-full ">
          {thumbnail.length > 0 ? (
            <img
              src={`/uploads/${thumbnail[0].filename}`}
              alt="About Image"
              className="h-full w-full"
            />
          ) : (
            <img
              src={`/assets/images/AboutImage.png`}
              alt="About Image"
              className="h-full w-full"
            />
          )}
          {/* <Image 
            alt="about Image"
            src="/assets/images/AboutImage.png"
            width={800}
            height={300}
            layout="fixed"
          /> */}
        </div>
        <div className="base:w-[75%]">
          <p className="base:text-xl text-base text-justify">
            {!property?.description
              ? `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquid veritatis quod molestias obcaecati consequatur?
            Recusandae cupiditate modi expedita, a numquam sunt voluptate harum
            eius assumenda libero accusamus corrupti vel inventore nulla
            consectetur est tempora repudiandae quos facilis cum sed earum
            maiores perferendis! Nam explicabo, repellendus tenetur laborum
            veritatis blanditiis magni natus fugiat! Est ipsum eaque possimus
            hic voluptates blanditiis similique reiciendis sunt quo. Totam porro
            debitis consequuntur. Praesentium ratione placeat a consequuntur
            animi. Deleniti nam blanditiis minus culpa aliquam doloribus omnis
            in laborum fugiat pariatur, labore, aut sunt. Numquam rem, ex alias
            cupiditate consequuntur culpa reiciendis sit recusandae minus!`
              : property?.description}
          </p>
        </div>
      </div>

      <div ref={locationref} className="mt-20  ">
        <Location property={property} />
      </div>

      <div className=" mt-20" ref={reviewref}>
        <p className="text-2xl  font-bold border-b-4 border-primaryColor inline">
          About {property?.projectName}
        </p>
      </div>

      <div className="mt-10 mb-4 xxs:my-10 flex flex-col-reverse xxs:flex-row justify-between xxs:items-center">
        <div className="flex sm:gap-10 gap-2 items-center justify-between xxs:justify-start mt-6 xxs:mt-0">
          <p className=" sm:text-lg text-sm">Overall</p>
          <div className="flex gap-2">
            <Star width="1.5rem" height="1.5rem" index={1} ratings={overall} />
            <Star width="1.5rem" height="1.5rem" index={2} ratings={overall} />
            <Star width="1.5rem" height="1.5rem" index={3} ratings={overall} />
            <Star width="1.5rem" height="1.5rem" index={4} ratings={overall} />
            <Star width="1.5rem" height="1.5rem" index={5} ratings={overall} />
          </div>
        </div>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="bg-black rounded-lg text-primaryColor text-sm sm:text-base sm:py-2 sm:px-4 xs:px-3 xs:py-2 p-2"
          >
            Write A Review
          </button>
        </div>
      </div>
      <div className="bg-star_bg bg-contain bg-no-repeat w-[40%] h-[100px] absolute right-0  "></div>
      <div className="flex flex-col base:w-[50%] w-full  space-y-4 lg:text-xl sm:text-base text-sm ">
        <div className="flex items-center justify-between ">
          <p>Construction Quality</p>
          <div className="flex gap-2">
            <Star
              width="1.5rem"
              height="1.5rem"
              index={1}
              ratings={constructionQuality}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={2}
              ratings={constructionQuality}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={3}
              ratings={constructionQuality}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={4}
              ratings={constructionQuality}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={5}
              ratings={constructionQuality}
            />
          </div>
        </div>
        <div className="flex  items-center justify-between ">
          <p>Connectivity & Commute</p>
          <div className="flex gap-2">
            <Star
              width="1.5rem"
              height="1.5rem"
              index={1}
              ratings={connectivity}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={2}
              ratings={connectivity}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={3}
              ratings={connectivity}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={4}
              ratings={connectivity}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={5}
              ratings={connectivity}
            />
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <p>Amenities & Facilities</p>
          <div className="flex gap-2">
            <Star
              width="1.5rem"
              height="1.5rem"
              index={1}
              ratings={amenitiesAndFacilities}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={2}
              ratings={amenitiesAndFacilities}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={3}
              ratings={amenitiesAndFacilities}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={4}
              ratings={amenitiesAndFacilities}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={5}
              ratings={amenitiesAndFacilities}
            />
          </div>
        </div>
        <div className="flex  items-center justify-between ">
          <p>Green Spaces & Parks</p>
          <div className="flex gap-2">
            <Star
              width="1.5rem"
              height="1.5rem"
              index={1}
              ratings={greenSpaces}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={2}
              ratings={greenSpaces}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={3}
              ratings={greenSpaces}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={4}
              ratings={greenSpaces}
            />
            <Star
              width="1.5rem"
              height="1.5rem"
              index={5}
              ratings={greenSpaces}
            />
          </div>
        </div>
        <div className="flex  items-center justify-between ">
          <p>RWA & Society Management</p>
          <div className="flex gap-2">
            <Star width="1.5rem" height="1.5rem" index={1} ratings={rwa} />
            <Star width="1.5rem" height="1.5rem" index={2} ratings={rwa} />
            <Star width="1.5rem" height="1.5rem" index={3} ratings={rwa} />
            <Star width="1.5rem" height="1.5rem" index={4} ratings={rwa} />
            <Star width="1.5rem" height="1.5rem" index={5} ratings={rwa} />
          </div>
        </div>
      </div>

      <TestiMonial />
    </>
  );
};
