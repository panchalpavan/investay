import React from "react";

const Payment_Details = ({paymentDetails, handleChange}:any) => {
  return (
    <div className="grid grid-cols-12  gap-5">
      <input
        type="text"
        className="lg:col-span-6 col-span-12  outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Name"
        name="name"
        value={paymentDetails.name}
        onChange={handleChange}
      />
      <input
        type="text"
        className="lg:col-span-6 col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Mobile No."
        name="mobile"
        value={paymentDetails.mobile}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" lg:col-span-6 col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Bank Name"
        name="bankName"
        value={paymentDetails.bankName}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" lg:col-span-6 col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Account No."
        name="accountNumber"
        value={paymentDetails.accountNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        className="lg:col-span-6 col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="branch"
        name="branch"
        value={paymentDetails.branch}
        onChange={handleChange}
      />
      <input
        type="text"
        className="lg:col-span-6 col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="IFSC Code"
        name="ifscCode"
        value={paymentDetails.ifscCode}
        onChange={handleChange}
      />
      <input
        type="text"
        className="lg:col-span-6 col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="UPI"
        name="upi"
        value={paymentDetails.upi}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" lg:col-span-6 col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Aadhar Card No."
        name="aadhar"
        value={paymentDetails.aadhar}
        onChange={handleChange}
      />
      <input
        type="text"
        className="col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full"
        placeholder="Pan Card No."
        name="pan"
        value={paymentDetails.pan}
        onChange={handleChange}
      />
    </div>
  );
};

export default Payment_Details;
