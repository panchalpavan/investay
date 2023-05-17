import React from "react";

const Upload_Document = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <button className="border border-secondaryLightColor bg-[#FEE097] py-1 px-3 sm:w-1/2 w-full rounded-md text-secondaryColor text-sm text-start">
        Online Registration Form
      </button>
      <button className="border border-secondaryLightColor bg-[#FEE097] py-1 px-3 sm:w-1/2 w-full  rounded-md text-secondaryColor text-sm text-start">
        Reservation Form-Resale
      </button>
      <button className="border border-secondaryLightColor  py-1 px-3 sm:w-1/2 w-full  rounded-md text-secondaryColor text-sm text-start">
        Reservation Form-Rental
      </button>
      <button className="border border-secondaryLightColor  py-1 px-3 sm:w-1/2 w-full  rounded-md text-secondaryColor text-sm text-start">
        Property Inspection Report
      </button>
      <button className="border border-secondaryLightColor  py-1 px-3 sm:w-1/2 w-full  rounded-md text-secondaryColor text-sm text-start">
        Rental Agreement
      </button>
      <button className="border border-secondaryLightColor  py-1 px-3 w-fit rounded-md text-secondaryColor text-sm text-start">
        MOU
      </button>
    </div>
  );
};

export default Upload_Document;
