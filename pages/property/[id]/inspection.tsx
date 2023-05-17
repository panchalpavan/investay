import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderTitle from "../../../components/Layout/HeaderTitle";
import InspectionOverview from "../../../components/property/Inspections/InspectionOverview";
import InspectionBuilding from "../../../components/property/Inspections/InspectionBuilding";
import InspectionAmenities from "../../../components/property/Inspections/InspectionAmenities";
import InspectionRemark from "../../../components/property/Inspections/InspectionRemark";
import { setProperty } from "../../../redux/property/propertyReducer";
import { getProperty } from "../../../action-creators/properties/getProperty";
import { InspectionImageSlider } from "../../../components/property/InspectionImageSlider";

const Inspection = ({ ...pageProps }) => {
  const router = useRouter();
  const propertyId = router.query.id;
  const shadow = pageProps.shadow;
  const [currentTab, setCurrentTab] = useState(0);
  const [gallery, setGallery] = useState([]);
  const dispatch = useDispatch()
  const [property, setPropertyy] = useState([]) as any

  const fetchProperty = async (id: any) => {
    try {
      const response = await getProperty({ id });
      if (response.success) {
        if (response.property) {
          setPropertyy(response.property)
          const myGalleryData = response.property.gallery.filter(
            (item: any) => item.subCategory !== "walkthroughVideo"
          );
          // console.log("myGalleryData-----",myGalleryData);
          
          setGallery(myGalleryData);
        }
        dispatch(setProperty(response.property));

      }
    } catch (error: any) {
      console.log(error);

    }
  };
  useEffect(() => {
    if (router.isReady) {
      fetchProperty(propertyId);
    }
  }, [router.isReady])
  const propertyReduxData =
    useSelector((state: any) => state.getPropertiesData).property || null;


  const renderTabs = (tabIndex: number) => {
    if (property !== null && property?.length !== 0) {
      switch (tabIndex) {
        case 0: {
          return (<InspectionOverview property={property} />)
        }
        case 1: {
          return <InspectionAmenities property={property?.amenities} />;
        }
        case 2: {
          return <InspectionBuilding  />;
        }
        case 3: {
          return <InspectionRemark />;
        }
      }
    }
  };


  return (
    <>
      <HeaderTitle pageName={"Property Inspection"} />
      <div
        className={`fixed top-75px left-0 w-full pt-4 z-[50] bg-white ${shadow ? "shadow-nav top-bg-color" : ""
          }`}
      >
        <button
          onClick={() => router.back()}
          className="sm:absolute sm:top-[15px] sm:left-[10px] my-2 ml-4 sm:m-0 cursor-pointer "
        >
          <ArrowLeftIcon className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
        </button>
      </div>
      <div className="w-full mt-[20px] px-6 sm:px-12 base:px-16">
        <p className="font-bold	xl:text-2xl my-4 sm:text-lg text-base tracking-wide uppercase ml-4">
          Property Inspection Report
        </p>
       <InspectionImageSlider gallery={gallery}/>
     
        <div className="mt-10  bg-[#ECECEC] flex items-center">
          <button
            onClick={() => {
              setCurrentTab(0);
            }}
            className={`px-5 py-3 font-bold text-lg ${currentTab == 0 && "bg-white rounded-r-lg shadow-inspect_shadow"
              }`}
          >
            Overview
          </button>
          <button
            onClick={() => {
              setCurrentTab(1);
            }}
            className={`px-5 py-3 font-bold text-lg ${currentTab == 1 && "bg-white rounded-r-lg shadow-inspect_shadow"
              }`}
          >
            Amenities
          </button>
          <button
            onClick={() => {
              setCurrentTab(2);
            }}
            className={`px-5 py-3 font-bold text-lg ${currentTab == 2 && "bg-white rounded-r-lg shadow-inspect_shadow"
              }`}
          >
            Building Inspection
          </button>
          <button
            onClick={() => {
              setCurrentTab(3);
            }}
            className={`px-5 py-3 font-bold text-lg ${currentTab == 3 && "bg-white rounded-r-lg shadow-inspect_shadow"
              }`}
          >
            Remarks
          </button>
        </div>
        <div className="w-full mt-10">{renderTabs(currentTab)}</div>
      </div>
    </>
  );
};

export default Inspection;
Inspection.public1 = (page: React.ReactElement) => {
  return { page };
};
