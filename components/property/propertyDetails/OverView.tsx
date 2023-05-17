import React from "react";

// icons
import { BuildingOffice2Icon } from "@heroicons/react/20/solid";
import { VscCompass } from "react-icons/vsc";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiCar } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Compass } from "../../SVGComponents/property/Compass";
import { Table } from "../../SVGComponents/property/Table";
import { Police } from "../../SVGComponents/property/Police";
import { Jar } from "../../SVGComponents/property/Jar";
import { WaterDrop } from "../../SVGComponents/property/WaterDrop";
import { FaUserGraduate } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { BsTag } from "react-icons/bs";

const OverView = ({ property }: any) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[new Date(property?.createdAt).getMonth()];

  return (
    <div id="overview">
      <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
        Overview
      </p>

      <div className="w-full mt-10 grid base:grid-cols-2 grid-cols-1 xl:gap-10 gap-5">
        <div className="grid grid-cols-12 gap-y-4">
          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Property Type
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm text-start capitalize">
            {property?.propertyType}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <Police width="2rem" height="2rem" color="#FDB813" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Gated Security
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {!property?.gatedCommunity ? "No" : "Yes"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Area
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {property?.carpetArea || property?.sba} sq.ft
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Configuration
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">{`${
            property?.configuration[0]
          } ${property?.configuration.substring(1)}`}</p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              No. Of Bathrooms
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {property?.noOfBathrooms ? property?.noOfBathrooms : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Balcony
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {property?.balcony ? "Yes" : "No"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <AiOutlineCalendar className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Construction Status
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.constructionStatus
              ? (property?.constructionStatus).toLowerCase() === "rtmi"
                ? "RTMI"
                : property?.constructionStatus
              : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <Compass width="2rem" height="2rem" color="#FDB813" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline">
              Direction Facing
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.directionFacing}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <AiOutlineCalendar className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Available From Date
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.availableFrom}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <Table width="2rem" height="2rem" color="#FDB813" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Furnishing type
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.furnishingType ? property?.furnishingType : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Property Age
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.propertyAge ? property?.propertyAge : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <WaterDrop width="2rem" height="2rem" color="#FDB813" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Water Supply
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {!property?.waterSupply ? "N/A" : property?.waterSupply}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Tower/Wing Name
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.towerWing ? property?.towerWing : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Unit No./Unit Name
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.unitName ? property?.unitName : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Floor
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.floor ? property?.floor : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Total no. of Floors
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.totalFloor ? property?.totalFloor : "N/A"}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-4">
          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <AiOutlineCalendar className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Posted on Date
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.postedOn ? property?.postedOn : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <BiCar className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Parking
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {!property?.parking ? "No" : "Yes"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <BiCar className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Parking Type
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {!property?.parkingType ? "N/A" : property?.parkingType}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <BiCar className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Visitor Parking
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {!property?.visitorParking ? "No" : "Yes"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Tenancy Status
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.tenancyStatus}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Tenancy Exit Status
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.tenancyExitStatus ? "Yes" : "No"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Tenant Type
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.tenantType ? property?.tenantType : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Project Name
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.projectName ? property?.projectName : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <FaUserGraduate className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Developer Name
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm capitalize">
            {property?.builderName ? property?.builderName : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <Jar width="2rem" height="2rem" color="#FDB813" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Non-Veg Allowed
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {!property?.nonVegAllowed ? "No" : "Yes"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <MdPets className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Pets Allowed
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {property?.petsAllowed ? "Yes" : "No"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <BsTag className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Price Negotiation
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {property?.priceNegotiaton ? "Negotiable" : "Not negotiable"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <BsTag className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Expected Price
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm">
            {property?.expectedPrice1
              ? property?.expectedPrice1
              : property?.expectedPrice2
              ? property?.expectedPrice2
              : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              RERA No.
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm break-all capitalize">
            {property?.reraNo && property?.reraNo !== ""
              ? property?.reraNo
              : "N/A"}
          </p>

          <div className="col-span-8 flex gap-4 items-start">
            <span>
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
            </span>
            <span className="font-semibold xxs:text-lg text-sm inline ">
              Property Limits
            </span>
          </div>
          <p className="col-span-4 xxs:text-lg text-sm uppercase">
            {property?.propertyLimits || "N/A"}
          </p>
        </div>
        <div className="bg-star_bg bg-contain bg-no-repeat w-[50%] h-[150px] absolute z-[1] right-0 mt-64"></div>
      </div>

      {/* <div className="mt-10 grid base:grid-cols-12 grid-cols-6 xl:gap-20 gap-5">
        <div className="col-span-6 space-y-4 ">
          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Property Type
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.propertyType}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <Police width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Gated Security
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {!property?.gatedCommunity ? "No" : "Yes"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Area
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {property?.carpetArea || property?.sba} sq.ft
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Configuration
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">{`${
              property?.configuration[0]
            } ${property?.configuration.substring(1)}`}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                No. Of Bathrooms
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {property?.noOfBathrooms ? property?.noOfBathrooms : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Balcony
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {property?.balcony ? "Yes" : "No"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <AiOutlineCalendar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Construction Status
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.constructionStatus
                ? (property?.constructionStatus).toLowerCase() === "rtmi"
                  ? "RTMI"
                  : property?.constructionStatus
                : "N/A"}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <Compass width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline">
                Direction Facing
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.directionFacing}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <AiOutlineCalendar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Available From Date
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.availableFrom}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <Table width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Furnishing type
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.furnishingType ? property?.furnishingType : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Property Age
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.propertyAge ? property?.propertyAge : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <WaterDrop width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Water Supply
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {!property?.waterSupply ? "N/A" : property?.waterSupply}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Tower/Wing Name
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.towerWing ? property?.towerWing : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Unit No./Unit Name
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.unitName ? property?.unitName : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Floor
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.floor ? property?.floor : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Total no. of Floors
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.totalFloor ? property?.totalFloor : "N/A"}
            </p>
          </div>
        </div>
        
        <div className="col-span-6  space-y-4 ">
          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <AiOutlineCalendar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Posted on Date
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.postedOn ? property?.postedOn : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <BiCar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Parking
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {!property?.parking ? "No" : "Yes"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <BiCar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Parking Type
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {!property?.parkingType ? "N/A" : property?.parkingType}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <BiCar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Visitor Parking
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {!property?.visitorParking ? "No" : "Yes"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Tenancy Status
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.tenancyStatus}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Tenancy Exit Status
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.tenancyExitStatus ? "Yes" : "No"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Tenant Type
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.tenantType ? property?.tenantType : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Project Name
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.projectName ? property?.projectName : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <FaUserGraduate className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Developer Name
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.builderName ? property?.builderName : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <Jar width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Non-Veg Allowed
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {!property?.nonVegAllowed ? "No" : "Yes"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <MdPets className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Pets Allowed
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {property?.petsAllowed ? "Yes" : "No"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <BsTag className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Price Negotiation
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {property?.priceNegotiaton ? "Negotiable" : "Not negotiable"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <BsTag className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Expected Price
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {property?.expectedPrice1 ? property?.expectedPrice1 : property?.expectedPrice2 ? property?.expectedPrice2 : "N/A"}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                RERA No.
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm capitalize">
              {property?.reraNo && property?.reraNo !== "" ? property?.reraNo : "N/A"}
            </p>
          </div>
          
          <div className="flex justify-between  items-center ">
            <div className="col-span-8 flex gap-4 items-start">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Property Limits
              </span>
            </div>
            <p className="col-span-4 xxs:text-lg text-sm">
              {property?.propertyLimits || "N/A"}
            </p>
          </div>
        </div>
        <div className="bg-star_bg bg-contain bg-no-repeat w-[50%] h-[150px] absolute z-[1] right-0 mt-64"></div>
      </div> */}
    </div>
  );
};
export default OverView;
