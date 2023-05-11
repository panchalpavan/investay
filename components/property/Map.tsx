import React, { useMemo, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import EnquiryForm from "../Modal/Property/EnquiryForm";
import Image from "next/image";
import noImg from "../../public/assets/images/noImg1.svg";
import { RightArrow } from "../SVGComponents/RightArrow";
import { useRouter } from "next/router";
import validatePrice from "../../utilities/validatePrice";
import ThankYou from "../Modal/ThankYou";

const containerStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "1rem",
};

export const Map = ({ ...pageProps }) => {
  const router = useRouter();
  const properties = pageProps.properties;
  const [myproperty, setMyProperty]: any = useState(undefined);
  const [open, setOpen] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const { isLoaded } = useJsApiLoader({
    // id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const myLat = parseFloat(properties?.length > 0 && properties[0].lat) || null;
  const myLng = parseFloat(properties?.length > 0 && properties[0].lng) || null;

  const fetchPrice = (price: any) => {
    return validatePrice(price);
  };

  const mycenter = useMemo(
    () => ({
      lat: myLat || 13.226725,
      lng: myLng || 77.684483,
    }),
    []
  );
  const price = myproperty?.bookingPricing.expectedPrice
    ? fetchPrice(myproperty?.bookingPricing.expectedPrice)
    : myproperty?.bookingPricing.monthlyRental
    ? fetchPrice(myproperty?.bookingPricing.monthlyRental)
    : "N/A";
  return isLoaded ? (
    <div className="relative">
      {/* <ThankYou isOpen={onSuccess} setIsOpen={setOnSuccess} /> */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mycenter}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ streetViewControl: false }}
        onClick={() => {
          if (myproperty) {
            setMyProperty(undefined);
          }
        }}
      >
        {properties?.map((property: any) => {
          const lat = parseFloat(property?.lat) || null;
          const lng = parseFloat(property?.lng) || null;
          if (lat && lng) {
            return (
              <Marker
                key={property?._id}
                position={{ lat, lng }}
                icon={{
                  scaledSize: new google.maps.Size(40, 40),
                  url: "/assets/images/marker.svg",
                }}
                onClick={() => {
                  setMyProperty(property);
                }}
              />
            );
          }
          return null;
        })}
      </GoogleMap>
      {myproperty && (
        <div className="absolute top-0 right-0 h-auto bg-white">
          <EnquiryForm
            isOpen={open}
            setIsOpen={setOpen}
            // propertyId={myproperty?._id}
            onSuccess={onSuccess}
            setOnSuccess={setOnSuccess}
          />
          <div className="xs:w-[450px] w-[300px] h-full  shadow-md flex flex-col rounded-lg">
            <div className="h-auto  w-full relative ">
              <p className="bg-greenBg text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center">
                Trending
              </p>
              <div className="w-full h-[175px] flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
                <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
                  <Image
                    src={noImg}
                    alt="No Image"
                    className="h-[7rem] w-[7rem]"
                  />
                </div>
              </div>
            </div>

            <div className=" mt-[0.2rem] xxs:mt-2 mb-3">
              <div className="px-2 lg1:px-4">
                <p className="text-lg font-semibold  tracking-wide">
                  {myproperty?.projectName}
                </p>
                <p className="font-normal text-xs ">
                  {myproperty?.addressLine1 +
                    (myproperty?.addressLine2 !== "N/A"
                      ? `, ${myproperty?.addressLine2}`
                      : "")}
                </p>
                <p className="text-xl font-semibold text-primaryColor mt-1">
                  ₹{price}
                  {myproperty?.bookingPricing.maintenanceCharges2 && (
                    <span className="text-sm">
                      + {myproperty.bookingPricing.maintenanceCharges2 / 1000} K
                      Maintaince Monthly
                    </span>
                  )}
                </p>
              </div>

              <div className="px-2 lg1:px-4 capitalize mt-2 flex xs:flex-row flex-col items-start justify-between">
                <div className="flex gap-x-4 w-full xs:justify-start justify-between">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold">Project Name</p>
                    <p className="text-xs font-semibold">Direction Facing</p>
                    <p className="text-xs font-semibold">Property Type</p>
                    <p className="text-xs font-semibold">Construction Status</p>
                    <p className="text-xs font-semibold">Tenancy Status</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-normal">Modern</p>
                    <p className="text-xs font-normal">
                      {myproperty?.directionFacing}
                    </p>
                    <p className="text-xs font-normal">
                      {myproperty?.propertyType}
                    </p>
                    <p className="text-xs font-normal">
                      {myproperty?.constructionStatus}
                    </p>
                    <p className="text-xs font-normal">
                      {myproperty?.tenancyStatus
                        ? myproperty?.tenancyStatus
                        : "N/A"}
                    </p>
                  </div>
                </div>

                <div className="col-span-6 gap-2 flex justify-between w-full xs:mt-0 mt-2">
                  <div className="space-y-2 ">
                    <p className="text-xs font-semibold">Area</p>
                    <p className="text-xs font-semibold">Furnishing</p>
                  </div>
                  <div className="space-y-2 xs:w-auto w-[123px] ">
                    <p className=" text-xs">
                      {myproperty?.carpetArea
                        ? `${myproperty?.carpetArea} sq.ft`
                        : "N/A"}
                    </p>
                    <p className=" text-xs ">
                      {myproperty?.furnishingType
                        ? myproperty?.furnishingType
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto w-full flex justify-between">
              <button
                onClick={() => setOpen(true)}
                className="bg-black rounded-b-lg rounded-r-lg text-primaryColor text-sm py-2 px-3 xxs:px-5 flex justify-center items-center"
              >
                ENQUIRE NOW
              </button>
              <button
                onClick={() => router.push(`/property/${myproperty?._id}`)}
                className="bg-primaryColor rounded-b-lg rounded-l-lg text-black text-sm py-2 px-3 xxs:px-5 flex items-center justify-center"
              >
                Details
                <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};
