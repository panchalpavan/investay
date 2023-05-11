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
import { GrShare } from "react-icons/gr";
import moment from "moment";

type TProps = {
  enquiries: any;
};

const MyEnquiries = ({ enquiries }: TProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div id="my-enquiries">
      <Disclosure as={"div"} defaultOpen={true} className="w-full">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">My Enquiries</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel className="mb-12">
              <div className="relative overflow-x-auto mt-5 w-full ">
                {enquiries?.length === 0 ? (
                  <p>No data to display!</p>
                ) : (
                  <table className="w-[1000px] overflow-x-scroll text-sm  text-black text-center">
                    <thead className="text-sm bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="p-2 border-black border-[1px] "
                        >
                          Property Name
                        </th>
                        <th
                          scope="col"
                          className="p-2 border-black border-[1px]"
                        >
                          Service Availed
                        </th>
                        <th
                          scope="col"
                          className="p-2 border-black border-[1px]"
                        >
                          Owner Name
                        </th>
                        <th
                          scope="col"
                          className="p-2 border-black border-[1px]"
                        >
                          Mobile
                        </th>

                        <th
                          scope="col"
                          className="p-2 border-black border-[1px] "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="p-2 border-black border-[1px]"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-normal text-center">
                      {enquiries?.map((enquiry: any) => {
                        return (
                          <tr key={enquiry?._id} className="bg-white">
                            <th
                              scope="row"
                              className="p-2 font-normal whitespace-nowrap border-black border-[1px] "
                            >
                              <div className="flex justify-center items-center">
                                <p className="mr-2">
                                  {enquiry?.property?.projectName}
                                </p>
                                <span className="cursor-pointer">
                                  <GrShare
                                    onClick={() =>
                                      router.push(
                                        `/property/${enquiry?.property?._id}`
                                      )
                                    }
                                  />
                                </span>
                              </div>
                            </th>
                            <td className="px-6 py-4 border-black border-[1px]  text-black capitalize">
                              {enquiry?.property?.category}
                            </td>
                            <td className="px-6 py-4 border-black border-[1px]  text-black">
                              {enquiry?.name}
                            </td>
                            <td className="px-6 py-4 border-black border-[1px]  text-black">
                              {enquiry?.countryCode} {enquiry?.mobile}
                            </td>
                            <td className="px-6 py-4 border-black border-[1px]  text-black">
                              {enquiry?.email}
                            </td>
                            <td className="px-4 py-4 border-black border-[1px]  text-black">
                              {moment(new Date(enquiry?.createdAt)).format(
                                "YYYY-MM-DD h:mm a"
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MyEnquiries;
