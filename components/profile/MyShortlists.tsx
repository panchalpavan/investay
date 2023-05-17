import React from "react";
import Dropdown from "react-dropdown";
import Edit from "../SVGComponents/profile/Edit";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FiMinus } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";
import { RightArrow } from "../SVGComponents/RightArrow";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

const MyShortLists = ({ shortlists }: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div id={`myshort-lists`}>
      <Disclosure as={"div"} defaultOpen={true} className="w-full">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">My Shortlists</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel>
              {/* <p className="my-2">Edit</p> */}
              {shortlists?.length === 0 ? (
                <p className="mb-4">No data to display</p>
              ) : (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md_link:grid-cols-3 2xl:grid-cols-3 gap-2 sm:gap-4">
                  {shortlists?.map((property: any) => {
                    return (
                      <div
                        key={property?._id}
                        className="w-full h-full shadow-md flex flex-col rounded-lg overflow-hidden"
                      >
                        <div className="lg:col-span-4 sm:col-span-6  col-span-12  h-full  shadow-md flex flex-col rounded-lg">
                          <div className="h-28 xxs:h-[10rem] w-full relative ">
                            <p
                              className={`${
                                property?.status === "published"
                                  ? "bg-greenBg"
                                  : "bg-red-600"
                              } capitalize text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center`}
                            >
                              {property?.status}
                            </p>
                            <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
                              <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
                                <img
                                  src={"/assets/images/CardImage.png"}
                                  alt="No Image"
                                  className="w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
  
                          <div className=" mt-1 xxs:mt-4 mb-2">
                            <div className="px-2 ">
                              <p className="text-base font-semibold  tracking-wide">
                                Modern and quikry flat
                              </p>
                              <p className="font-normal text-xs ">
                                bbsr,infocity , flat 6
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MyShortLists;
