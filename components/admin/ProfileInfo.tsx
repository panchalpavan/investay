import React from "react";
import Edit from "../SVGComponents/profile/Edit";
import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FiChevronDown, FiLoader } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";
import { Calendar } from "react-calendar";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { countryCodes } from "../../utilities/countryCodes";
import { Country, State } from 'country-state-city';

import {
    accountTypes,
    genders,
    marital_Status,
    prefixes,
} from "../../utilities/personalInfo";
import { countries, states } from "../../utilities/postProperty";
import { useDispatch } from "react-redux";
import { CiCalendar } from "react-icons/ci";
import { toast } from "react-toastify";
import { set_user } from "../../redux/user/userReducer";
import { editProfile } from "../../action-creators/user/editProfile";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PersonalInfo = ({ user }: any) => {
    const dispatch = useDispatch();
    const [dob, setDob] = useState(
        user?.dob && user?.dob !== "" ? new Date(user?.dob) : new Date()
    );
    const [loading, setLoading] = useState(false);

    // alert(user?.state)
    // console.log(user);

    const [personalInfo, setPersonalInfo] = useState({
        prefix: user?.prefix || prefixes[0].value,
        gender: user?.gender || genders[0].value,
        maritalStatus: user?.maritalStatus || marital_Status[0].value,
        accountType: user?.accountType || accountTypes[0].value,
        userId: user?.userId,
        firstName: user?.firstName || "",
        middleName: user?.middleName || "",
        lastName: user?.lastName || "",
        email: user?.email,
        alternateEmail: user?.alternateEmail || "",
        dob: dob.toDateString(),
        age: user?.age,
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
        state: user?.state,
        country: user?.country,
    });

    const [onDob, setOnDob] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        const { firstName, lastName, alternateEmail, alternateMobile } = personalInfo;
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
        }
        if (lastName.replace(/\s/, "").trim().length < 3) {
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
        }
        if (alternateEmail && (!emailRegex.test(alternateEmail))) {
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
        }
        if (alternateMobile && (!/^[0-9]{10}$/.test(alternateMobile))) {
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
        }
        else {
            if (!alternateMobile) {
                personalInfo.countryCode1 = ""
            }
            const data = {
                ...personalInfo,
                alternateMobile: `${personalInfo.countryCode1}${alternateMobile}`,
            };

            try {
                setLoading(true);
                const response = await editProfile(data);
                if (response.success) {
                    localStorage.setItem("investay_user", JSON.stringify(response.user));
                    dispatch(set_user({ user: response.user }));
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
                    setLoading(false);
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
                setLoading(false);

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
                            {open ? (
                                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                            ) : (
                                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                            )}
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
                                                <span className="text-base  h-6 capitalize text-secondaryLightColor">
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
                                            onChange={handleChange}
                                            className="w-full  border-none focus:outline-none"
                                        />

                                        <Edit width="10" height="10" color="black" />
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
                                    <Listbox>
                                        <p className="text-xs py-1 text-secondaryLightColor">Country</p>
                                        <select
                                            value={personalInfo.country}
                                            onChange={(e) =>
                                                setPersonalInfo((prev) => ({
                                                    ...prev,
                                                    country: e.target.value,
                                                }))
                                            }
                                            className="border bg-inherit border-black h-9 w-full font-light focus:outline-none mb-4"
                                        >
                                            <option value="" disabled >Select a Country</option>
                                            {
                                                Country.getAllCountries().map((country, index) => {
                                                    return (
                                                        <option key={index} value={country.isoCode} >{country.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </Listbox>

                                </div>

                                <div className="xxs:col-span-6  col-span-12">
                                    <p className="text-xs  text-secondaryLightColor">State </p>
                                    <Listbox
                                        value={personalInfo.country}
                                        onChange={(val) =>
                                            setPersonalInfo({ ...personalInfo, country: val })
                                        }
                                    >
                                            <select
                                                value={personalInfo.state}
                                                onChange={(e) =>
                                                    setPersonalInfo((prev) => ({
                                                        ...prev,
                                                        state: e.target.value,
                                                    }))
                                                }
                                                className="border  bg-inherit border-black h-9 w-full font-light focus:outline-none "
                                            >
                                                <option value="" disabled >Select a State</option>
                                                {
                                                    State?.getStatesOfCountry(personalInfo?.country).map((state, index) => {
                                                        return (
                                                            <option key={index} value={state.isoCode} >{state.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
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
                            </div>
                            <div className="w-full flex justify-center">
                                <button
                                    onClick={onSubmitHandler}
                                    className="w-44 h-10 px-5 py-2 text-black  bg-primaryColor  mt-10 "
                                >
                                    {loading ? (
                                        <FiLoader className="h-5 w-full  text-black animate-spin" />
                                    ) : (
                                        "Save & Continue"
                                    )}

                                </button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>


        </>
    );
};

export default PersonalInfo;
