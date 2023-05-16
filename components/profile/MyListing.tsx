import React, { useEffect } from "react";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { RightArrow } from "../SVGComponents/RightArrow";
import { useRouter } from "next/router";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import noImg from "../../public/assets/images/noImg1.svg";

import { GrEdit } from "react-icons/gr";
import validatePrice from "../../utilities/validatePrice";
import Image from "next/image";
import S3 from "aws-sdk/clients/s3";
import { Buffer } from 'buffer';

const MyListing = ({ listings }: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [imageUrls, setImageUrls] = useState([]);

  const s3 = new S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESSKEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRETKEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    signatureVersion: 'v4'
  });

    const getImageUrl = async (gallery: any) => {

      console.log(gallery)
      if (gallery) {
        const src = await downloadFromS3(gallery?.property?.floor_plan);
        return src || "";
      } else {
        return "";
      }
    };

  if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {

      useEffect(() => {
          const downloadImages = async () => {
            const promises = listings.map(async (property: any) => {
              const url = await getImageUrl(property?.gallery);
              return url;
            });
            const urls = await Promise.all(promises);
            setImageUrls(urls);
          };
          downloadImages();
        }, [listings]);
  }

  async function downloadFromS3(attachmentId: any) {
    console.log(attachmentId);
    console.log(process.env.NEXT_PUBLIC_AWS_BUCKETNAME);
    const s3Params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME || "",
      Key: attachmentId,
    };

    try {
      const file = await s3.getObject(s3Params).promise();
      const dataURI = `data:image/png;base64,${Buffer.from(file.Body).toString('base64')}`;
      console.log(dataURI);
      return dataURI;
    } catch (error) {
      return null;
    }
  }

  return (
    <div id="my-listing">
      <Disclosure as={"div"} defaultOpen={true} className="w-full">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">My Listings</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel className="mb-5">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md_link:grid-cols-3 2xl:grid-cols-3 gap-2 sm:gap-4">
                {listings?.map((property: any, index: any) => {
                  const price = property?.bookingPricing.expectedPrice1
                    ? validatePrice(property?.bookingPricing.expectedPrice1)
                    : property?.bookingPricing.monthlyRental
                    ? validatePrice(property?.bookingPricing.monthlyRental)
                    : "N/A";
                  return (
                    <div
                      key={property?._id}
                      className="w-full h-full shadow-md flex flex-col rounded-lg overflow-hidden"
                    >
                      <div className="h-48 xxs:h-[15.2rem] w-full relative overflow-hidden">
                        <p
                          className={`${
                            property?.status === "published"
                              ? "bg-greenBg"
                              : "bg-red-600"
                          } text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center capitalize`}
                        >
                          {property?.status}
                        </p>

                        <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
                          {process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? (
                              <>
                              {property?.gallery[0]?.filename ? (
                                  <img src={"/uploads/" + property?.gallery[0]?.filename}  alt="Property Image" className="h-full w-full object-fit" />
                              ) : (
                                  <img src={"/assets/images/noimageicon.png"}  alt="No Image" className="h-full w-full object-fit" />
                                  
                              )}
                              </>
                            ) : (
                              <>
                                  <img src={imageUrls[index]}  alt="No Image" className="h-full w-full object-fit" />
                              </>
                            )}
                        </div>
                      </div>

                      <div className=" mt-1 xxs:mt-4 mb-8">
                        <div className="px-2 lg1:px-4 capitalize">
                          <p className="text-xl font-semibold  tracking-wide cap">
                            {property?.projectName}
                          </p>
                          <p className="font-normal text-xs ">
                            {property?.propertyAddress}
                          </p>
                          <p className="text-xl font-semibold text-primaryColor mt-1">
                            ₹{price}
                            {property?.bookingPricing.maintenanceCharges2 && (
                              <span className="text-sm">
                                +{" "}
                                {property.bookingPricing.maintenanceCharges2 /
                                  1000}{" "}
                                K Maintaince Monthly
                              </span>
                            )}
                          </p>
                        </div>

                        <div className="px-2 lg1:px-4 mt-2 flex items-start justify-between">
                          <div className="flex gap-x-4">
                            <div className="space-y-2">
                              <p className="text-xs font-semibold">
                                Project Name
                              </p>
                              <p className="text-xs font-semibold">
                                Direction Facing
                              </p>
                              <p className="text-xs font-semibold">
                                Property Type
                              </p>
                              <p className="text-xs font-semibold">
                                Construction Status
                              </p>
                              <p className="text-xs font-semibold">
                                Tenancy Status
                              </p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-xs font-normal capitalize">
                                {property?.projectName}
                              </p>
                              <p className="text-xs font-normal capitalize">
                                {property?.directionFacing}
                              </p>
                              <p className="text-xs font-normal capitalize">
                                {property?.propertyType}
                              </p>
                              <p className="text-xs font-normal capitalize">
                                {(property?.constructionStatus)?.toLowerCase() ===
                                "rtmi"
                                  ? "RTMI"
                                  : property?.constructionStatus}
                              </p>
                              <p className="text-xs font-normal capitalize">
                                {property?.tenancyStatus
                                  ? property?.tenancyStatus
                                  : "N/A"}
                              </p>
                            </div>
                          </div>

                          <div className="col-span-6 gap-2 flex flex-col ">
                            <div className="flex justify-between items-center">
                              <p className=" text-xs font-semibold">Area</p>
                              <p className=" text-xs">
                                {property?.carpetArea
                                  ? `${property?.carpetArea} sq.ft`
                                  : property?.sba
                                  ? `${property?.sba} sq.ft`
                                  : "N/A"}
                              </p>
                            </div>
                            <div className="flex justify-between items-center ">
                              <p className=" text-xs font-semibold">
                                Furnishing
                              </p>
                              <p className=" text-xs ml-4 capitalize">
                                {property?.furnishingType
                                  ? property?.furnishingType
                                  : "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto w-full flex justify-end">
                        <button
                          onClick={() =>
                            router.push(`/property/${property?._id}`)
                          }
                          className="bg-primaryColor rounded-b-lg rounded-l-lg text-black text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex items-center justify-center"
                        >
                          Details
                          <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}

                <div
                  onClick={() => {
                    router.push("/profile/seller-owner/details");
                  }}
                  className=" my-10 flex justify-center cursor-pointer items-center flex-col"
                >
                  <PlusIcon className="w-8 h-8  " />
                  <p className="text-center">Add New Property</p>
                </div>

              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MyListing;
