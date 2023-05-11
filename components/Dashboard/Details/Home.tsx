import React from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


const Home = ({details, setDetails}:any) => {
  const [active, setActive] = useState("");
  const Available = ["Mr", "Ms"];

  const handleChange = (e:any)=> {
    e.preventDefault();
    const {name, value} = e.target;
    setDetails({...details, [name]: value});
  }

  return (
    <div className="gap-5 grid grid-cols-12">
      <Listbox value={active} onChange={(val) => setActive(val)}>
        <div className="relative flex border border-secondaryLightColor md:col-span-2 col-span-4 py-1 rounded-md">
          <Listbox.Button className="cursor-pointer w-full flex justify-between items-center focus:outline-none px-4  ">
            <span className="text-sm ">
              {active == "" ? " Location" : active}
            </span>

            <span>
              <FiChevronDown className=" h-3 w-3 " />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute   mt-9 w-full bg-white rounded-md  shadow-md z-50  focus:outline-none">
              {Available.map((val, key) => {
                return (
                  <Listbox.Option
                    key={key}
                    className="relative select-none p-2  text-sm  hover:bg-primaryColor hover:text-white text-black cursor-pointer"
                    value={val}
                  >
                    <p>{val}</p>
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <input
        type="number"
        className="md:col-span-10 col-span-12 md:w-full w-64  outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1"
        placeholder="Pincode"
        name="pincode"
        value={details.pincode}
        onChange={handleChange}
      />
      <div className="flex  gap-2 md:col-span-6 col-span-12">
        <Listbox value={active} onChange={(val) => setActive(val)}>
          <div className="relative flex border border-secondaryLightColor w-20 py-1 rounded-md">
            <Listbox.Button className="cursor-pointer w-full flex justify-between items-center focus:outline-none px-2 ">
              <span className="text-sm ">{active == "" ? " Mr" : active}</span>

              <span>
                <FiChevronDown className=" h-3 w-3 " />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute   mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                {Available.map((val, key) => {
                  return (
                    <Listbox.Option
                      key={key}
                      className="relative select-none p-2  text-sm  hover:bg-primaryColor hover:text-white text-black cursor-pointer"
                      value={val}
                    >
                      <p>{val}</p>
                    </Listbox.Option>
                  );
                })}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <input
          type="text"
          className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full col-span-6 "
          placeholder="Name"
          name="projectName"
          value={details.projectName}
          onChange={handleChange}
        />
      </div>
      <input
        type="number"
        className="md:col-span-6 col-span-12 outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full  "
        placeholder="Mobile"
        name="mobile"
        value={details.mobile}
        onChange={handleChange}
      />
      <input
        type="number"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full md:col-span-6 col-span-12 "
        placeholder="Alternate No."
        name="alternateNumber"
        value={details.alternateNumber || ""}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full md:col-span-6 col-span-12 "
        placeholder="Address line 1 "
        name="addressLine1"
        value={details.addressLine1}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full md:col-span-6 col-span-12 "
        placeholder="Address line 2"
        name="addressLine2"
        value={details.addressLine2}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full md:col-span-6 col-span-12 "
        placeholder="Landmarks"
        name="landmarks"
        value={details.landmarks}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full md:col-span-6 col-span-12 "
        placeholder="City"
        name="city"
        value={details.city}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full md:col-span-6 col-span-12 "
        placeholder="State "
        name="state"
        value={details.state}
        onChange={handleChange}
      />
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full md:col-span-6 col-span-12 "
        placeholder="Nearby Places"
        name="nearbyPlaces"
        value={details.nearbyPlaces}
        onChange={handleChange}
        />
      <input
        type="text"
        className=" outline-none focous:outline-none border border-secondaryLightColor  text-sm rounded-md px-4 py-1 w-full md:col-span-6 col-span-12 "
        placeholder="Google Map Location"
        name="googleMapLocation"
        value={details.googleMapLocation}
        onChange={handleChange}
      />
    </div>
  );
};

export default Home;
