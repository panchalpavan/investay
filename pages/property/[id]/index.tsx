import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import PropertyHeader from "../../../components/property/propertyDetails/PropertyHeader";
import OverView from "../../../components/property/propertyDetails/OverView";
import Gallery from "../../../components/property/propertyDetails/Gallery";
import Amenties from "../../../components/property/propertyDetails/Amenties";
import FloorPlan from "../../../components/property/propertyDetails/FloorPlan";
import { About } from "../../../components/property/propertyDetails/About";
import { Faq } from "../../../components/property/Faq";
import { SimilarProperties } from "../../../components/property/propertyDetails/SimilarProperties";
import { ScrollToTop } from "../../../components/Utilities/ScrollToTop";
import { getProperty } from "../../../action-creators/properties/getProperty";
import HeaderTitle from "../../../components/Layout/HeaderTitle";
import { Brouche } from "../../../components/SVGComponents/property/Brouche";
import EnquiryForm from "../../../components/Modal/Property/EnquiryForm";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useDispatch } from "react-redux";
import { getReviews } from "../../../action-creators/review/getReviews";
import { setReviews } from "../../../redux/reviews/reviewReducer";
import ThankYou from "../../../components/Modal/ThankYou";
import Location from "../../../components/property/propertyDetails/Location";
import { Inspection } from "../../../components/SVGComponents/property/Inspection";
import { setProperty } from "../../../redux/property/propertyReducer";
const Index = ({ ...pageProps }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const overviewref = useRef(null);
  const amentiesref = useRef(null);
  const aboutref = useRef(null);
  const reviewref = useRef(null);
  const locationref = useRef(null);
  const faqref = useRef(null);
  const [isRental, setIsRental] = useState(true);
  const [property, setPropertyData] = useState(undefined) as any;
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [mygallery, setMyGallery] = useState([]);
  const [onSuccess, setOnSuccess] = useState(false);
  const pid = router.query.id;
  const shadow = pageProps.shadow;

  const fetchProperty = async (id: any) => {
    try {
      setIsLoading(true);
      const response = await getProperty({ id });
      if (response.success) {
        // console.log(response.property);
        setPropertyData(response.property);
        dispatch(setProperty(response.property));
        const mydata = response.property.gallery.filter(
          (item: any) => item.subCategory !== "walkthroughVideo"
        );
        setMyGallery(mydata);
        setGallery(response.property.gallery);
        setIsLoading(false);
      }
    } catch (error: any) {
      router.replace("/property");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      // console.log(pid);
      fetchProperty(pid);

      getReviews({ id: router.query.id })
        .then((response: any) => {
          if (response.success) {
            dispatch(setReviews(response.reviews));
          }
        })
        .catch((error: any) => {
          console.log("get Reviews error: ", error);
        });
    }
  }, [router.isReady]);

  return (
    <>
      <HeaderTitle pageName={"Property"} />
      <EnquiryForm
        isOpen={open}
        setIsOpen={setOpen}
        propertyId={property?._id}
      />
      {isLoading && <LoadingSpinner />}

      <ScrollToTop scrollToTop={pageProps.scrollToTop} />
      <div
        className={`fixed top-75px left-0 w-full pt-4 z-[50] bg-white ${
          shadow ? "shadow-nav top-bg-color" : ""
        }`}
      >
        <button
          onClick={() => Router.back()}
          className="sm:absolute sm:top-[15px] sm:left-[10px] my-2 ml-4 sm:m-0 cursor-pointer "
        >
          <ArrowLeftIcon className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
        </button>

        <PropertyHeader
          overviewref={overviewref}
          amentiesref={amentiesref}
          aboutref={aboutref}
          reviewref={reviewref}
          faqref={faqref}
          property={property}
          gallery={mygallery}
          locationref={locationref}
        />
      </div>

      <button
        onClick={() => setOpen(true)}
        className="bg-primaryColor p-2 absolute right-0 top-[100%] z-10"
      >
        {/* <TbClipboardText className="h-10 w-10" /> */}
        <Brouche
          styles={
            "w-[2rem] h-[2rem] xs:w-[2.3rem] xs:h-[2.3rem] md:w-[2.5rem] md:h-[2.5rem] "
          }
        />
      </button>
      <button
        onClick={() => router.push(`/property/${pid}/inspection`)}
        className="bg-primaryColor p-2 absolute right-0 top-[90%] z-10"
      >
        {/* <TbClipboardText className="h-10 w-10" /> */}
        <Inspection style="w-[2rem] h-[2rem] xs:w-[2.3rem] xs:h-[2.3rem] md:w-[2.5rem] md:h-[2.5rem] " />
      </button>

      <div className="w-full mt-[185px] xs:mt-[170px] sm:mt-[140px] lg:mt-[150px] lg1:mt-[150px] 2xl:mt-[170px] px-6 sm:px-12 base:px-16">
        <div className="mt-10 ">
          <Gallery gallery={mygallery} />
        </div>
        <div ref={overviewref} className="mt-20 ">
          <OverView property={property} />
        </div>
        <div ref={amentiesref} className="mt-20  ">
          <Amenties property={property} />
        </div>
        <div className="mt-20  ">
          {property && (
            <About
              property={property}
              gallery={mygallery}
              setOnSuccess={setOnSuccess}
              aboutref={aboutref}
              locationref={locationref}
              reviewref={reviewref}
            />
          )}
        </div>
        <div ref={faqref} className="mt-20  ">
          <Faq isRental={isRental} setIsRental={setIsRental} />
        </div>
        <div className="my-20 ">
          <SimilarProperties property={property} />
        </div>
      </div>
    </>
  );
};
export default Index;
Index.public1 = (page: React.ReactElement) => {
  return { page };
};
