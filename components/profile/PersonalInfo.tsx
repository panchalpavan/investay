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
import { Calendar } from "react-calendar";

import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { countryCodes } from "../../utilities/countryCodes";
import {
  accountTypes,
  genders,
  marital_Status,
  prefixes,
} from "../../utilities/personalInfo";
import { countries, states } from "../../utilities/postProperty";
import { useDispatch, useSelector } from "react-redux";
import { CiCalendar } from "react-icons/ci";
import moment from "moment";
import { toast } from "react-toastify";
import { editProfile } from "../../action-creators/user/editProfile";
import { set_user } from "../../redux/user/userReducer";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => {
    return state.getUserData;
  });

  const [dob, setDob] = useState(
    user?.dob && user?.dob !== "" ? new Date(user?.dob) : new Date()
  );

  const validateAge = (date: any) => {
    const res = new Date().getTime() - new Date(date).getTime();
    return moment.duration(res)._data.years;
  };

  // alert(user?.state)

  const [personalInfo, setPersonalInfo] = useState({
    prefix: user?.prefix || prefixes[0].value,
    gender: user?.gender || genders[0].value,
    maritalStatus: user?.maritalStatus || marital_Status[0].value,
    state: user?.state,
    accountType: user?.accountType || accountTypes[0].value,
    userId: user?.userId,
    firstName: user?.firstName || "",
    middleName: user?.middleName || "",
    lastName: user?.lastName || "",
    email: user?.email,
    alternateEmail: user?.alternateEmail || "",
    dob: dob.toDateString(),
    age: validateAge(dob),
    countryCode: user?.countryCode,
    countryCode1: user?.alternateMobile
      ? user?.alternateMobile.substring(0, user?.alternateMobile.length - 10)
      : user?.countryCode,
    mobile: user?.mobile,
    alternateMobile: user?.alternateMobile
      ? parseInt(
          user?.alternateMobile.substring(user?.alternateMobile.length - 10)
        )
      : "",
    companyName: user?.companyName || "",
    designation: user?.designation || "",
    nationality: user?.nationality,
    address: user?.address,
    city: user?.city,
    pincode: user?.pincode,
    country: user?.country,
    nameInPan: user?.nameInPan || "",
    nameInAadhar: user?.nameInAadhar || "",
    pan: user?.pan || "",
    aadhar: user?.aadhar|| "",
    nriIdName: user?.nriIdName || "",
    nriIdDetails: user?.nriIdDetails || "",
    nameinBank: user?.nameinBank || "",
    bankName: user?.bankName || "",
    branchName: user?.branchName || "",
    accountNumber: user?.accountNumber || "",
    ifsc: user?.ifsc || "",
  });

  const [onDob, setOnDob] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    // console.log("yes");
    const { firstName, lastName, alternateEmail, alternateMobile } =
      personalInfo;
    if (firstName.replace(/\s/, "").trim().length < 3) {
      toast.error("First Name must be minimum 3 characters long!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (lastName.replace(/\s/, "").trim().length < 3) {
      toast.error("Last Name must be minimum 3 characters long!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!emailRegex.test(alternateEmail)) {
      toast.error("Invalid value for alternate email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/^[0-9]{10}$/.test(alternateMobile)) {
      toast.error("Invalid value for alternate mobile!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const data = {
        ...personalInfo,
        alternateMobile: `${personalInfo.countryCode1}${alternateMobile}`,
      };
      try {
        const response = await editProfile(data);
        if (response.success) {
          localStorage.setItem("investay_user", JSON.stringify(response.user));
          dispatch(set_user({ user: response.user }));
          // setPersonalInfo(response.user);
          toast.success("Profile updated successfully!", {
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
      } catch (error: any) {
        toast.error(error.response.data.error, {
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
  };

  return (
    <>
      <Disclosure
        as={"div"}
        defaultOpen={true}
        className="w-full"
        id="personal-info"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">Personal Info</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="col-span-12">
                  <Listbox
                    value={personalInfo.prefix}
                    onChange={(val) =>
                      setPersonalInfo({ ...personalInfo, prefix: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-20 py-1 mt-1 ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            prefixes.find(
                              (item: any) => item.value === personalInfo.prefix
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
                        <Listbox.Options className="absolute z-[20]  mt-9 w-full bg-white   shadow-md border border-secondaryLightColor focus:outline-none">
                          {prefixes.map((val, key) => {
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
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">User ID </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                    <input
                      type="text"
                      name="userId"
                      defaultValue={personalInfo.userId}
                      disabled={true}
                      className="w-full  border-none focus:outline-none cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    First Name:
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                    <input
                      type="text"
                      name="firstName"
                      value={personalInfo.firstName}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Middle Name:
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="middleName"
                      value={personalInfo.middleName}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Last Name:
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="lastName"
                      value={personalInfo.lastName}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Age</p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="number"
                      name="age"
                      value={personalInfo.age}
                      disabled={true}
                      onChange={() => {}}
                      className="w-full  border-none focus:outline-none cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Date Of Birth{" "}
                  </p>
                  <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1 ">
                    <div
                      onClick={() => setOnDob(!onDob)}
                      className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2"
                    >
                      <span className="text-base  text-secondaryLightColor">
                        {personalInfo.dob}
                      </span>
                      <span>
                        <CiCalendar className=" h-5 w-5 " />
                      </span>
                    </div>
                  </div>
                  {onDob && (
                    <div className="absolute z-10">
                      <Calendar
                        onChange={(e: any) => {
                          setDob(new Date(e));
                          setPersonalInfo({
                            ...personalInfo,
                            dob: new Date(e).toDateString(),
                            age: validateAge(new Date(e)),
                          });
                          setOnDob(!onDob);
                        }}
                        value={dob}
                      />
                    </div>
                  )}
                </div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Email </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="email"
                      name="email"
                      defaultValue={personalInfo.email}
                      disabled={true}
                      className="w-full  border-none focus:outline-none cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Alternate Email{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="email"
                      name="alternateEmail"
                      value={personalInfo.alternateEmail}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Mobile
                    <select
                      name="countryCode"
                      id="countryCode"
                      defaultValue={personalInfo.countryCode}
                      disabled={true}
                      className="outline-none bg-transparent cursor-not-allowed"
                    >
                      {countryCodes.map((item: any, index: any) => {
                        return (
                          <option key={index} value={item.dial_code}>
                            {item.dial_code}
                          </option>
                        );
                      })}
                    </select>
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="number"
                      name="mobile"
                      defaultValue={personalInfo.mobile}
                      disabled={true}
                      className="w-full  border-none focus:outline-none cursor-not-allowed"
                    />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Alternate Mobile
                    <select
                      name="countryCode"
                      id="countryCode1"
                      value={personalInfo.countryCode1}
                      onChange={handleChange}
                      className="outline-none bg-transparent"
                    >
                      {countryCodes.map((item: any, index: any) => {
                        return (
                          <option key={index} value={item.dial_code}>
                            {item.dial_code}
                          </option>
                        );
                      })}
                    </select>
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="number"
                      name="alternateMobile"
                      value={personalInfo.alternateMobile}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Company Name{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="companyName"
                      value={personalInfo.companyName}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Designation{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="designation"
                      value={personalInfo.designation}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Gender </p>
                  <Listbox
                    value={personalInfo.gender}
                    onChange={(val) =>
                      setPersonalInfo({ ...personalInfo, gender: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-1 mt-1 ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            genders.find(
                              (item: any) => item.value === personalInfo.gender
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
                        <Listbox.Options className="absolute z-[20]  mt-9 w-full bg-white   shadow-md border border-secondaryLightColor focus:outline-none">
                          {genders.map((val, key) => {
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
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Martial Status{" "}
                  </p>
                  <Listbox
                    value={personalInfo.maritalStatus}
                    onChange={(val) =>
                      setPersonalInfo({ ...personalInfo, maritalStatus: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-1 mt-1 ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            marital_Status.find(
                              (item: any) =>
                                item.value === personalInfo.maritalStatus
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
                        <Listbox.Options className="absolute z-[20]  mt-9 w-full bg-white   shadow-md border border-secondaryLightColor focus:outline-none">
                          {marital_Status.map((val, key) => {
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
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Nationality{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="nationality"
                      value={personalInfo.nationality}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>

                <div className="xxs:col-span-6 xxs:flex hidden"></div>

                <div className="col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Current Address{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="address"
                      value={personalInfo.address}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">City </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="city"
                      value={personalInfo.city}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">State </p>
                  <Listbox
                    value={personalInfo.state}
                    onChange={(val) =>
                      setPersonalInfo({ ...personalInfo, state: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-1 mt-1 ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor p-3">
                          {
                            states.find(
                              (item: any) => item.value === personalInfo.state
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
                        <Listbox.Options className="absolute z-[20]  mt-9 h-[150px] overflow-y-scroll w-full bg-white rounded-md  shadow-md border border-secondaryLightColor focus:outline-none">
                          {states.map((val, key) => {
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

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Pincode </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="number"
                      name="pincode"
                      value={personalInfo.pincode}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Country </p>
                  <Listbox
                    value={personalInfo.country}
                    onChange={(val) =>
                      setPersonalInfo({ ...personalInfo, country: val })
                    }
                  >
                    <div className="relative w-full flex border border-secondaryLightColor py-1 mt-1 ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            countries.find(
                              (item: any) => item.value === personalInfo.country
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
                        <Listbox.Options className="absolute z-[20]  mt-9 h-[150px] overflow-y-scroll w-full bg-white   shadow-md border border-secondaryLightColor focus:outline-none">
                          {countries.map((val, key) => {
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
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure
        as={"div"}
        defaultOpen={true}
        className="w-full "
        id="kyc-details"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">KYC Details</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Name as in PAN :
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="nameInPan"
                      value={personalInfo.nameInPan}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Name as in AADHAR :
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="nameInAadhar"
                      value={personalInfo.nameInAadhar}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">PAN NO*</p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="pan"
                      value={personalInfo.pan}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    AADHAR NO* :
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="number"
                      name="aadhar"
                      value={personalInfo.aadhar}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    NRI ID Name:
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="nriIdName"
                      value={personalInfo.nriIdName}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    NRI ID Details:
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="nriIdDetails"
                      value={personalInfo.nriIdDetails}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure
        as={"div"}
        defaultOpen={true}
        className="w-full"
        id="bank-acc-details"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">Bank Account Details</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Name as per bank records:
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="nameinBank"
                      value={personalInfo.nameinBank}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>

                <div className="xxs:col-span-6 xxs:flex hidden"></div>

                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Bank Name{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="bankName"
                      value={personalInfo.bankName}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Branch Name
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="branchName"
                      value={personalInfo.branchName}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Bank account number{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="number"
                      name="accountNumber"
                      value={personalInfo.accountNumber}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    IFSC Code{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 ">
                    <input
                      type="text"
                      name="ifsc"
                      value={personalInfo.ifsc}
                      onChange={handleChange}
                      className="w-full  border-none focus:outline-none text-secondaryLightColor text-sm"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Account Type{" "}
                  </p>
                  <Listbox
                    value={personalInfo.accountType}
                    onChange={(val) =>
                      setPersonalInfo({ ...personalInfo, accountType: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-1 mt-1 ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            accountTypes.find(
                              (item: any) =>
                                item.value === personalInfo.accountType
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
                        <Listbox.Options className="absolute z-[20]  mt-9 w-full bg-white   shadow-md border border-secondaryLightColor focus:outline-none">
                          {accountTypes.map((val, key) => {
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
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure
        as={"div"}
        defaultOpen={true}
        className="w-full"
        id="make-payments"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">Make Payment</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel className="mb-5">
              <p className="text-sm">
                You can make an online payment through your net banking to the
                following bank account.
              </p>

              <div className="relative overflow-x-auto mt-5 w-full">
                <table className="w-full text-sm text-center text-black">
                  <thead className="text-xs  uppercase  ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 border-black border-2"
                      >
                        Bank Account Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 border-black border-2"
                      >
                        INVESTAY REALTY SERVICES LLP
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white  ">
                      <th
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap border-black border-2 "
                      >
                        Account No.
                      </th>
                      <td className="px-6 py-4 border-black border-2 text-black">
                        142105001951
                      </td>
                    </tr>
                    <tr className="bg-white  ">
                      <th
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap border-black border-2 "
                      >
                        Bank Name
                      </th>
                      <td className="px-6 py-4 border-black border-2 ">
                        ICICI Bank Ltd
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="px-6 py-4    whitespace-nowrap border-black border-2 "
                      >
                        Branch Name
                      </th>
                      <td className="px-6 py-4 border-black border-2 text-black">
                        Cunningham Road, Bangalore
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="px-6 py-4   whitespace-nowrap border-black border-2 "
                      >
                        IFSC Code
                      </th>
                      <td className="px-6 py-4 border-black  border-2">
                        ICIC0001421
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm mt-2">
                Alternatively you can also make a payment by using the below
                link.
              </p>

              <button className="bg-black text-primaryColor px-4 py-2 font-semibold rounded-md  mt-2">
                Pay Via Razorpay
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure
        as={"div"}
        defaultOpen={true}
        className="w-full"
        id="invoice-details"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">Invoice Details</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel className="mb-5">
              <div className="relative overflow-x-auto mt-5 w-full">
                <table className="w-full text-sm text-center text-black">
                  <thead className="text-xs  uppercase  bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2 "
                      >
                        Invoice No.
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Invoice Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Sale Value
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2 "
                      >
                        Service Fees(%)
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        CGST(9%)
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        SGST(9%)
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Amount WIth Tax
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="font-normal">
                    <tr className="bg-white  ">
                      <th
                        scope="row"
                        className="px-2 py-4 font-normal   whitespace-nowrap border-black border-2 "
                      >
                        ABC123
                      </th>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        Pending/Paid
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        View/Download
                      </td>
                    </tr>
                    <tr className="bg-white  ">
                      <th
                        scope="row"
                        className="px-2 py-4 font-normal   whitespace-nowrap border-black border-2 "
                      >
                        ABC123
                      </th>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black"></td>
                      <td className="px-6 py-4 border-black border-2  text-black"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure
        as={"div"}
        defaultOpen={true}
        className="w-full"
        id="receipt-details"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">Receipt Details</p>
              {/* <Disclosure.Button> */}
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
              {/* </Disclosure.Button> */}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="relative overflow-x-auto mb-5 w-full">
                <table className="w-full text-sm  text-black text-center">
                  <thead className="text-xs  uppercase  bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2 "
                      >
                        Invoice No.
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Invoice Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Against Invoice No.
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2 "
                      >
                        Mode Of Payments
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Transaction No.
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Drawee bank
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 border-black border-2"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="font-normal text-center">
                    <tr className="bg-white  ">
                      <th
                        scope="row"
                        className="px-2 py-4 font-normal   whitespace-nowrap border-black border-2 "
                      >
                        XYZ123
                      </th>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        ABC123
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>

                      <td className="px-6 py-4 border-black border-2  text-black">
                        Success/Pending
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        View/Download
                      </td>
                    </tr>
                    <tr className="bg-white  ">
                      <th
                        scope="row"
                        className="px-2 py-4 font-normal   whitespace-nowrap border-black border-2 "
                      >
                        XYZ123
                      </th>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        ABC123
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        {/* 142105001951 */}
                      </td>

                      <td className="px-6 py-4 border-black border-2  text-black">
                        Success/Pending
                      </td>
                      <td className="px-6 py-4 border-black border-2  text-black">
                        View/Download
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="w-full flex justify-center">
        <button
          onClick={onSubmitHandler}
          className="px-5 py-2 text-black  bg-primaryColor  mt-10 "
        >
          Save & Continue
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
