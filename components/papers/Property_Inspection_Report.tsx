import React from "react";
import { ArrowLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import html2pdf from "html2pdf.js";
import { useRef, useState } from "react";

const Property_Inspection_Report = () => {
  const router = useRouter();
  const input = useRef(null);
  const [margin, setMargin] = useState(false);
  return (
    <div>
      <script src="html2pdf.bundle.min.js"></script>
      <div className="px-6 mt-5 flex relative">
        <ArrowLeftIcon
          className="h-10 w-10 text-black cursor-pointer"
          onClick={() => router.back()}
        />
        <Link
          href="/assets/forms/Property-Inspection-Report.pdf"
          target={"_blank"}
          download={true}
        >
          <PrinterIcon
            // onClick={() => printRegistrationForm()}
            className="h-7 w-7 text-black absolute right-10 sm:right-16 lg:right-20  -bottom-[2rem] cursor-pointer"
          />
        </Link>
      </div>

      <div ref={input} className="px-10 md:px-16 lg:px-20">
        <p className="text-lg  border-b-2 border-black pb-6">
          Property Inspection Report
        </p>
        <p className="mt-8 text-lg  font-semibold text-center">
          PROPERTY INSPECTION REPORT
        </p>
        Address of Property
        <div className=" mt-10 w-full">
          <p className="text-sm  border-t border-black border-r border-l py-2 px-4">
            Please tick/fill the relevant box appropriate(All fields are
            mandatory)
          </p>
          <div className="grid grid-cols-4 border border-black">
            <div className="border-r border-black">
              <p className="pl-1 sm:pl-3 py-7 text-xs xs:text-sm   font-semibold">
                Address of Property
              </p>
            </div>
            <div className="border-r border-black flex justify-center items-center">
              <input
                type="text"
                className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
              />
            </div>

            <div className="border-r border-black">
              <p className="pl-1 sm:pl-3 py-7 text-xs xs:text-sm   font-semibold">
                Landmark
              </p>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="text"
                className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 border-b border-x border-black">
            <div className="border-r border-black">
              <p className="pl-1 sm:pl-3 py-4 text-xs xs:text-sm  font-semibold">
                Time & Date Inspected
              </p>
            </div>
            <div className="border-r border-black">
              <input
                type="text"
                className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
              />
              {/* <input type="checkbox" className='w-1/2 h-1/2 accent-black  ' /> */}
            </div>

            <div className="border-r border-black">
              <p className="pl-1 sm:pl-3 py-4 text-xs xs:text-sm  font-semibold">
                Co-ordinated with
              </p>
            </div>
            <div>
              <input
                type="text"
                className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
              />
              {/* <input type="checkbox" className='w-1/2 h-1/2 accent-black  ' /> */}
            </div>
          </div>
          <div className="grid grid-cols-4 border-b border-x border-black">
            <div className="border-r border-black">
              <p className="pl-1 sm:pl-3 py-4 text-xs xs:text-sm  font-semibold">
                Name of SM
              </p>
            </div>
            <div className="border-r border-black">
              <input
                type="text"
                className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
              />
            </div>
            <div className="border-r border-black">
              <p className="pl-1 sm:pl-3 py-4 text-xs xs:text-sm  font-semibold">
                Name & Designation
              </p>
            </div>
            <div>
              <input
                type="text"
                className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 border-b border-x border-black">
            <div className="border-r border-black">
              <p className="pl-1 sm:pl-3 py-4 text-xs xs:text-sm  font-semibold">
                Contact Details
              </p>
            </div>
            <div className="border-r border-black">
              <input
                type="text"
                className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
              />
            </div>
            <div className="border-r border-black">
              <p className="pl-1 sm:pl-3 py-4 text-xs xs:text-sm  font-semibold">
                Contact Details
              </p>
            </div>
            <div>
              <input
                type="text"
                className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
              />
            </div>
          </div>
          <div className="h-12 border-x border-b border-black">&nbsp;</div>
          <div className=" border-x border-black w-full">
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black text-center">
                  <p className="text-xs xs:text-sm   p-3 font-semibold">
                    Items
                  </p>
                </div>
                <div className="w-[10%] border-r border-black"></div>
                <div className="w-[45%]  border-r border-black text-center">
                  <p className="text-xs xs:text-sm   p-3 font-semibold">
                    Comments
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black text-center">
                  <p className="text-xs xs:text-sm   p-3 font-semibold">
                    Items
                  </p>
                </div>
                <div className="w-[10%] border-r border-black"></div>
                <div className="w-[45%]  text-center">
                  <p className="text-xs xs:text-sm    p-3 font-semibold">
                    Comments
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    No. of Doors & windows
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Housekeeping Staff
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Nth, East, West, Sth position
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm p-1 sm:p-3">Laundry</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm p-1 sm:p-3">
                    Locks on windows & doors
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm p-1 sm:p-3">Garbage chute</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`html2pdf__page-break ${margin ? "mb-10" : ""}`}
          ></div>

          <div className="border-t  border-x border-black w-full">
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Interiors (furnished / non-furnished)
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Outdoor areas
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Ceiling height
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Fencing</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Door locks (Manual / digital)
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Rain water tank
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Foyer</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Sewage treatment plant
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="  border-x border-black w-full">
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Kitchen</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="w-full text-center p-3">
                <p className="text-xs xs:text-sm sm:text-base font-semibold">
                  Building Inspection
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Living / Lounge
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Appearance of building
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Dining Room</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Structural soundness
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Bedroom #1</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Cracks in the walls & floors
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Bedroom #2</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Leaks in roof or walls
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  {" "}
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Bedroom #3</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Roof condition
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Bedroom #4</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Exposed perimeters on
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`html2pdf__page-break ${margin ? "mb-10" : ""}`}
          ></div>
          <div className="border-x border-t border-black w-full">
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Inbuilt wardrobes
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Guttering</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Bed Frame & Bed Sheet
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Plumbing</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Flooring wooden / marble / tiles
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Root damage from trees
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Bathroom #1</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Water tightness in garage
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Bathroom #2</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Water source (borewell / city board line)
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Bathroom #3</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Maintenance</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Kitchen counters / slab
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Deposits</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Dampness in bathroom
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Housing society
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Bathroom fittings
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Insurance</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Air conditioning
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Policy on pets
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Gas piping / leaks
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Medical facility / conveyance store
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`html2pdf__page-break ${margin ? "mb-10" : ""}`}
          ></div>
          <div className="border-x border-t border-black w-full">
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Stairs</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Pets Inspection
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Power points & switches
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Property tax</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Geysers /solar water heater
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    ELectricity bills meter
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Solar panels</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Water bills / meter
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Security & CCTV surveillance
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Noise from neighbours
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Safety overload switches
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Noise from traffic
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Fire extinguisher
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Railway / Airfact noise
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Lights & Electricity
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Neighbouring facilities
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Fire alarm / water sprinkler
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Visitor parking
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Water / pipes
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">
                    Easy access to the property
                  </p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 border-b border-black">
              <div className="flex w-full">
                <div className="w-[45%] border-r border-black">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Fire alarm</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%]  border-r border-black">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-[45%]  border-r border-black overflow-scroll">
                  <p className="text-xs xs:text-sm  p-1 sm:p-3">Amenities</p>
                </div>
                <div className="w-[10%] border-r border-black flex justify-center items-center">
                  {/* <div className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6"></div> */}
                  <input
                    type="checkbox"
                    className="border border-black h-3 w-3 sm:h-4 lg:h-6 sm:w-4 lg:w-6 accent-black"
                  />
                </div>
                <div className="w-[45%] ">
                  <input
                    type="text"
                    className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`html2pdf__page-break ${margin ? "mb-10" : ""}`}></div>
        <p className="text-xs xs:text-sm  mt-4  mb-1 px-4">
          Please provide any additional comments or suggestions
        </p>
        <div className="border border-black h-28">
          <input
            type="text"
            className="w-full h-full border-none outline-none focus:outline-none px-2 font-light text-sm"
          />
        </div>
        <div className="grid grid-cols-3 mt-4">
          <p className="text-sm">Date:</p>
          <p className="text-sm">Place:</p>
          <p className="text-sm">SM Signature:</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            setMargin(true);
            html2pdf(input.current);
            setTimeout(() => {
              setMargin(false);
            }, 5000);
          }}
          className="bg-primaryColor text-black text-sm sm:text-base  lg:text-xl px-6 py-3 rounded-lg cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Property_Inspection_Report;
