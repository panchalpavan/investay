import React from "react";

const Booking_Pricing_Details = ({bookingPricing, handleChange}:any) => {
  return (
    <div className="flex flex-col gap-y-5">
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Expected Price (In Rs/Sq.Ft)"
        name="expectedPrice"
        value={bookingPricing.expectedPrice || null}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Negotiated Price (In Rs/Sq.Ft)"
        name="negotiatedPrice"
        value={bookingPricing.negotiatedPrice || null}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Closed Price (in Rs/Sq,Ft)"
        name="closedPrice"
        value={bookingPricing.closedPrice || null}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Deposit (In Rs.)"
        name="deposit"
        value={bookingPricing.deposit || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Maintenance Charges Rs/Sq.Ft"
        name="maintenanceCharges1"
        value={bookingPricing.maintenanceCharges1 || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Expected Property Value"
        name="expectedPropertyValue"
        value={bookingPricing.expectedPropertyValue || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Negotiated Property Value"
        name="negotiatedPropertyValue"
        value={bookingPricing.negotiatedPropertyValue || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Closed Property Value"
        name="closedPropertyValue"
        value={bookingPricing.closedPropertyValue || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Monthly Rental (In Rs.)"
        name="monthlyRental"
        value={bookingPricing.monthlyRental || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Maintenance Charges Rs/Month"
        name="maintenanceCharges2"
        value={bookingPricing.maintenanceCharges2 || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default Booking_Pricing_Details;
