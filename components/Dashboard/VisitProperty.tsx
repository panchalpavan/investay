import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/20/solid";
import { Faq } from "../property/Faq";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import MinusIcon from "@heroicons/react/20/solid";
import PlusIcon from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
export const VisitProperty = () => {
  const [value, onChange] = useState(new Date());
  const [isRental, setIsRental] = useState(true);
  const events = ["22-12-2022", "15-12-2022"];
  return (
    <>
      <div className="mt-20">
        <p className="text-base font-bold mb-10 ">Visiting Your Properties</p>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-4 md:col-span-5 col-span-12">
            <Calendar
              // tileDisabled={false}
              next2Label={null}
              prev2Label={null}
              prevLabel={<ChevronLeftIcon className=" h-6 w-6" />}
              nextLabel={<ChevronRightIcon className=" h-6 w-6" />}
              onChange={onChange}
              value={value}
              tileClassName={({ date, view }) => {
                if (
                  events.find((x) => x === moment(date).format("DD-MM-YYYY"))
                ) {
                  return "highlight";
                }
              }}
            ></Calendar>
          </div>
          <div className="lg:col-span-8  md:col-span-7 col-span-12 overflow-x-auto relative lg:mt-0 mt-10 ">
            <table className="w-full   text-left ">
              <thead>
                <tr className="xxs:text-base text-sm text-center">
                  <th scope="col" className="pb-3 ">
                    Name
                  </th>
                  <th scope="col" className="pb-3 ">
                    Mobile No.
                  </th>
                  <th scope="col" className="pb-3 ">
                    Date Of Visit
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className=" xxs:text-base text-sm ">
                  <td className="py-3 ">Sumit Singh</td>
                  <td className="py-3 ">+91 01234 56789</td>
                  <td className="py-3 ">22 Nov 2022</td>
                </tr>
                <tr className="xxs:text-base text-sm">
                  <td className="py-3 ">Karan Singh</td>
                  <td className="py-3 ">+91 01234 56789</td>
                  <td className="py-3 ">22 Nov 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-base font-bold mb-10 flex items-center gap-2  ">
          Pending Documents
          <span>
            <ArrowDownTrayIcon className=" w-5 h-5" />
          </span>
        </p>

        <div className="flex flex-col w-fit max-w-full gap-y-5">
          <input
            type="text"
            className=" outline-none focous:outline-none border-2 border-gray-400  text-sm rounded-lg py-1 xxs:pr-40 pr-2 pl-2"
            placeholder="Reservation Form - Resale"
          />
          <input
            type="text"
            className=" outline-none focous:outline-none border-2 border-gray-400  text-sm rounded-lg py-1 xxs:pr-40 pr-2  pl-2"
            placeholder="Reservation Form - Rental"
          />
          <input
            type="text"
            className=" outline-none focous:outline-none border-2 border-gray-400  text-sm rounded-lg py-1 xxs:pr-40 pr-2 pl-2"
            placeholder="Property Inspection Report"
          />
          <input
            type="text"
            className=" outline-none focous:outline-none border-2 border-gray-400  text-sm py-1 w-[6rem] pl-2"
            placeholder="MOU"
          />
        </div>
      </div>
      <div className="my-20">
        <p className="text-base font-bold mb-10 ">Visit Property</p>
        <div className="grid grid-cols-12">
          <div className="lg:col-span-4 md:col-span-5 col-span-12">
            <Calendar
              next2Label={null}
              prev2Label={null}
              prevLabel={<ChevronLeftIcon className=" h-6 w-6" />}
              nextLabel={<ChevronRightIcon className=" h-6 w-6" />}
              onChange={onChange}
              value={value}
              tileClassName={({ date, view }:any) => {
                if (
                  events.find((x) => x === moment(date).format("DD-MM-YYYY"))
                ) {
                  return "highlight";
                }
              }}
            ></Calendar>
          </div>
          <div className="lg:col-span-8  md:col-span-7 col-span-12 overflow-x-auto relative lg:mt-0 mt-10 ">
            <table className="w-full   text-left ">
              <thead>
                <tr className="xs:text-base text-sm text-center">
                  <th scope="col" className="pb-3 ">
                    Name
                  </th>
                  <th scope="col" className="pb-3 ">
                    Mobile No.
                  </th>
                  <th scope="col" className="pb-3 ">
                    Date Of Visit
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className=" xxs:text-base text-sm ">
                  <td className="py-3 ">Sumit Singh</td>
                  <td className="py-3 ">+91 01234 56789</td>
                  <td className="py-3 ">22 Nov 2022</td>
                </tr>
                <tr className=" xxs:text-base text-sm">
                  <td className="py-3 ">Karan Singh</td>
                  <td className="py-3 ">+91 01234 56789</td>
                  <td className="py-3 ">22 Nov 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Faq isRental={isRental} setIsRental={setIsRental} />
    </>
  );
};
