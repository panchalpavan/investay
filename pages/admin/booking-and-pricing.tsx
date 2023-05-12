import { Disclosure, Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { Calendar } from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import {
  agreement_Status,
  ecs,
  existingLoans,
  khatas,
  mortgaged_,
  priceNegotiatons,
  propertyTaxes,
  registrations,
  salesDeeds,
} from "../../utilities/postProperty";
import { useRouter } from "next/router";
import { FiChevronDown } from "react-icons/fi";
import LoadingSpinner from "../../components/LoadingSpinner";
import { toast } from "react-toastify";
import { setLocations, setProperty, set_getProperties } from "../../redux/property/propertyReducer";
import { addProperty } from "../../action-creators/properties/addProperty";
import axios from "axios";
import { AiOutlineConsoleSql } from "react-icons/ai";

const BookingPricing = () => {
  const url =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
    : process.env.NEXT_PUBLIC_DATA_API_URL;

  const router = useRouter();
  const dispatch = useDispatch();
  const { property } = useSelector((state: any) => {
    return state.getPropertiesData;
  });
  const [dateOfBooking, setDateOfBooking] = useState(new Date());
  const [dob, setDob] = useState(false);

  const [bookingPricing, setBookingPricing] = useState({
    leaseDuration: 1,
    dateOfBooking: dateOfBooking.toDateString(),
    agreementStatus: agreement_Status[0].value,
    registration: registrations[0].value,
    salesDeed: salesDeeds[0].value,
    khata: khatas[0].value,
    ec: ecs[0].value,
    propertyTax: propertyTaxes[0].value,
    registrarOffice: "",
    expectedPrice1: "",
    negotiatedPrice1: "",
    closedPrice1: "",
    expectedPrice2: "",
    negotiatedPrice2: "",
    closedPrice2: "",
    deposit: "",
    maintenanceCharges1: "",
    maintenanceCharges2: "",
    monthlyRental: "",
    priceNegotiation: priceNegotiatons[0].value,
    leaseAmount: "",
    mortgaged: mortgaged_[0].value,
    lenderName: "",
    bankerName: "",
    existingLoan: existingLoans[0].value,
    outstandingLoan: 1,
    totalLoan: 1,
    interestRate: 1,
  });

  const [loading, setLoading] = useState(false);

  const handleBookingChange = (e: any) => {
    const { name, value } = e.target;
    setBookingPricing({ ...bookingPricing, [name]: value });
  };

  const uploadToS3 = async (file: any) => {
    console.log(file)

    // @ts-ignore
    const fileType = encodeURIComponent(file.type);

    const { data } = await axios.get(`${url}/api/aws_file_upload?fileType=${fileType}`);
    const { uploadUrl, key } = data;
    await axios.put(uploadUrl, file)
    .then((req) => {
      console.log('AWS SUCCESS', req)
    })
    .catch((err) => {
      console.log('AWS ERR', err)
    });
    return key;
  }

  async function uploadToS3AndAppendToFormData(data: any, formData: any) {
    if (data.onlineRegistrationForm) {
      const awskey = await uploadToS3(data.onlineRegistrationForm)
      formData.append("onlineRegistrationForm", awskey)
    }
    if (data.resaleForm) {
      const awskey = await uploadToS3(data.resaleForm)
      formData.append("resaleForm", awskey)
    }
    if (data.rentalForm) {
      const awskey = await uploadToS3(data.rentalForm)
      formData.append("rentalForm", awskey)
    }
    if (data.rentalAgreement) {
      const awskey = await uploadToS3(data.rentalAgreement)
      formData.append("rentalAgreement", awskey)
    }
    if (data.propertyInspectionReport) {
      const awskey = await uploadToS3(data.propertyInspectionReport)
      formData.append("propertyInspectionReport", awskey)
    }
    if (data.mou) {
      const awskey = await uploadToS3(data.mou)
      formData.append("mou", awskey)
    }
  }

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imgs: any = []

      console.log("PROPERTY", property)
      const data = { ...property, bookingPricing };
      console.log(data)
      const formData = new FormData();

      if (data.gallery) {
        if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
          data?.gallery.map(async (img: any) => {
            formData.append("gallery", img)
          })
        } else if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
          await Promise.all(
            data?.gallery.map(async (img: any) => {
              const key = await uploadToS3(img)
              console.log("KEY", key)
              if (key) imgs.push(key)
            })
          )
          formData.append("gallery", imgs)
        }
      }
      if (data.documents) {
        if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
          for (const [subKey, subValue] of Object.entries(data.documents)) {
            if (subValue) {
                // @ts-ignore
                formData.append(`${subKey}`, subValue);
            }
          }
        } else if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
          await uploadToS3AndAppendToFormData(data.documents, formData)
        }
      } 
      Object.keys(data).map(async (key) => {
        // console.log(key, data[key])
        if (typeof data[key] === "object" && key !== "gallery" && key !== "documents") {
          // console.log(typeof data["amenities"]);
          formData.append(key,JSON.stringify( data[key]))
        } else {
          formData.append(key, data[key])
        }
      })
      // @ts-ignore
      for (let pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]); 
      }

      const response = await addProperty(formData);
      if (response.success) {
        setLoading(false);
        if (!loading) {
          dispatch(set_getProperties(response.properties));
          dispatch(setLocations(response.locations));
          router.push("/admin/listings");
          dispatch(setProperty(null));
          toast.success("Property posted successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (error: any) {
      console.log("error: ", error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start">
      {loading && <LoadingSpinner />}
      <Disclosure as={"div"} className="w-full" defaultOpen={true} id="personal-info">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Booking & Pricing Information</p>
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <p className="text-lg font-semibold  block col-span-12">
                  Booking Info
                </p>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Lease Duration (In months)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="leaseDuration"
                      value={bookingPricing.leaseDuration}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="relative md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Date of Booking
                  </p>
                  <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                    <div
                      onClick={() => setDob(!dob)}
                      className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2"
                    >
                      <span className="text-base  text-secondaryLightColor">
                        {bookingPricing.dateOfBooking}
                      </span>
                      <span>
                        <CiCalendar className=" h-5 w-5 " />
                      </span>
                    </div>
                  </div>
                  {dob && (
                    <div className="absolute z-[22]">
                      <Calendar
                        onChange={(e: any) => {
                          setDateOfBooking(new Date(e));
                          setBookingPricing({
                            ...bookingPricing,
                            dateOfBooking: new Date(e).toDateString(),
                          });
                          setDob(!dob);
                        }}
                        value={dateOfBooking}
                      />
                    </div>
                  )}
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Sales Agreement Status
                  </p>
                  <Listbox
                    value={bookingPricing.agreementStatus}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        agreementStatus: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            agreement_Status.find(
                              (item: any) =>
                                item.value === bookingPricing.agreementStatus
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {agreement_Status.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Registration
                  </p>
                  <Listbox
                    value={bookingPricing.registration}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        registration: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            registrations.find(
                              (item: any) =>
                                item.value === bookingPricing.registration
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {registrations.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Sales Deed
                  </p>
                  <Listbox
                    value={bookingPricing.salesDeed}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        salesDeed: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            salesDeeds.find(
                              (item: any) =>
                                item.value === bookingPricing.salesDeed
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {salesDeeds.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Khata</p>
                  <Listbox
                    value={bookingPricing.khata}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        khata: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            khatas.find(
                              (item: any) => item.value === bookingPricing.khata
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {khatas.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">EC</p>
                  <Listbox
                    value={bookingPricing.ec}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        ec: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            ecs.find(
                              (item: any) => item.value === bookingPricing.ec
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {ecs.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Tax
                  </p>
                  <Listbox
                    value={bookingPricing.propertyTax}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        propertyTax: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            propertyTaxes.find(
                              (item: any) =>
                                item.value === bookingPricing.propertyTax
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {propertyTaxes.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Registrar Office
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="registrarOffice"
                      value={bookingPricing.registrarOffice}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <p className="text-lg font-semibold  block col-span-12 mt-5">
                  Pricing Info
                </p>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Expected Price (In Rs/Sq.Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="expectedPrice1"
                      value={bookingPricing.expectedPrice1}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Negotiated Price (In Rs/Sq.Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="negotiatedPrice1"
                      value={bookingPricing.negotiatedPrice1}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Closed Price (in Rs/Sq,Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="closedPrice1"
                      value={bookingPricing.closedPrice1}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Expected Price{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="expectedPrice2"
                      value={bookingPricing.expectedPrice2}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Negotiated Price{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="negotiatedPrice2"
                      value={bookingPricing.negotiatedPrice2}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Closed Price{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="closedPrice2"
                      value={bookingPricing.closedPrice2}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Deposit (In Rs.)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="deposit"
                      value={bookingPricing.deposit}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Maintenance Charges Rs/Sq.Ft
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="maintenanceCharges1"
                      value={bookingPricing.maintenanceCharges1}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Maintenance Charges Rs/Month
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="maintenanceCharges2"
                      value={bookingPricing.maintenanceCharges2}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Monthly Rental (In Rs.)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="monthlyRental"
                      value={bookingPricing.monthlyRental}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Price Negotiation
                  </p>
                  <Listbox
                    value={bookingPricing.priceNegotiation}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        priceNegotiation: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            priceNegotiatons.find(
                              (item: any) =>
                                item.value === bookingPricing.priceNegotiation
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {priceNegotiatons.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12"></div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Lease Amount
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="leaseAmount"
                      value={bookingPricing.leaseAmount}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <p className="text-lg font-semibold  block col-span-12 mt-5">
                  Banking Info
                </p>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Whether Mortgaged
                  </p>
                  <Listbox
                    value={bookingPricing.mortgaged}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        mortgaged: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            mortgaged_.find(
                              (item: any) =>
                                item.value === bookingPricing.mortgaged
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {mortgaged_.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Lender Name
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="lenderName"
                      value={bookingPricing.lenderName}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12"></div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Banker name
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="bankerName"
                      value={bookingPricing.bankerName}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Existing Home Loan on Property
                  </p>
                  <Listbox
                    value={bookingPricing.existingLoan}
                    onChange={(val) =>
                      setBookingPricing({
                        ...bookingPricing,
                        existingLoan: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none  rounded-md w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            existingLoans.find(
                              (item: any) =>
                                item.value === bookingPricing.existingLoan
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20]  mt-9 w-full bg-white rounded-md  shadow-md border border-secondaryLightColor focus:outline-none">
                          {existingLoans.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12"></div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Outstanding Loan (In Rs.)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="outstandingLoan"
                      value={bookingPricing.outstandingLoan}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Total Loan amount in Rs.
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="totalLoan"
                      value={bookingPricing.totalLoan}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Interest Rate %
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="interestRate"
                      value={bookingPricing.interestRate}
                      onChange={handleBookingChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <button
        onClick={onSubmitHandler}
        className="self-center bg-black text-primaryColor rounded-md py-2 px-4  font-bold"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default BookingPricing;
BookingPricing.admin = (page: React.ReactElement) => {
  return { page };
};
