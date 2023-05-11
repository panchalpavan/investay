import React from "react";

const Property_Details = ({propertyDetails, setPropertyDetails}:any) => {

  const handleChange = (e:any)=> {
    e.preventDefault();
    const {name, value} = e.target;
    setPropertyDetails({...propertyDetails, [name]: value});
  }

  return (
    <div className="gap-y-5 flex flex-col">
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-2 sm:w-1/2 w-full"
        placeholder="Description"
        name="description"
        value={propertyDetails.description}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-2 sm:w-1/2 w-full"
        placeholder="Amenties"
      />
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Floor Plan</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Master Plan</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Walkthrough Video</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
      <div className="flex justify-between py-1 items-center px-4 text-secondaryLightColor border border-secondaryLightColor rounded-md">
        <p>Vaastu</p>
        <button className=" px-4 py-1 bg-[#FEE097] rounded-full">
          Upload here
        </button>
      </div>
    </div>
  );
};

export default Property_Details;
