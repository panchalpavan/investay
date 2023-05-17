import { ArrowLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";

import React, { useRef, useState, Component } from "react";
// import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf'
import jsPDF from "jspdf";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/router";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import Amenties from "../property/propertyDetails/Amenties";
const OnlineRegistrationForm = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const [agree, setAgree] = useState(false);
  const input = useRef(null);

  const [amentiesData, setAmentiesData] = useState([
    {
      id: 1,
      amentie: "Lift",
      include: false,
    },
    {
      id: 2,
      amentie: "Power Back-Up",
      include: false,
    },
    {
      id: 3,
      amentie: "Club House",
      include: false,
    },
    {
      id: 4,
      amentie: "Swimming Pool",
      include: false,
    },
    {
      id: 5,
      amentie: "Gym",
      include: false,
    },
    {
      id: 6,
      amentie: "Covered Car Park",
      include: false,
    },
    {
      id: 7,
      amentie: "Lift",
      include: false,
    },
    {
      id: 8,
      amentie: "Badminton/Tennis",
      include: false,
    },
    {
      id: 9,
      amentie: "Grocery Store",
      include: false,
    },
    {
      id: 10,
      amentie: "Pharmacy",
      include: false,
    },
    {
      id: 11,
      amentie: "Salon/Spa",
      include: false,
    },
    {
      id: 12,
      amentie: "Kids Play Area",
      include: false,
    },
    {
      id: 13,
      amentie: "Pet Area",
      include: false,
    },
    {
      id: 14,
      amentie: "Children's Play Area",
      include: false,
    },
    {
      id: 15,
      amentie: "Indoor Games Area",
      include: false,
    },
    {
      id: 16,
      amentie: "Library",
      include: false,
    },
  ]);

  const handleCheck = (id: any) => {
    setAmentiesData(
      amentiesData.map((item) =>
        item.id === id ? { ...item, include: !item.include } : item
      )
    );
  };

  return (
    <div>
      <script src="html2pdf.bundle.min.js"></script>

      <div className="px-6 mt-5 flex relative">
        <ArrowLeftIcon
          className="h-10 w-10 text-black cursor-pointer"
          onClick={() => router.back()}
        />
        <Link
          href="/assets/forms/Online-Registration-Form.pdf"
          target={"_blank"}
          download={true}
        >
          <PrinterIcon
            // onClick={() => printRegistrationForm()}
            className="h-7 w-7 text-black absolute right-10 sm:right-16 lg:right-20  -bottom-[2rem] cursor-pointer"
          />
        </Link>
      </div>
      <div>
        <div ref={input} className="px-10 md:px-16 lg:px-20">
          <p className="text-base border-b-2 border-black pb-6">
            Online Registration Form
          </p>
          <p className="mt-8 text-base font-semibold">
            Investay Realty Services LLP - An Initiative by Century Real Estate
            Holdings Pvt. Ltd
          </p>
          <div className="flex">
            <p className="text-sm  mt-10 font-light leading-8">
              I/We have taken professional services of
              <input
                type="text"
                className=" border-b border-black  outline-none px-2"
              />
              for sale of our property and hereby also agree to sell the above
              mentioned property at minimum value of
              <input
                type="text"
                className=" border-b border-black  outline-none px-2"
              />
              Lakhs/Crs.
            </p>
          </div>
          <p className="mt-8 text-sm  font-light">
            If a prospective buyer comes to an agreement with INVESTAY REALTY
            SERVICES LLP on terms which are acceptable to me/us as the owner, a
            fee amount of 3% of the decided sale consideration amount will be
            given to INVESTAY for their services. INVESTAY will be only handling
            the sale transaction on my behalf, however all the documentation and
            statutory charges (e.g. - E-stamp paper, stamp duty, valuation etc.)
            will be borne by me/us being the owner of the company. I/we hereby
            also confirm to pay all the levies/GST towards the services being
            rendered by INVESTAY.
          </p>
          <p className="mt-8 text-base font-semibold">
            This Registration form will cover all the aspects of your and
            property details, which you wish to Resale/Rent-out. We at INVESTAY
            will be providing complete professional service & customer
            centricity.
          </p>
          <div className="border border-black mt-8 font-light">
            <div className="flex items-center w-full px-4  border-b border-black">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">First Name*</p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] outline-none px-2"
              />
            </div>
            <div className="flex items-center w-full px-4 border-b border-black">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">Last Name*</p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] outline-none px-2"
              />
            </div>
            <div className="flex items-center w-full px-4 border-b border-black">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">Mobile Number*</p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] px-2 outline-none"
              />
            </div>
            <div className="flex items-center w-full px-4 border-b border-black">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">
                  Alternate Mobile Number*
                </p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] outline-none px-2"
              />
            </div>
            <div className="flex items-center w-full px-4 border-b border-black">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">E-Mail ID*</p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] outline-none px-2"
              />
            </div>
            <div className="flex items-center w-full px-4 border-b border-black">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">
                  Current Address
                </p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] outline-none px-2"
              />
            </div>
            <div className="flex items-center w-full px-4 border-b border-black">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">
                  Resale/Rental
                  <br />
                  (mention any one)
                </p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] outline-none px-2"
              />
            </div>
            <div className="flex items-center w-full px-4 border-b border-black">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">
                  Address of Property*
                </p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] outline-none px-2"
              />
            </div>
            <div className="flex items-center w-full px-4">
              <div className="w-1/3 border-r border-black">
                <p className="text-base   py-2 font-semibold">
                  KYC (PAN/AADHAR NUMBER)*
                  <br />
                  Provide copy for same
                </p>
              </div>
              <input
                type="text"
                className="border-none w-[66%] outline-none px-2"
              />
            </div>
          </div>
          <div className="html2pdf__page-break"></div>
          <p className="italic text-lg font-semibold text-danger mt-1">
            *Mandatory fields
          </p>
          <p className="text-danger  text-base   font-light mt-8">
            1. Type of Property (Tick any one)
          </p>
          <div className="flex items-center mt-2 ml-4 flex-wrap gap-x-8 gap-y-4">
            <div className="flex gap-2 items-center leading-10">
              <input
                type="checkbox"
                className=" border  border-none outline-none accent-black px-2"
              />

              <span className="text-sm font-light">Apartment</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black  px-2"
              />
              <p className="text-sm  font-light ml-2">Villa</p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">Plot</p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black  px-2 "
              />
              <p className="text-sm font-light ml-2">Independent-Bungalow</p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">Penthouse</p>
            </div>
          </div>
          <div className="flex items-center mt-4 flex-wrap gap-x-8 gap-y-4">
            <p className="text-danger  text-base font-light">2. No. of BHK</p>

            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2"
              />
              <p className="text-sm font-light ml-2">Studio</p>
            </div>

            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2"
              />
              <p className="text-sm  font-light ml-2">1 BHK</p>
            </div>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black  px-2"
              />
              <p className="text-sm  font-light ml-2">2 BHK</p>
            </div>
            <div className="flex  items-center">
              {" "}
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black    px-2"
              />
              <p className="text-sm  font-light ml-2">3 BHK</p>
            </div>

            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">4 BHK</p>
            </div>

            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">5 BHK</p>
            </div>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2"
              />
              <p className="text-sm  font-light ml-2">Plot</p>
            </div>
          </div>
          <div className="flex items-center mt-4 flex-wrap leading-8 ">
            <p className="text-danger text-base  font-light">
              3. Area of the Property (in SFT)
            </p>
            <p className="text-sm  font-light ml-6">
              Super Built Area
              {/* &#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95; */}
              <input
                type="text"
                className="border-b border-black outline-none px-2"
              />
              Carpet Area
              {/* &#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95; */}
              <input
                type="text"
                className="border-b border-black outline-none px-2"
              />
            </p>
          </div>
          <p className="text-danger text-base  font-light mt-4">
            4. Status of the Property (For Resale option only)
          </p>

          <div className="flex items-center flex-wrap gap-x-8 gap-y-4 ml-4 mt-2">
            <div className="flex  items-center">
              {" "}
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black px-2 "
              />
              <p className="text-sm  font-light ml-2">Ready-to-Occupy</p>
            </div>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">Nearing completion</p>
            </div>

            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">Under-construction*</p>
            </div>

            <p className="text-sm  font-light">
              (* More than 1 year to complete)
            </p>
          </div>
          <div className="flex items-center mt-4 flex-wrap  gap-x-8 gap-y-4">
            <p className="text-danger text-base font-light">
              5. Facing of the Property
            </p>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black    px-2"
              />
              <p className="text-sm  font-light ml-2">EAST</p>
            </div>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2"
              />
              <p className="text-sm  font-light ml-2">NORTH</p>
            </div>

            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black  px-2 "
              />
              <p className="text-sm  font-light ml-2">WEST</p>
            </div>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black    px-2"
              />
              <p className="text-sm  font-light ml-2">SOUTH</p>
            </div>
          </div>
          <div className="flex items-center gap-x-8 gap-y-4 mt-4 flex-wrap">
            <p className="text-danger text-base  font-light">
              6. Years since completion
            </p>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black  px-2"
              />
              <p className="text-sm  font-light ml-2">Less than 1 Year</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black  px-2"
              />
              <p className="text-sm font-light ml-2">2-4 Year</p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black  px-2 "
              />
              <p className="text-sm  font-light ml-2">5 Years+</p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">10 Years+</p>
            </div>
          </div>
          <div className="flex items-center mt-4 flex-wrap leading-8 gap-x-8 gap-y-4 ">
            <p className="text-danger text-base font-light">7. Property is</p>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm font-light ml-2">Vacant</p>
            </div>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">Self Occupied</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">
                Tenanted, if tenanted valid for
                <input
                  type="text"
                  className="border-b border-black outline-none px-2"
                />
                months
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4 flex-wrap  gap-x-8 gap-y-4 ">
            <p className="text-danger text-base font-light">
              8. Property is within limits of
            </p>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2"
              />
              <p className="text-sm  font-light ml-2">BBMP/BDA</p>
            </div>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2"
              />
              <p className="text-sm  font-light ml-2">BIAPPA</p>
            </div>

            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2"
              />
              <p className="text-sm  font-light ml-2">DPA</p>
            </div>
            <div className="flex  items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border  border-none outline-none accent-black   px-2 "
              />
              <p className="text-sm  font-light ml-2">Village Panchayat</p>
            </div>
          </div>
          <div className="html2pdf__page-break"></div>
          <p className="text-danger text-base  font-light mt-4">
            9. Choose the Amenities available (Tick options applicable)
          </p>
          <div className="border border-black mt-2  grid grid-cols-10 w-full ">
            {amentiesData.map((amentie, ind) => {
              return ind % 2 == 0 ? (
                <>
                  {" "}
                  <div
                    key={ind}
                    className="col-span-4 py-3 px-4 border-b border-black"
                  >
                    <p className="text-base  font-light">{amentie.amentie}</p>
                  </div>
                  <div
                    onClick={() => handleCheck(amentie.id)}
                    className="col-span-1 border-x border-black border-b  cursor-pointer"
                  >
                    {amentie.include ? (
                      <p className="text-3xl text-center"> &#10003;</p>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div
                    key={ind}
                    className="col-span-4 py-3 px-4 border-b border-black"
                  >
                    <p className="text-base  font-light">{amentie.amentie}</p>
                  </div>
                  <div
                    onClick={() => handleCheck(amentie.id)}
                    className="col-span-1 border-x border-b border-black  cursor-pointer"
                  >
                    {/* <p className="text-3xl text-center"> &#10003;</p> */}
                    {amentie.include ? (
                      <p className="text-3xl text-center"> &#10003;</p>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              );
            })}
          </div>
          {/* <div className="html2pdf__page-break"></div> */}
          <div className="mt-6 flex items-center leading-8">
            <p className="text-sm  font-light">Car park (Yes/No) in Nos.:</p>

            {/* &#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95; */}
            <input
              type="text"
              className="outline-none border-b font-light border-black px-2 ml-1"
            />
          </div>
          <div className="flex items-center mt-2 leading-8">
            <p className="text-sm font-light">Covered/Non-covered:</p>

            {/* &#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95;&#95; */}
            <input
              type="text"
              className="outline-none border-b font-light  border-black px-2 ml-1 text-sm"
            />
          </div>
          <div className="flex items-center mt-2 leading-8">
            <p className="text-sm  font-light">
              Interiors (Not furnished/Semi furnished/Fully furnished):
            </p>

            <input
              type="text"
              className="outline-none border-b border-black px-2 font-light ml-1 text-sm"
            />
          </div>
          <p className=" mt-4 text-sm font-light leading-8">
            USE of the Property:
          </p>
          {/* <div className="w-full h-8 border-b border-black" />
        
        <div className="w-1/2 h-8 border-b border-black" /> */}
          <input
            type="text"
            className=" w-full h-8  text-sm outline-none border-b border-black px-2 font-light leading-8"
          />
          <input
            type="text"
            className="text-sm w-1/2 h-8 outline-none border-b border-black px-2 font-light leading-8"
          />

          <p className="mt-4 text-sm font-light leading-8">
            Existing Home Loan on the Property? YES/NO: (if yes, mention the
            bank name)
          </p>
          {/* <div className="w-1/2 border-b border-black h-8"></div> */}
          <input
            type="text"
            className=" text-sm w-1/2 leading-8 h-8 outline-none border-b border-black font-light px-2"
          />
          <p className="mt-4 text-sm leading-8 font-light">
            Property registered YES/NO (if Yes, mention the registrar office):
          </p>
          <input
            type="text"
            className="text-sm w-1/2 leading-8 h-8 outline-none border-b border-black font-light px-2"
          />
          <p className="text-base   font-semibold mt-10">Terms & Conditions:</p>
          <p className="text-base  font-light">
            <span className="font-semibold">
              1. Appointment as &lsquo;Exclusive Service Provider&rsquo;:
            </span>{" "}
            The Owner/s hereby appoints INVESTAY as his/her/their exclusive
            Service Provide for the purpose of sale/rental of Property.
          </p>
          <p className="text-sm font-light mt-4">
            <span className="font-semibold">2. Scope of Work:</span> It is
            agreed between the Parties that INVESTAY shall either through its
            employees or third party service providers, on best effort basis
            and:
          </p>

          <div className="html2pdf__page-break"></div>
          <p className="text-sm font-light mt-2">
            <strong className="ml-4">a.</strong>&nbsp;Assist and facilitate the
            Owner/s in identifying a suitable buyer/s or Tenant for the
            Property,
          </p>

          <p className="text-sm font-light mt-2">
            <strong className="ml-4">b.</strong>&nbsp;At its sole discretion,
            use any or all media / online tools / platforms / any other medium
            to display, disclose and advertise the details of the Property in
            order to gather maximum reach out to prospective buyer/s or tenants
            with sole intention of getting optimum benefit on the Property to
            the Owner/s,
          </p>
          <p className="text-sm font-light mt-2">
            <strong className="ml-4">c.</strong>&nbsp;Facilitate and arrange
            visits to the Property to various prospective buyer/s or
            &lsquo;tenants on request,
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">d.</strong>&nbsp;Secure the best possible
            sale price / monthly rent to the property by negotiating with such
            prospective buyer/s or tenant.
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">e.</strong>&nbsp;Collect from the
            prospective buyer/tenant advance token amount of agreed sale/ rental
            value towards advance sale/rental consideration, and arrange for
            execution of agreement of sale / rental between the prospective
            buyer/tenant and the Owner/s,
          </p>
          <p className="text-sm font-light mt-2">
            <strong className="ml-4">f.</strong>&nbsp;Shall ensure the
            prospective buyer completes the sale transaction within 3 (three)
            months from the date of agreement of sale (or within such time
            period mutually agreed at the time of signing of the said agreement
            of sale) and in case of rental same period will be for 15 (fifteen)
            days.
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">g.</strong>&nbsp;Provide assistance in
            preparation of necessary legal documentation/s including
            MOU/agreement of sale/sale deed/Tenancy contract/lease contract (as
            applicable),
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">h.</strong>&nbsp;Provide assistance in
            stamping/obtaining stamp paper for execution of such legal
            documentation at the cost of the Owner/s,
          </p>
          {/* <div className="html2pdf__page-break"></div> */}
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">i.</strong>&nbsp;Provide assistance in
            payment of statutory fees as regards the proposed transaction to the
            authorities at the cost of the Owner/s,
          </p>

          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">j.</strong>&nbsp;Provide assistance in
            completion of registration of legal document at the jurisdictional
            office of the Sub-Registrar of Assurances at the cost of the
            Owner/s.
          </p>
          <p className="text-sm  font-light mt-2">
            It is expressly clarified and mutually agreed between the Parties
            that INVESTAY shall not be responsible for any additional scope of
            work outside the agreed scope of work as above.
          </p>
          <p className=" text-sm   font-light mt-4">
            <span className="font-semibold text-base ">
              3. Statutory Charges:
            </span>{" "}
            It is expressly clarified and mutually agreed between the Parties
            that the costs payable towards stamp duty, registration fee,
            statutory fees and incidental expenses payable thereof, shall
            although be borne by the prospective buyer as per the existing laws,
            even if opted to be paid by the Owner/s, shall solely be payable by
            the Owner/s or prospective buyer, and INVESTAY shall not be
            responsible at any time for payment of any such
            charges/fees/duties/levies/penalties, etc., in relation to the
            Proposed Transaction/Property.
          </p>

          <p className="text-sm  font-light mt-4">
            <span className="font-semibold text-base">4. Mandate Period.</span>{" "}
            This Agreement shall be valid, binding and in force for a period of
            90 (ninety) days - 180 (one hundred eighty days) from the Effective
            Date or completion of the Proposed Transaction based on the
            categorization of the property, whichever is later. During the
            mandate period the Owner/s shall not appoint any other person/entity
            as the service provider for the sale of the Property. In the event
            during the mandate period, if the Owner/s agrees to sell / sells the
            Property to any third party identified by Owner/s personally or
            through third party service provider/s, then the Owner/s shall be
            liable to pay the Service charges to INVESTAY as provided in this
            Agreement.
          </p>
          <div className="html2pdf__page-break"></div>
          <p className="text-sm font-light mt-4">
            <span className="font-semibold text-base">5. Lock-in Period:</span>{" "}
            The entire Mandate Period shall be lock-in period for the Owner/s
            and the Owner/s shall not be entitled to terminate the Agreement
            during the Mandate Period (“Lock-in Period”). In the event the
            Owner/s wishes to terminate the Agreement during the Lock-in Period,
            the Ownetr/s will be liable to pay the entire Service Charges to
            INVESTAY as per Clause 7 below.
          </p>
          <p className="text-sm  font-light mt-4">
            <span className="font-semibold text-base">
              6. Subscription Charges:
            </span>{" "}
            The Owner/s shall deposit with INVESTAY a sum of &#8377;5000/-
            (Rupees Five Thousand only) as “Subscription Charges” on the
            Effective Date (subscription charges is waived off for century
            customers). Accordingly the Owner/s have paid the said charges vide
            Razor pay/ cheque in favor of INVESTAY REALTY SERVICES LLP subject
            to Clause below, the entire Subscription Charges shall be
            refundable/adjusted by INVESTAY to the Owner/s within 15 (fifteen)
            days of expiry of the Mandate Period.
          </p>
          <p className="text-sm font-light mt-4">
            <span className="font-semibold text-base">7. Service Charges:</span>{" "}
            The Owner/s agrees to pay to Century a sum equivalent to 3% (three
            percentile) of actual sale value (“Service Charges”), in the
            following manner:
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">a.</strong>&nbsp;A sum equivalent to 1.50%
            (one point five zero percentile) or 50% (fifty percentile) of the
            Service Charges immediately upon receipt of Advance (defined below)
            by the Owner/s from the buyer of the Property,
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">b.</strong>&nbsp;A sum equivalent to 1.50%
            (one point five zero percentile) or 50% (fifty | percentile) of the
            remaining of the Service Charges on the date of registration of the
            sale deed in relation to the Property,
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">c.</strong>&nbsp;The Subscription Charges
            and the Service Charges are exclusive of applicable goods and
            services tax (“GST”). Applicable GST shall be payable by the Owner/s
            in addition to the above,
          </p>
          {/* <div className="html2pdf__page-break"></div> */}

          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">d.</strong>&nbsp;Both Subscription Charges
            and Service Charges shall be paid by way of either Razor pay or
            account payee cheque drawn in favor of “INVESTAY REALTY SERVICES
            LLP”.
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">e.</strong>&nbsp;In the event after
            identifying the prospective buyer / after executing the agreement of
            sale, if the Owner/s declines to sell the Property to the said
            prospective buyer, then the Owner/s shall be liable to pay the
            entire Service Charges to INVESTAY,
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">f.</strong>&nbsp;In the event after
            executing the agreement of sale, if the prospective buyer declines
            to purchase the Property, then from and out of the damages if any
            paid by the said buyer, the Owner/s shall pay the balance Service
            Charge to INVESTAY,
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">g.</strong>&nbsp;In the event any
            prospective buyer declines to purchase the Property for reasons
            attributable to misrepresentations or suppression of facts made by
            the Owner/s under this Agreement, the Owner/s shall be liable to pay
            the entire Service Charges to INVESTAY.
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">h.</strong>&nbsp;It is expressly agreed by
            the Owner/s that the Service Charges once paid shall not be
            refundable under any circumstances whatsoever.
          </p>
          <p className="text-sm  font-light mt-4">
            <span className="font-semibold text-base">
              8. Rights of INVESTAY:
            </span>{" "}
            Notwithstanding anything contained herein to the contrary, | the
            Owner/s hereby expressly agrees and accepts that INVESTAY is
            entitled to the following rights under this Agreement:
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">a.</strong>&nbsp;Receiving Service Charges
            under this Agreement.
          </p>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">b.</strong>&nbsp;Terminate the Agreement
            for any material breach by the Owner/s or if any of the
            representations made by the Owner/s to INVESATY is found to be
            materially incorrect.
          </p>
          <div className="html2pdf__page-break"></div>
          <p className="text-sm  font-light mt-2">
            <strong className="ml-4">c.</strong>&nbsp;In the event of any breach
            of the terms of this Agreement by the Owner/s, INVESTAY shall be
            entitled to enforce specific performance and also be entitled to
            recover all the losses and expenses incurred as consequence of such
            breach from the Owner/s.
          </p>

          <p className="text-sm  font-light mt-4">
            <span className="font-semibold text-base">
              9. Jurisdiction and Dispute Resolution:
            </span>{" "}
            Notwithstanding anything contained herein to the contrary, | the
            Owner/s hereby expressly agrees and accepts that INVESTAY is
            entitled to the following rights under this Agreement:
          </p>
          <p className="text-sm  font-light mt-2 leading-8">
            <strong className="ml-4">a.</strong>&nbsp;The substantive laws of
            India shall apply to all judicial and quasi-judicial proceedings
            herein. The courts in Bangalore alone shall have jurisdiction in all
            matters relating to this Agreement.
          </p>
        </div>
        <div className="flex items-center mt-8 ml-16">
          <div
            onClick={() => {
              setAgree(!agree);
            }}
            className={`h-5 w-5 border border-black cursor-pointer ${
              agree && "bg-primaryColor flex justify-center items-center"
            }`}
          >
            {agree && <FaCheck className="h-4 w-4 text-white" />}
          </div>

          <p className="text-sm  font-light ml-4">
            I hereby agree to above Terms & Condition.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => {
              html2pdf(input.current);
            }}
            className="bg-primaryColor text-black text-sm sm:text-base  lg:text-xl px-6 py-3 rounded-lg cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineRegistrationForm;
OnlineRegistrationForm.public = (page: React.ReactElement) => {
  return { page };
};
