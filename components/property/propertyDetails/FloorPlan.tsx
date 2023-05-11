import React, { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Broucher from "../../Modal/Property/Broucher";

const FloorPlan = ({ property, gallery, setOnSuccess }: any) => {
  // console.log(property);
  const [open, setOpen] = useState(false);
  const floorPlan = gallery.filter(
    (item: any) => item.category === "floorPlan"
  );

  return (
    <>
      <Broucher
        isOpen={open}
        setIsOpen={setOpen}
        action="Floor Plan"
        property={property}
        gallery={gallery}
        setOnSuccess={setOnSuccess}
      />
      <div id="floorplan" className="flex gap-2  items-center">
        <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
          Download Floor Plan
        </p>
        <span>
          <ArrowDownTrayIcon
            onClick={() => floorPlan.length >0 ? setOpen(true) : null}
            className={`${floorPlan.length === 0 ? "text-gray-500" : "text-primaryColor"} w-8 h-8 mt-2 cursor-pointer`}
          />
        </span>
      </div>

      <div className="mt-10  flex sm:gap-80 gap-20">
        <div className="space-y-4 ">
          <p className="text-lg font-semibold">Total Area</p>
          <p className=" font-semibold text-lg">Floor</p>
          <p className=" font-semibold text-lg">Rooms</p>
          <p className=" font-semibold text-lg">Bathrooms</p>
          <p className=" font-semibold text-lg">Balcony</p>
        </div>
        <div className="col-span-2 space-y-4">
          <p className="text-lg">{property?.totalArea} sq.ft </p>
          <p className="text-lg">{property?.floor} </p>
          <p className="text-lg">{property?.rooms || "N/A"}</p>
          <p className="text-lg">{property?.bathrooms}</p>
          <p className="text-lg">{property?.balcony || "N/A"}</p>
        </div>
        <div className="bg-star_bg bg-contain bg-no-repeat w-[50%] h-[100px] absolute right-0 "></div>
      </div>
    </>
  );
};

export default FloorPlan;
