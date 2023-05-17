import React, { Fragment, useRef, useState } from "react";
import HeaderTitle from "../../components/Layout/HeaderTitle";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { signup } from "../../action-creators/user/signup";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { set_user } from "../../redux/user/userReducer";
import LoadingSpinner from "../../components/LoadingSpinner";
import { countryCodes } from "../../utilities/countryCodes";
import { sendOtp } from "../../action-creators/downloads/sendOtp";
import { Listbox, Transition } from "@headlessui/react";
import { prefixes } from "../../utilities/personalInfo";
import { FiChevronDown } from "react-icons/fi";
import { countries, states } from "../../utilities/postProperty";

const initialUserDetails = {
  prefix: prefixes[0].value,
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+91",
  mobile: "",
  dob: "",
  nationality: "",
  city: "",
  state: states[0].value,
  address: "",
  pincode: "",
  country: countries[0].value,
  invoice: "asdas"
};

const otpRegex = /^[0-9]$/;

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [tokenId, setTokenId] = useState(undefined);
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const [error, setError]: any = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const handleKeyPress = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      handleOnChange(e);
    } else {
      if (name === "fourth") {
        if (token.fourth === "" && value === "") {
          thirdRef?.current.focus();
        }
      } else if (name === "third") {
        if (token.third === "" && value === "") {
          secondRef?.current.focus();
        }
      } else if (name === "second") {
        if (token.second === "" && value === "") {
          firstRef?.current.focus();
        }
      }
    }
  };

  const handleOnChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (otpRegex.test(value) || value === "") {
      setToken({ ...token, [name]: value });
      if (name === "first" && otpRegex.test(value)) {
        secondRef?.current.focus();
      } else if (name === "second" && otpRegex.test(value)) {
        thirdRef?.current.focus();
      } else if (name === "third" && otpRegex.test(value)) {
        fourthRef?.current.focus();
      }
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const isDate = (date: any) => {
    const parsedDate: any = Date.parse(date);
    return isNaN(date) && !isNaN(parsedDate);
  };

  // const defaultOption = options[0];

  const onRegister = async (e: any) => {
    e.preventDefault();
    const {
      firstName,
      email,
      countryCode,
      mobile,
      dob,
      nationality,
      city,
      state,
      address,
      pincode,
      country,
    } = userDetails;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (firstName.replace(/\s/, "").trim().length < 3) {
      toast.error("First name must be minimum 3 characters long!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!emailRegex.test(email)) {
      toast.error("Enter a valid email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (mobile.length < 10) {
      toast.error("Enter a valid phone number!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!isDate(dob)) {
      toast.error("DOB cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (nationality.replace(/\s/, "").trim() === "") {
      toast.error("Nationality cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (city.replace(/\s/, "").trim() === "") {
      toast.error("Nationality cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (state.replace(/\s/, "").trim() === "") {
      toast.error("State cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (address.replace(/\s/, "").trim() === "") {
      toast.error("Address cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (pincode.length !== 6) {
      toast.error("Pincode must be 6 digits long!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (country.replace(/\s/, "").trim() === "") {
      toast.error("Nationality cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!isChecked) {
      toast.error("Agree to the Terms & Conditions to continue!", {
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
      if (!tokenId) {
        try {
          const response = await sendOtp({
            email,
            mobile: `${countryCode}${mobile}`,
          });
          if (response.success) {
            setTokenId(response.token);
            setIsSubmit(true);
          }
        } catch (error: any) {
          console.log(error);
        }
      } else {
        try {
          console.log(userDetails, token)
          setIsLoading(true);
          const response = await signup({
            ...userDetails,
            otp: `${token.first}${token.second}${token.third}${token.fourth}`,
          });
          if (response.success) {
            setUserDetails(initialUserDetails);
            setIsChecked(false);
            if (error) {
              setError(undefined);
            }
            localStorage.setItem(
              "investay_user",
              JSON.stringify(response.user)
            );
            dispatch(set_user({ user: response.user }));
            if (error) {
              setError(undefined);
            }
            setIsLoading(false);
          }
        } catch (error: any) {
          // toast.error(error.response.data.error, {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });
          setError(error.response.data.error);
          setIsLoading(false);
        }
      }
    }
  };

  console.log(error)

  const resendOtp = async () => {
    const { email, countryCode, mobile } = userDetails;
    try {
      const response = await sendOtp({
        email,
        mobile: `${countryCode}${mobile}`,
      });
      if (response.success) {
        setToken(response.token);
      }
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  return (
    <>
      <HeaderTitle pageName={"Signup"} />

      {isLoading && <LoadingSpinner />}

      <form
        onSubmit={onRegister}
        className="min-h-[90vh] w-full p-4 sm:p-6 flex justify-between bg-Signup_bg bg-cover"
      >
        {!isSubmit ? (
          <div className="min-h-[80%] w-[100%] xxs:w-[90%] sm:w-[75%] base:w-[60%] lg:w-[50%] m-auto px-4 lg:px-6 lg1:px-8 py-4 flex flex-col bg-white">
            <h1 className="mb-6 text-center text-2xl font-[700] text-black">
              Let&apos;s get started
            </h1>

            <Listbox
              value={userDetails.prefix}
              onChange={(val) =>
                setUserDetails({ ...userDetails, prefix: val })
              }
            >
              <div className="relative flex border border-secondaryLightColor w-20 py-1  mb-6">
                <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                  <span className="text-base capitalize text-secondaryLightColor">
                    {
                      prefixes.find(
                        (item: any) => item.value === userDetails.prefix
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
                  <Listbox.Options className="absolute   mt-9 h-[150px] overflow-y-scroll w-full bg-white border border-secondaryLightColor  shadow-md  focus:outline-none">
                    {prefixes.map((val, key) => {
                      return (
                        <Listbox.Option
                          key={key}
                          className="relative select-none p-2  text-sm text-secondaryLightColor cursor-pointer"
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

            <div className="text-sm grid grid-cols-1 xs:grid-cols-2 gap-4">
              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="firstName"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={userDetails.firstName}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              {/* <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="middleName"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Middle Name:
                </label>
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  value={userDetails.middleName}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div> */}

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="lastName"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={userDetails.lastName}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem]  outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="email" className="pl-[0.2rem] text-[#00000080]">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="mobile"
                  className="pl-[0.2rem] flex justify-start items-center text-[#00000080]"
                >
                  Mobile
                  <select
                    name="countryCode"
                    id="countryCode"
                    value={userDetails.countryCode}
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
                </label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  value={userDetails.mobile}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="dob" className="pl-[0.2rem] text-[#00000080]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={userDetails.dob}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="hidden xs:flex flex-col justify-start items-start"></div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="nationality"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Nationality :
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  value={userDetails.nationality}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="city" className="pl-[0.2rem] text-[#00000080]">
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={userDetails.city}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="state" className="pl-[0.2rem] text-[#00000080]">
                  State* :
                </label>
                <Listbox
                  value={userDetails.state}
                  onChange={(val) =>
                    setUserDetails({ ...userDetails, state: val })
                  }
                >
                  <div className="relative w-full flex border border-secondaryLightColor py-1 break-all">
                    <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                      <span className="text-base capitalize text-secondaryLightColor">
                        {
                          states.find(
                            (item: any) => item.value === userDetails.state
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

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="address"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Address* :
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={userDetails.address}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="country"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Country* :
                </label>
                <Listbox
                  value={userDetails.country}
                  onChange={(val) =>
                    setUserDetails({ ...userDetails, country: val })
                  }
                >
                  <div className="relative w-full flex border border-secondaryLightColor py-1  ">
                    <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                      <span className="text-base capitalize text-secondaryLightColor">
                        {
                          countries.find(
                            (item: any) => item.value === userDetails.country
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

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="pincode"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Pincode* :
                </label>
                <input
                  type="number"
                  name="pincode"
                  id="pincode"
                  value={userDetails.pincode}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-start items-center">
              <input
                type="checkbox"
                name="t&c"
                id="t&c"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="h-[1rem] w-[1rem] outline-none"
              />
              <label htmlFor="t&c" className="ml-2 text-sm font-[700]">
                TERMS AND CONDITIONS
              </label>
            </div>

            {error && (
              <p className="mt-4 text-xs text-center font-[600] text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-[7rem] my-6 mx-auto py-[0.3rem] px-2 text-black font-[700] rounded-md bg-[#FDB813]"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="h-auto w-[80%] mx-auto xxs:w-[70%] xs:w-[60%] sm:w-[50%] md:w-[45%] md_link:w-[40%] lg1:w-[35%] px-[0.2rem] py-6 xxs:px-2 sm:px-4 sm:py-6 lg1:p-6 flex flex-col items-center bg-white">
            <h1 className="text-black text-xl font-[700]">OTP verification</h1>
            <p className="w-[95%] mt-3 text-xs text-center text-gray-400">
              A 4-digit OTP has been sent to your Mobile number/Email
            </p>

            <div className="w-[90%] md:w-[80%] md_link:w-[70%] lg1:w-[65%] mt-4 py-2 px-3 text-black text-sm text-center rounded-sm bg-[#FDB81385]">
              OTP has been sent successfully.
            </div>

            <div className="w-[90%] md:w-[80%] md_link:w-[70%] lg1:w-[65%] mt-4 py-2 px-3 text-black text-sm text-start bg-white">
              <p className="text-center">Your Mobile Number and Email:</p>
              <div className="w-full flex flex-col justify-between items-center">
                <p>
                  {userDetails.countryCode} {userDetails.mobile}
                </p>
                <p>{userDetails.email}</p>
                {/* <BiEdit className="text-xl text-gray-600" /> */}
              </div>
            </div>

            <div className="w-[90%] md:w-[85%] md_link:w-[75%] lg1:w-[65%] mt-6 flex flex-col items-start justify-start">
              <div className="w-full text-sm text-gray-400 font-[600] flex justify-between items-center">
                <p>Enter OTP</p>
                <p className="cursor-pointer" onClick={resendOtp}>
                  Resend OTP
                </p>
              </div>

              <div className="w-full text-sm flex justify-between items-center">
                <input
                  ref={firstRef}
                  type="text"
                  name="first"
                  value={token.first}
                  onChange={handleOnChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={secondRef}
                  type="text"
                  name="second"
                  value={token.second}
                  onChange={handleOnChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={thirdRef}
                  type="text"
                  name="third"
                  value={token.third}
                  onChange={handleOnChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={fourthRef}
                  type="text"
                  name="fourth"
                  value={token.fourth}
                  onChange={handleOnChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
                />
              </div>
            </div>

            {error && (
              <p className="mt-2 text-xs text-center font-[600] text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-[7rem] mt-6 mx-auto py-[0.3rem] px-2 text-black font-[700] rounded-md bg-[#FDB813]"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default Signup;
Signup.public = (page: React.ReactElement) => {
  return { page };
};
