import React from "react";

const Gallery_society = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Elevation</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Common Areas</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Outdoor Amenties</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Indoor Amenties</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Infrastructure</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
    </div>
  );
};

export default Gallery_society;
