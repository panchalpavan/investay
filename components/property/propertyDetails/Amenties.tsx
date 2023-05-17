import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { amenities } from "../../../utilities/amenities";

const Amenties = ({ property }: any) => {
  const router = useRouter();
  // console.log(property);
  const [amenties, setAmenties] = useState("");
  useEffect(() => {
    // console.log(amenties);

    if (property) {
      setAmenties(property.amenities);
    }
  }, [router.isReady]);
  return (
    <div id="amenties">
      <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
        Amenities
      </p>
      <div className="mt-10 grid grid-cols-1 xxxs:grid-cols-2 md:grid-cols-3 xl:gap-x-20 gap-x-5 gap-y-4">
        {amenities.map((item: any, index:number) => {
          if (["carParking", "bikeParking"].indexOf(item.value) !== -1) {
            if (item.value === "carParking") {
              if (["car", "both"].indexOf(property?.parking) !== -1) {
                return (
                  <div key={index} className="w-full flex justify-start items-center">
                    {item.icon}
                    <p className="ml-4 xxs:text-lg text-sm font-normal">{item.title}</p>
                  </div>
                );
              }
            } else {
              if (["bike", "both"].indexOf(property?.parking) !== -1) {
                return (
                  <div key={index} className="w-full flex justify-start items-center">
                    {item.icon}
                    <p className="ml-4 xxs:text-lg text-sm font-normal">{item.title}</p>
                  </div>
                );
              }
            }
          } else {
            if (item.value === "indoorGym") {
              if (
                property?.amenities.indoorGym ||
                property?.amenities.outdoorGym
              ) {
                return (
                  <div key={index} className="w-full flex justify-start items-center">
                    {item.icon}
                    <p className="ml-4 xxs:text-lg text-sm font-normal">{item.title}</p>
                  </div>
                );
              }
            } else {
              if (property?.amenities[item.value]) {
                return (
                  <div key={index} className="w-full flex justify-start items-center">
                    {item.icon}
                    <p className="ml-4 xxs:text-lg text-sm font-normal">{item.title}</p>
                  </div>
                );
              }
            }
          }
        })}
      </div>
    </div>
  );
};
export default Amenties;
