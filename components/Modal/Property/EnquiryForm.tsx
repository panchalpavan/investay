import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { toast } from "react-toastify";
import { addEnquiry } from "../../../action-creators/enquiry/addEnquiry";

type TProps = {
  isOpen: boolean;
  setIsOpen: Function;
  propertyId?: string;
};

import { countryCodes } from "../../../utilities/countryCodes";
import { sendOtp } from "../../../action-creators/downloads/sendOtp";
import LoadingSpinner from "../../LoadingSpinner";
import ThankYou from "../ThankYou";

const initialEnquiryDetails: any = {
  name: "",
  email: "",
  mobile: "",
  channelPartnerName: "",
  source: "",
  query: "",
  countryCode: "+91",
};

const EnquiryForm = ({ isOpen, setIsOpen, propertyId }: TProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [enquiryDetails, setEnquiryDetails] = useState(initialEnquiryDetails);
  const [role, setRole] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [token, setToken] = useState(undefined);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [onSuccess, setOnSuccess] = useState(false);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEnquiryDetails({ ...enquiryDetails, [name]: value });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const { name, email, countryCode, mobile, source, query } = enquiryDetails;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!isChecked) {
      toast.error("Agree to the Terms & Conditions to add the enquiry!", {
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
      if (name.replace(/\s/, "").trim() === "") {
        toast.error("Name cannot be empty!", {
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
      } else if (mobile.toString().length < 10) {
        toast.error("Enter a valid mobile number!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (["seller", "buyer", "channel-partner"].indexOf(role) === -1) {
        toast.error("Select a value for 'You are best described'!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (["resale", "rental"].indexOf(serviceNeeded) === -1) {
        toast.error("Select a value for 'Service Needed'!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (source.replace(/\s/, "").trim() === "") {
        toast.error("'How did you hear about us?' cannot be empty!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (query.replace(/\s/, "").trim() === "") {
        toast.error("'Enquiry Remarks' cannot be empty!", {
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
        if (!token) {
          setLoading(true);
          try {
            const response = await sendOtp({
              email,
              mobile: `${countryCode}${mobile}`,
            });
            if (response.success) {
              setToken(response.token);
              setOtpSent(true);
              setLoading(false);
              setError(undefined);
            }
          } catch (error: any) {
            console.log(error.response.data.error);
            setError(error.response.data.error);
            setLoading(false);
          }
        } else {
          try {
            setLoading(true);
            const response = await addEnquiry({
              ...enquiryDetails,
              role,
              serviceNeeded,
              otp,
              propertyId
            });
            if (response.success) {
              setEnquiryDetails(initialEnquiryDetails);
              setRole("");
              setServiceNeeded("");
              setIsChecked(false);
              setOnSuccess(true);
              // setIsOpen(false);
              setToken(undefined);
              setOtp("");
              setOtpSent(true);
              setLoading(false);
              setError(undefined);
            }
          } catch (error: any) {
            setError(error.response.data.error);
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
            setLoading(false);
          }
        }
      }
    }
  };

  const resendOtp = async () => {
    const { email, countryCode, mobile } = enquiryDetails;
    setLoading(true);
    try {
      const response = await sendOtp({
        email,
        mobile: `${countryCode}${mobile}`,
      });
      if (response.success) {
        setToken(response.token);
        setOtpSent(true);
        setLoading(false);
        setError(undefined);
      }
    } catch (error: any) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <ThankYou isOpen={onSuccess} setIsOpen={setOnSuccess} setOpen={setIsOpen} open={isOpen} />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[80] "
          onClose={() => {
            setEnquiryDetails(initialEnquiryDetails);
            setRole("");
            setServiceNeeded("");
            setIsChecked(false);
            setIsOpen(false);
            setToken(undefined);
            setOtp("");
            setOnSuccess(false);
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transition-all w-full max-w-4xl p-6 xs:p-10  mt-20  overflow-x-hidden  relative  bg-EnquiryForm_bg bg-cover">
                  <button
                    className="w-10 h-10 absolute right-2 top-2"
                    onClick={() => {
                      setEnquiryDetails(initialEnquiryDetails);
                      setRole("");
                      setServiceNeeded("");
                      setIsChecked(false);
                      setIsOpen(false);
                      setToken(undefined);
                      setOtp("");
                      setOnSuccess(false);
                      setIsOpen(false);
                      setOtpSent(false);
                      setLoading(false);
                    }}
                  >
                    <XMarkIcon className="w-6 h-6 border-2 rounded-full border-black" />
                  </button>

                  <div className="bg-[#FEFEFEE8] p-4 md:p-6 rounded-xl shadow-formShadow">
                    <p className="font-bold text-2xl text-center ">
                      ENQUIRY FORM
                    </p>
                    <form
                      onSubmit={onSubmitHandler}
                      className="mt-10 space-y-8"
                    >
                      <div className="flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                        <label
                          htmlFor="name"
                          className="text-base w-full sm:w-[50%] text-start text-[#000000B2]"
                        >
                          Full Name* :
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={enquiryDetails.name}
                          onChange={handleChange}
                          className="w-full p-[0.2rem] border-none outline-none focus:outline-none ml-0 sm:ml-2 shadow-formInputShadow"
                        />
                      </div>

                      <div className="flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                        <label
                          htmlFor="email"
                          className="text-base w-full sm:w-[50%] text-start text-[#000000B2]"
                        >
                          Email* :
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={enquiryDetails.email}
                          onChange={handleChange}
                          className="w-full p-[0.2rem] border-none outline-none focus:outline-none ml-0 sm:ml-2 shadow-formInputShadow"
                        />
                      </div>

                      <div className="flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                        <label
                          htmlFor="mobile"
                          className="text-base w-full sm:w-[50%] text-start text-[#000000B2]"
                        >
                          Mobile
                          <select
                            name="countryCode"
                            value={enquiryDetails.countryCode}
                            onChange={handleChange}
                            className="bg-white outline-none"
                          >
                            {countryCodes.map((item: any, index: number) => {
                              return (
                                <option key={index} value={item.dial_code}>
                                  {item.dial_code}
                                </option>
                              );
                            })}
                          </select>
                        </label>
                        <input
                          type="text"
                          name="mobile"
                          id="mobile"
                          value={enquiryDetails.mobile}
                          onChange={handleChange}
                          className="w-full p-[0.2rem] border-none outline-none focus:outline-none ml-0 sm:ml-2 shadow-formInputShadow"
                        />
                      </div>

                      <div className="flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                        <p className="text-base w-full sm:w-[50%] text-start text-[#000000B2]">
                          You are best described as
                        </p>
                        <div className="w-full ml-0 sm:ml-2 flex flex-col xs:flex-row justify-start items-start xs:items-center gap-5">
                          <div className="flex justify-start items-center mb-2 sm:mr-4 sm:mb-0">
                            <input
                              type="radio"
                              name="role"
                              id="seller"
                              value={"seller"}
                              checked={role === "seller"}
                              onChange={(e) => setRole(e.target.value)}
                              className="transform scale-[1.5] mr-2 accent-[#00000080]"
                            />
                            <label
                              htmlFor="seller"
                              className="text-[#000000B2]"
                            >
                              Seller/Owner
                            </label>
                          </div>

                          <div className="flex justify-start items-center mb-2 sm:mr-4 sm:mb-0">
                            <input
                              type="radio"
                              name="role"
                              id="buyer"
                              value={"buyer"}
                              checked={role === "buyer"}
                              onChange={(e) => setRole(e.target.value)}
                              className="transform scale-[1.5] mr-2 accent-[#00000080]"
                            />
                            <label htmlFor="buyer" className="text-[#000000B2]">
                              Buyer/Tenant
                            </label>
                          </div>

                          <div className="flex justify-start items-center mb-2 sm:mr-4 sm:mb-0">
                            <input
                              type="radio"
                              name="role"
                              id="channel-partner"
                              value={"channel-partner"}
                              checked={role === "channel-partner"}
                              onChange={(e) => setRole(e.target.value)}
                              className="transform scale-[1.5] mr-2 accent-[#00000080]"
                            />
                            <label
                              htmlFor="channel-partner"
                              className="text-[#000000B2]"
                            >
                              Channel Partner
                            </label>
                          </div>
                        </div>
                      </div>
                      {role === "channel-partner" && (
                        <div className="flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                          <label
                            htmlFor="channelPartnerName"
                            className="text-base w-full sm:w-[50%] text-start text-[#000000B2]"
                          >
                            Channel Partner Name
                          </label>
                          <input
                            type="text"
                            name="channelPartnerName"
                            id="channelPartnerName"
                            value={enquiryDetails.channelPartnerName}
                            onChange={handleChange}
                            className="w-full p-[0.2rem] border-none outline-none focus:outline-none ml-0 sm:ml-2 shadow-formInputShadow"
                          />
                        </div>
                      )}

                      <div className="flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                        <p className="text-base w-full sm:w-[50%] text-start text-[#000000B2]">
                          Service needed
                        </p>
                        <div className="w-full ml-0 sm:ml-2 flex justify-start items-center">
                          <div className="flex justify-start items-center mr-2">
                            <input
                              type="radio"
                              name="serviceNeeded"
                              id="rental"
                              value={"rental"}
                              checked={serviceNeeded === "rental"}
                              onChange={(e) => setServiceNeeded(e.target.value)}
                              className="transform scale-[1.5] mr-2 accent-[#00000080]"
                            />
                            <label
                              htmlFor="seller"
                              className="text-[#000000B2]"
                            >
                              Rental
                            </label>
                          </div>

                          <div className="flex justify-start items-center">
                            <input
                              type="radio"
                              name="serviceNeeded"
                              id="resale"
                              value={"resale"}
                              checked={serviceNeeded === "resale"}
                              onChange={(e) => setServiceNeeded(e.target.value)}
                              className="transform scale-[1.5] mr-2 accent-[#00000080]"
                            />
                            <label
                              htmlFor="seller"
                              className="text-[#000000B2]"
                            >
                              Resale
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                        <label
                          htmlFor="source"
                          className="text-base w-full sm:w-[50%] text-start text-[#000000B2]"
                        >
                          How did you hear about us?
                        </label>
                        <input
                          type="text"
                          name="source"
                          id="source"
                          value={enquiryDetails.source}
                          onChange={handleChange}
                          className="w-full p-[0.2rem] border-none outline-none focus:outline-none ml-0 sm:ml-2 shadow-formInputShadow"
                        />
                      </div>

                      <div className="flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                        <label
                          htmlFor="query"
                          className="text-base w-full sm:w-[50%] text-start text-[#000000B2]"
                        >
                          Enquiry Remarks
                        </label>
                        <input
                          type="text"
                          name="query"
                          id="query"
                          value={enquiryDetails.query}
                          onChange={handleChange}
                          className="w-full p-[0.2rem] border-none outline-none focus:outline-none ml-0 sm:ml-2 shadow-formInputShadow"
                        />
                      </div>

                      {token && (
                        <div className="w-full flex flex-col items-end">
                          <div className="w-full flex items-start sm:items-center justify-start sm:flex-row flex-col ">
                            <label
                              htmlFor="otp"
                              className="w-auto sm:w-[50%] text-start text-base xs:text-lg text-[#00000080]"
                            >
                              OTP:
                            </label>
                            <input
                              type="number"
                              name="otp"
                              id="otp"
                              value={otp}
                              onChange={(e: any) => setOtp(e.target.value)}
                              className="w-full border-none outline-none focous:outline-none ml-0 sm:ml-2 p-[0.2rem] shadow-formInputShadow"
                            />
                          </div>
                          <div className="w-full mt-2 flex justify-between items-center">
                            <div className="w-auto sm:w-[50%]"></div>
                            <div className="w-full ml-0 sm:ml-2 flex justify-between items-center">
                              {otpSent && !error ? (
                                <p
                                  className="text-sm text-green-700 font-bold"
                                >
                                  OTP sent to your email
                                </p>
                              ) : (
                                error && (
                                  <p
                                    className="text-sm text-red-700 font-bold"
                                  >
                                    {error}
                                  </p>
                                )
                              )}
                              <p
                                className="text-sm text-black font-bold cursor-pointer"
                                onClick={resendOtp}
                              >
                                Resend OTP
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-center items-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                          className="transform scale-[1.1] accent-[#00000080]"
                        />
                        <p className="text-xs text-start ml-0 sm:ml-2 text-[#000000B2]">
                          I, hereby authorize Investay Realty Services LLP., to
                          contact me. It will override my registry on the NCPR.
                        </p>
                      </div>

                      <button className="bg-black text-primaryColor rounded-md py-2 px-4  font-bold">
                        SUBMIT
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default EnquiryForm;
