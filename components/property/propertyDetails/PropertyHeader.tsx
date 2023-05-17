import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { TbClipboardText } from "react-icons/tb";
import EnquiryForm from "../../Modal/Property/EnquiryForm";
import { Brouche } from "../../SVGComponents/property/Brouche";
import GalleryModal from "../../Modal/Property/GalleryModal";
import FeedbackForm from "../../Modal/FeedbackForm";
import validatePrice from "../../../utilities/validatePrice";

type TProps = {
  overviewref: any;
  amentiesref: any;
  aboutref: any;
  reviewref: any;
  faqref: any;
  property: any;
  gallery: any;
  locationref: any;
};

const PropertyHeader = ({
  overviewref,
  amentiesref,
  aboutref,
  reviewref,
  locationref,
  faqref,
  property,
  gallery
}: TProps) => {
  const router = useRouter();
  // const [open, setOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const [tabLink, setTabLink] = useState([
    {
      name: "Overview",
      path: overviewref,
      active: true,
    },
    {
      name: "Amenities",
      path: amentiesref,
      active: false,
    },
    {
      name: "Gallery",
      modal: "Gallery",
      active: false,
    },
    {
      name: "About Project",
      path: aboutref,
      active: false,
    },
    {
      name: "Location",
      path: locationref,
      active: false,
    },
    {
      name: "Reviews",
      path: reviewref,
      active: false,
    },
    {
      name: "FAQs",
      path: faqref,
      active: false,
    },
  ]);

  const clearActive = () => {
    tabLink.forEach((elem, ind) => {
      if (elem.active) {
        // setTabLink([...tabLink, (tabLink[ind].active = false)]);
        setTabLink((prev) =>
          prev.map((item) => (item.active ? { ...item, active: false } : item))
        );
      }
    });
  };

  const fetchPrice = (price: any) => {
    return validatePrice(price);
  };

  const price = property?.bookingPricing.expectedPrice1
    ? fetchPrice(property?.bookingPricing.expectedPrice1)
    : property?.bookingPricing.monthlyRental
    ? fetchPrice(property?.bookingPricing.monthlyRental)
    : "N/A";

  // useEffect(() => {
  //   document.addEventListener("scroll", (e) => {
  //     if (window.pageYOffset < 3700 && window.pageYOffset > 3100) {
  //       clearActive();
  //       setTabLink((prev) =>
  //         prev.map((item, index) =>
  //           index === 5 ? { ...item, active: true } : item
  //         )
  //       );
  //     }
  //     if (window.pageYOffset < 3100 && window.pageYOffset > 2700) {
  //       clearActive();
  //       setTabLink((prev) =>
  //         prev.map((item, index) =>
  //           index === 4 ? { ...item, active: true } : item
  //         )
  //       );
  //     }
  //     if (window.pageYOffset < 2700 && window.pageYOffset > 1600) {
  //       clearActive();
  //       setTabLink((prev) =>
  //         prev.map((item, index) =>
  //           index === 2 ? { ...item, active: true } : item
  //         )
  //       );
  //     }
  //     if (window.pageYOffset < 1600 && window.pageYOffset > 1300) {
  //       console.log("true")
  //       clearActive();
  //       setTabLink((prev) =>
  //         prev.map((item, index) =>
  //           index === 1 ? { ...item, active: true } : item
  //         )
  //       );
  //     }
  //     if (window.pageYOffset < 1300) {
  //       clearActive();
  //       setTabLink((prev) =>
  //         prev.map((item, index) =>
  //           index === 0 ? { ...item, active: true } : item
  //         )
  //       );
  //     }
  //   });
  // }, [router.isReady]);

  return (
    <div className="px-6 sm:px-12 base:px-16">
      {/* <EnquiryForm isOpen={open} setIsOpen={setOpen} propertyId="" /> */}
      <FeedbackForm isOpen={locationOpen} setIsOpen={setLocationOpen} />
      <GalleryModal isOpen={galleryOpen} setIsOpen={setGalleryOpen} gallery={gallery} />

      <div>
        <div>
          <p className="font-bold	xl:text-xl sm:text-lg text-base tracking-wide	 ">
          ₹{price},&#32;&#32;{property?.projectName}
          </p>
          <p className="text-sm sm:text-base text-secondaryColor tracking-wide	">
            {property?.propertyAddress}
          </p>
        </div>
        <div className="mt-8">
          <ul className="flex gap-10 overflow-x-auto lg:text-lg md_link:text-base  text-base ">
            {tabLink.map((link, key) => {
              return link.path ? (
                <li
                  key={key}
                  onClick={() => {
                    clearActive();
                    link.path.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "nearest",
                    });
                    // setTabLink([...tabLink, (tabLink[key].active = true)]);
                    setTabLink((prev) =>
                      prev.map((item, index) =>
                        index === key ? { ...item, active: true } : item
                      )
                    );
                  }}
                  className={`${
                    link.name === "About Project"
                      ? "min-w-[150px] text-center"
                      : "min-w-auto"
                  } font-semibold cursor-pointer ${
                    link.active ? " border-b-4 border-primaryColor " : ""
                  }`}
                >
                  {link.name}
                </li>
              ) : (
                <li
                  key={key}
                  onClick={() => {
                    link.name !== "Location"
                      ? gallery?.length > 0 ? setGalleryOpen(true) : null
                      : null;
                      // : setLocationOpen(true);
                  }}
                  className={`font-semibold cursor-pointer ${
                    link.active ? " border-b-4 border-primaryColor " : ""
                  }`}
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PropertyHeader;
