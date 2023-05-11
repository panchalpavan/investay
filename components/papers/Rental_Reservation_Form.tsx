import React, { useRef, useState } from "react";
import { ArrowLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import html2pdf from "html2pdf.js";
const Rental_Reservation_Form = () => {
  const router = useRouter();
  const input = useRef(null);
  const [margin, setMargin] = useState(false);
  const [wallet, setWallet] = useState([
    {
      id: 1,
      wallet_type: "Cheque/Draft",
      include: false,
    },
    {
      id: 2,
      wallet_type: "Card Payment",
      include: false,
    },
    {
      id: 3,
      wallet_type: "Razorpay",
      include: false,
    },
    {
      id: 4,
      wallet_type: "RTGS/NEFT",
      include: false,
    },
  ]);

  const [property, setProperty] = useState([
    {
      id: 1,
      property_type: "Apartment/Flat",
      include: false,
    },
    {
      id: 2,
      property_type: "Plot",
      include: false,
    },
    {
      id: 3,
      property_type: "Villa",
      include: false,
    },
    {
      id: 4,
      property_type: "Banglow",
      include: false,
    },
    {
      id: 5,
      property_type: "Independent House",
      include: false,
    },
  ]);

  const [covered, setCovered] = useState(false);
  const [nonCovered, setNonCovered] = useState(false);
  const [furnshied, setFurnshied] = useState(false);
  const [semiFrunshied, setSemiFrunshied] = useState(false);
  const [nonFurnshied, setNonFurnshied] = useState(false);

  const handleWalletCheck = (id: any) => {
    setWallet(
      wallet.map((item) =>
        item.id === id
          ? { ...item, include: !item.include }
          : { ...item, include: false }
      )
    );
  };
  const handlePropertyCheck = (id: any) => {
    setProperty(
      property.map((item) =>
        item.id === id
          ? { ...item, include: !item.include }
          : { ...item, include: false }
      )
    );
  };

  return (
    <div>
      <div className="px-6 mt-5 flex relative">
        <ArrowLeftIcon
          className="h-10 w-10 text-black cursor-pointer"
          onClick={() => router.back()}
        />
        <Link
          href="/assets/forms/Rental-Reservation-Form.pdf"
          target={"_blank"}
          download={true}
        >
          <PrinterIcon
            //   onClick={() => printRegistrationForm()}
            className="h-7 w-7 text-black absolute right-10 sm:right-16 lg:right-20  -bottom-[2rem] cursor-pointer"
          />
        </Link>
      </div>

      <div ref={input} className="px-10 md:px-16 lg:px-20">
        <p className="text-base  border-b-2 border-black pb-6">
          Reservation Form - Rental
        </p>
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex flex-col mt-4">
            <p className="text-base">
              <span className="font-bold">Investay Realty Services LLP -</span>
              Real Estate Returns Maximized
            </p>
            <p className="text-base font-bold">Century Sales galleria</p>
            <p className="mt-1 text-sm">
              opposite Sahakar Nagar Cross, Hebbal, Banglore- 560092
            </p>
            <p className="mt-1 text-sm">
              T. +91 8044334464 www.investayrealty.com
            </p>
            <p className="ml-auto mr-20 my-10 uppercase text-lg font-bold">
              reservation form - rental
            </p>
            <div className="flex items-center">
              <p className="text-base">Project Name:</p>
              <p className="text-base ml-auto mr-20">Date of Booking:</p>
            </div>
            <p className="mt-2 uppercase text-base font-semibold">
              applicant details:
            </p>
            <p className="my-4 text-sm font-light">
              Title: Mr/Mrs/Ms/Dr/Prof/Master
            </p>
          </div>
          <div className="col-span-1 ml-auto mr-20 mt-20 ">
            <div className="border border-black h-44 w-44">&nbsp;</div>
            {/* <label htmlFor="inputTag" className='border text-sm border-black cursor-pointer p-12'>
  Select Image
  <input id="inputTag" type="file" className='hidden'/>
</label> */}
          </div>
        </div>
        <div className="border border-black grid grid-cols-4">
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Applicant Name</p>
          </div>
          <div className="border-r border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-r border-b border-black p-2 ">
            <p className="font-light text-sm">Date of Birth</p>
            <p className="font-light text-sm">(dd/mm/yyyy)</p>
          </div>
          <div className="border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Co - Applicant Name</p>
          </div>
          <div className="border-r border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">E-Mail ID</p>
          </div>
          <div className="border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Address</p>
          </div>
          <div className="border-r border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black ">
            <p className="font-light text-sm border-b border-black p-1 h-1/2">
              Mobile No.
            </p>
            <p className="font-light text-sm  p-1 h-1/2">
              Alternate Mobile No.
            </p>
          </div>
          <div className="border-b border-black">
            <div className="font-light text-lg border-b border-black p-1">
              <input
                type="text"
                className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
              />
            </div>
            <div className="font-light text-lg border-b p-1">
              <input
                type="text"
                className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
              />
            </div>
          </div>
          <div className="border-b border-r border-black">
            <p className="h-1/2 font-light text-sm border-b border-black py-1 pl-2">
              City
            </p>
            <p className=" h-1/2  font-light text-sm py-1 pl-2">State</p>
          </div>
          <div className="border-b border-r border-black ">
            {/* <div className="border-b border-r border-black "> */}
            <div className="h-1/2  w-full border-b border-black">
              <input
                type="text"
                className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
              />
            </div>
            <div className="h-1/2 w-full">
              <input
                type="text"
                className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
              />
            </div>
          </div>
          <div className="border-b border-r border-black">
            <p className="font-light text-sm border-b border-black p-1">
              Gender
            </p>
            <p className="font-light text-sm border-b p-1">Marital Status</p>
          </div>
          <div className="border-b  border-black">
            <div className=" border-b border-black p-1 flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border border-black ml-2 accent-black"
              />
              <p className="font-light text-sm ml-2">Male</p>
              <input
                type="checkbox"
                className="h-5 w-5 border border-black ml-2 accent-black"
              />
              <p className="font-light text-sm ml-2">Female</p>
            </div>
            <div className=" p-1 flex items-center">
              <input
                type="checkbox"
                className="h-5 w-5 border border-black ml-2 accent-black"
              />
              <p className="font-light text-sm ml-2">Single</p>
              <input
                type="checkbox"
                className="h-5 w-5 border border-black ml-2 accent-black"
              />
              <p className="font-light text-sm ml-2">Married</p>
            </div>
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Country</p>
          </div>
          <div className="border-r border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Nationality</p>
          </div>
          <div className=" border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Pincode</p>
          </div>
          <div className="border-r border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Aadhar No</p>
          </div>
          <div className=" border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Company</p>
          </div>
          <div className="border-r border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Name as in PAN</p>
          </div>
          <div className=" border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className=" border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Designation</p>
          </div>
          <div className="border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className=" border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Pan No.</p>
          </div>
          <div className=" border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
        </div>
        {/* <div className="html2pdf__page-break"></div> */}
        <p className="text-base font-semibold uppercase mt-6">
          payment details
        </p>
        <div className="flex items-center my-4">
          {wallet.map((wal, key) => {
            return (
              <div className="flex mr-6" key={key}>
                <p
                  onClick={() => handleWalletCheck(wal.id)}
                  key={key}
                  className="text-sm font-light  cursor-pointer"
                >{`${wal.wallet_type}`}</p>
                {wal.include ? (
                  <span
                    onClick={() => handleWalletCheck(wal.id)}
                    className="text-sm font-light cursor-pointer"
                  >
                    (&#10003;)
                  </span>
                ) : (
                  <span
                    onClick={() => handleWalletCheck(wal.id)}
                    className="text-sm font-light px-[0.10rem] cursor-pointer"
                  >
                    (&nbsp;&nbsp;&nbsp;)
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-4 border border-black mt-1">
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Cheque No/ Transaction ID</p>
          </div>
          <div className="border-b border-r  border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Amount</p>
          </div>
          <div className="border-b border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className=" border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Date of Payment</p>
          </div>
          <div className="border-r  border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className=" border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Bank Name</p>
          </div>
          <div className=" border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
        </div>
        <div className="html2pdf__page-break"></div>
        <p className="text-base font-light my-2">Post Dated Cheque:</p>
        <div className="grid grid-cols-4 border border-black mt-1">
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Cheque No/ Transaction ID</p>
          </div>
          <div className="border-b border-r  border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Amount</p>
          </div>
          <div className="border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className=" border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Date of Payment</p>
          </div>
          <div className="border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className=" border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Bank Name</p>
          </div>
          <div className=" border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
        </div>
        <p className="text-base font-semibold uppercase mt-6">
          property details
        </p>
        <div className="flex items-center my-4">
          {property.map((pro, key) => {
            return (
              <div
                key={key}
                onClick={() => handlePropertyCheck(pro.id)}
                className="flex mr-6 cursor-pointer"
              >
                <p className="text-sm font-light">{pro.property_type}</p>
                {pro.include ? (
                  <span className="text-sm font-light cursor-pointer">
                    (&#10003;)
                  </span>
                ) : (
                  <span className="text-sm font-light px-[0.10rem] cursor-pointer">
                    (&nbsp;&nbsp;&nbsp;)
                  </span>
                )}
              </div>
            );
          })}
          {/* <p className="text-sm font-light mr-6">
            Apartment/Flat(&nbsp;&nbsp;)
          </p>
          <p className="text-sm font-light mr-6">Plot(&nbsp;&nbsp;)</p>
          <p className="text-sm font-light mr-6">Villa(&nbsp;&nbsp;)</p>
          <p className="text-sm font-light mr-6">Banglow(&nbsp;&nbsp;)</p>
          <p className="text-sm font-light">Independent House(&nbsp;&nbsp;)</p> */}
        </div>
        <div className="grid grid-cols-4 border border-black mt-1">
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Location</p>
          </div>
          <div className="border-b border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Floor</p>
          </div>
          <div className="border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Project Name</p>
          </div>
          <div className="border-b border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Door Facing</p>
          </div>
          <div className="border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Unit No.</p>
          </div>
          <div className="border-b border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">No. of Car Park</p>
          </div>
          <div className="border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Block</p>
          </div>
          <div className="border-b border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Car Park Type</p>
          </div>
          <div className="border-b border-black flex flex-col items-center">
            <div
              onClick={() => {
                setCovered(!covered);
                setNonCovered(false);
              }}
              className="flex font-light text-sm cursor-pointer"
            >
              <p>Covered</p>
              {covered ? <p>(&#10003;)</p> : <p>(&nbsp;&nbsp;)</p>}
            </div>
            <div
              onClick={() => {
                setNonCovered(!nonCovered);
                setCovered(false);
              }}
              className="flex font-light text-sm cursor-pointer mt-2"
            >
              <p>Non-Covered</p>
              {nonCovered ? <p>(&#10003;)</p> : <p>(&nbsp;&nbsp;)</p>}
            </div>
            {/* <p className="font-light text-sm ml-2">Non-Covered(&nbsp;&nbsp;)</p> */}
          </div>
          <div className="border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">SBA Area (in Sq. Ft.)</p>
          </div>
          <div className="border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className=" border-r border-black p-2 flex items-center">
            <p className="font-light text-sm">Carpet Area(In Sq. Ft.)</p>
          </div>
          <div>
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="col-span-1 border-t border-b border-r border-black p-2">
            <p className="text-base font-light">Interior</p>
          </div>
          <div className="col-span-3 border-t border-b border-black flex items-center justify-around">
            <div
              onClick={() => {
                setFurnshied(!furnshied);
                setSemiFrunshied(false);
                setNonFurnshied(false);
              }}
              className="flex font-light text-sm cursor-pointer"
            >
              <p>Furnshied</p>
              {furnshied ? <p>(&#10003;)</p> : <p>(&nbsp;&nbsp;)</p>}
            </div>
            <div
              onClick={() => {
                setFurnshied(false);
                setSemiFrunshied(!semiFrunshied);
                setNonFurnshied(false);
              }}
              className="flex font-light text-sm cursor-pointer"
            >
              <p>Semi-Furnished</p>
              {semiFrunshied ? <p>(&#10003;)</p> : <p>(&nbsp;&nbsp;)</p>}
            </div>
            <div
              onClick={() => {
                setFurnshied(false);
                setSemiFrunshied(false);
                setNonFurnshied(!nonFurnshied);
              }}
              className="flex font-light text-sm cursor-pointer"
            >
              <p>Non-Furnished</p>
              {nonFurnshied ? <p>(&#10003;)</p> : <p>(&nbsp;&nbsp;)</p>}
            </div>
          </div>
          <div className="col-span-2 border-r border-b border-black flex justify-between items-center">
            <p className="h-[100%] w-[50%] p-2 text-sm font-light border-r border-black flex justify-start items-center">
              Deposit Amount (in INR)
            </p>
            <input
              type="text"
              className="w-[50%] h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="col-span-2 border-b border-black flex justify-between items-center">
            <p className="h-full w-[50%] p-2 flex justify-start items-center border-r border-black text-sm font-light">
              Advanced Deposit for(months)
            </p>
            <input
              type="text"
              className="w-[50%] h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="col-span-1 border-b border-r border-black p-2">
            <p className="text-sm font-light">Rent- Monthly(in INR)</p>
          </div>
          <div className="col-span-3 border-b border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="col-span-1 border-r border-black p-2">
            <p className="text-sm font-light">Cheque In Favour Of</p>
          </div>
          <div className="col-span-3 ">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
        </div>
        {/* <div className="html2pdf__page-break"></div> */}
        <p className="mt-6 uppercase text-base font-semibold">
          owner/seller details:
        </p>
        <p className="my-4 text-sm font-light">
          Title: Mr/Mrs/Ms/Dr/Prof/Master
        </p>

        <div className="grid grid-cols-4 border border-black">
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">First Name</p>
          </div>
          <div className="border-b border-r  border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">Email ID</p>
          </div>
          <div className="border-b border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">Middle Name</p>
          </div>
          <div className="border-b border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">Mobile No.</p>
          </div>
          <div className="border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">last Name</p>
          </div>
          <div className="border-b border-r  border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className=" border-r border-b border-black ">
            <p className="font-light   p-2 text-sm">Alternate Mobile No.</p>
          </div>
          <div className="border-b border-black">
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">Address</p>
          </div>
          <div className="border-b border-r  border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">Pin Code</p>
          </div>
          <div className="border-b border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">City/Town</p>
          </div>
          <div className="border-b border-r  border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-b border-r border-black p-2">
            <p className="font-light text-sm">State</p>
          </div>
          <div className="border-b border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-r border-black p-2">
            <p className="font-light text-sm">District</p>
          </div>
          <div className="border-r  border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
          <div className="border-r border-black p-2">
            <p className="font-light text-sm">Country</p>
          </div>
          <div className=" border-black">
            {" "}
            <input
              type="text"
              className="w-full h-full px-2 border-none focus:outline-none outline-none font-light text-sm"
            />
          </div>
        </div>
        <div className="html2pdf__page-break"></div>
        <p className="mt-6 uppercase text-base font-semibold">
          source declaration
        </p>
        <p className="mt-2 text-sm font-light">
          I hereby confirm that I introduced to project through the following
          who helped in purchase of unit of my expressed in this reservation
          form.
        </p>
        <div className="flex items-center mt-24">
          <div className="border-t border-black pt-2 w-[20rem]">
            <p className="text-base font-light text-center">
              Sourcing Partner Name
            </p>
          </div>
          <div className="border-t border-black pt-2 w-[20rem] ml-auto">
            <p className="text-base font-light text-center">
              Sourcing Manager Name
            </p>
          </div>
        </div>
        <div className="border-t border-black pt-2 w-[20rem] mt-24">
          <p className="text-base font-light text-center">
            Applicant Signature
          </p>
        </div>
        <div className="border-t border-black pt-2 w-[20rem] mt-24">
          <p className="text-base font-light text-center">
            Co-Applicant Signature
          </p>
        </div>
        {/* <div className="html2pdf__page-break"></div> */}
        <p className={`text-base font-semibold mt-20`}>Terms & Conditions:</p>
        <div className="flex text-xs mt-2">
          <p>1.</p>
          <p className="ml-1">
            The Applicant has filled this form requesting for allotment of unit
            on behalf of Investay Realty Services LLP.
          </p>
        </div>
        <div className="flex text-xs mt-2">
          <p>2.</p>
          <p className="ml-1">
            The applicant has been informed that the booking is executed on the
            basis of resale/rental/leasing process by Investay - a division of
            Century Real Estate Holdings Pvt. Ltd.
          </p>
        </div>
        <div className="flex text-xs mt-2">
          <p>3.</p>
          <p className="ml-1">
            Rent shall be fixed by the Owner, rent agreement must be uploaded on
            the government portal.
          </p>
        </div>
        <div className="flex text-xs  mt-2">
          <p>4.</p>
          <p className="ml-1">
            The applicant(s) agrees to execute the rental agreement as per the
            standard format under Modern: Tenancy Act and also ensures to submit
            the same to tenant in 25 days from the Reservation date.
          </p>
        </div>
        <div className="flex text-xs  mt-2">
          <p>5.</p>
          <p className="ml-1">
            In case the applicant(s) fails to make due payments and submit the
            duly signed agreement for sale within the prescribed duration (or
            any extended period), Owner/INVESTAY, at its sole discretion, shall
            cancel the booking/allotment and forfeit the booking amount.
          </p>
        </div>
        <div className="flex text-xs  mt-2">
          <p>6.</p>
          <p className="ml-1">
            After intimating the cancellation, INVESTAY is entitled to re-sell
            the unit/property to any other applicant(s).
          </p>
        </div>
        <div className="flex text-xs  mt-2">
          <p>7.</p>
          <p className="ml-1">
            This reservation/application will be processed by Investay on behalf
            of the buyer to the company/ owner of the property.
          </p>
        </div>
        <div className="flex text-xs  mt-2">
          <p>8.</p>
          <p className="ml-1">
            This reservation / application is tentative subject to acceptance by
            property owner/company through a allotment letter and a receipt
            passed for booking.
          </p>
        </div>
        <div className="html2pdf__page-break"></div>
        <div className="flex text-xs  mt-2">
          <p>9.</p>
          <p className="ml-1">
            In case of any disputes arising b/w the parties in respect of this
            form, the jurisdiction for all such disputes shall be Bangalore
            city.
          </p>
        </div>
        <div className="flex text-xs  mt-2">
          <p>10.</p>
          <p className="ml-1">
            Investay has no control on all the developments that may exist or
            take place in future whatsoever, in the adjoining property of the
            project.
          </p>
        </div>
        {/* <div className="html2pdf__page-break"></div> */}
        <div className="flex text-xs  mt-2">
          <p>11.</p>
          <p className="ml-1">
            Self-attested proof of address, Aadhar card copy, Pan card copy and
            passport size photo to be! attached with this form.
          </p>
        </div>
        <div className="flex text-xs  mt-2">
          <p>12.</p>
          <p className="ml-1">
            In case the applicant(s) is not satisfied with any issues till the
            signing of the agreement the matter may be raised at
            enquiry@investayrealty.com
          </p>
        </div>

        <p className="mt-1 text-xs">
          For Home Loan assistance, reach us at +9180 4433 4464 or email to
          enquiry@investayrealty.com
        </p>

        <p className="mt-4 text-sm">Date:</p>
        <p className="mt-2 text-sm">Place:</p>
        <p className="mt-4 text-sm">Applicant Signature(S):</p>
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
  );
};
export default Rental_Reservation_Form;
