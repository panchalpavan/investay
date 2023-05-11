import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
const Booking_Pricing_Details_two = ({bookingPricing, handleChange}:any) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12">
        <input
          type="text"
          className="outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
          placeholder="Lease Amount."
          name="leaseAmount"
          value={bookingPricing.leaseAmount || ""}
          onChange={handleChange}
        />
      </div>

      <p className=" text-lg font-bold col-span-12 ">Price Negotiation</p>

      <div className="col-span-6">
        <div className="border border-black h-8 w-1/2 flex  items-center  rounded-sm">
          <div className="border-r border-black h-full w-10"></div>
          <p className="text-base text-center  text-[#00000080]  ml-2">
            Negotiable
          </p>
        </div>
      </div>
      <div className="col-span-6 flex justify-end">
        <div className="border border-black h-8 w-1/2 flex  items-center ">
          <div className="border-r border-black h-full w-10"></div>
          <p className="text-base text-center  text-[#00000080]  ml-2">
            Non-Negotiable
          </p>
        </div>
      </div>
      <div className="col-span-12">
        <input
          type="text"
          className="outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
          placeholder="Lease Duration."
        />
      </div>
      <div className="col-span-12 border border-secondaryLightColor h-8 flex items-center justify-between px-4 py-1  text-sm  rounded-md">
        <p className="text-[#00000080] ">Date of Booking</p>
        <CalendarDaysIcon className="w-5 h-5 text-[#00000080] " />
      </div>
      <div className="col-span-12">
        <input
          type="text"
          className="outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
          placeholder="Lender Name"
        />
      </div>
      <div className="col-span-12 flex flex-col  ">
        <p className="text-lg font-bold"> Sales Agreement Status</p>
        <div className="flex w-full justify-between mt-5 ">
          <div className="border border-black h-8 w-fit  flex  items-center pr-2">
            <div className="border-r border-black h-full w-10"></div>
            <p className="text-base text-center  text-[#00000080]  ml-2">
              Pending
            </p>
          </div>
          <div className="border border-black h-8 w-fit  flex  items-center pr-2">
            <div className="border-r border-black h-full w-10"></div>
            <p className="text-base text-center  text-[#00000080]  ml-2">
              Complete
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 flex items-center">
        <p className="text-lg font-bold"> Mortgaged</p>
        <div className="flex w-full justify-end gap-5">
          <div className="border border-black h-8 w-fit  flex  items-center pr-2">
            <div className="border-r border-black h-full w-10"></div>
            <p className="text-base text-center  text-[#00000080]  ml-2">
              Pending
            </p>
          </div>
          <div className="border border-black h-8 w-fit  flex  items-center pr-2">
            <div className="border-r border-black h-full w-10"></div>
            <p className="text-base text-center  text-[#00000080]  ml-2">
              Complete
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <input
          type="text"
          className="outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
          placeholder="Outstanding Loan (In Rs.)"
        />
      </div>
      <div className="col-span-12">
        <input
          type="text"
          className="outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
          placeholder="Total Loan amount in Rs."
        />
      </div>
      <div className="col-span-12">
        <input
          type="text"
          className="outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
          placeholder="Interest Rate %"
        />
      </div>
    </div>
  );
};

export default Booking_Pricing_Details_two;
