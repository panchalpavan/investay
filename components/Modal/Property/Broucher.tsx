import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { countryCodes } from "../../../utilities/countryCodes";
import { toast } from "react-toastify";
import { downLoadFile } from "../../../action-creators/downloads";
import { sendOtp } from "../../../action-creators/downloads/sendOtp";
import LoadingSpinner from "../../LoadingSpinner";

type TProps = {
  isOpen: boolean;
  setIsOpen: Function;
  gallery: any;
  property: any;
  action: any;
  setOnSuccess: any;
};

const initialFormData = {
  name: "",
  email: "",
  countryCode: "+91",
  mobile: "",
};

const Broucher = ({
  isOpen,
  setIsOpen,
  gallery,
  property,
  action,
  setOnSuccess,
}: TProps) => {
  const brochure = gallery.filter((item: any) => item.category === "brochure");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const floorPlan = gallery.filter(
    (item: any) => item.category === "floorPlan"
  );

  const [formData, setFormData] = useState(initialFormData);
  const [isChecked, setIsChecked] = useState(false);
  const [token, setToken] = useState(undefined);
  const [otp, setOtp] = useState("");

  const propertyId = property?._id;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const { name, email, countryCode, mobile } = formData;
    // console.log("id: ", propertyId);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
      toast.error("Invalid email!", {
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
      toast.error("Invalid mobile number!", {
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
      toast.error("Accept the Terms & Conditions to continue!", {
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
          }
        } catch (error: any) {
          // console.log(error.response.data.error);
          setLoading(false);
        }
      } else {
        try {
          setLoading(true);
          // console.log(propertyId);
          const response = await downLoadFile({
            otp,
            name,
            email,
            mobile: `${countryCode}${mobile}`,
            action,
            propertyId,
            token,
          });
          if (response.success) {
            let anchor = document.createElement("a");
            anchor.setAttribute(
              "href",
              action === "brochure"
                ? `/assets/brochure/${brochure[0]?.link}`
                : `/assets/floor-plans/${floorPlan[0]?.link}`
            );
            if (brochure[0]) {
              anchor.style.display = "none";
              document.body.appendChild(anchor);
              anchor.download =
                action === "brochure" ? brochure[0]?.link : floorPlan[0]?.link;
              anchor.click();
              document.body.removeChild(anchor);
            }
            setFormData(initialFormData);
            setIsChecked(false);
            setIsOpen(false);
            setToken(undefined);
            setOtp("");
            setOnSuccess(true);
            setLoading(false);
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
          setLoading(false);
        }
      }
    }
  };

  const resendOtp = async () => {
    const { email, countryCode, mobile } = formData;
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
      }
    } catch (error: any) {
      // console.log(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[80] "
          onClose={() => {
            setFormData(initialFormData);
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
            <div className="flex min-h-full items-center justify-center text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transition-all w-full max-w-4xl xxs:max-w-3xl mt-20 mb-10 overflow-x-hidden  relative  bg-Boucher_bg p-8">
                  <button
                    className="w-10 h-10 absolute right-8 top-8 xxs:right-10 xxs:top-10 z-[51]"
                    onClick={() => {
                      setFormData(initialFormData);
                      setIsChecked(false);
                      setIsOpen(false);
                      setToken(undefined);
                      setOtp("");
                      setOnSuccess(false);
                      setIsOpen(false);
                    }}
                  >
                    <XMarkIcon className="w-6 h-6 rounded-full border-2 border-black" />
                  </button>
                  <div className="rounded-lg bg-[#FEFEFEE8] px-6 py-8 xxs:p-10 shadow-formShadow">
                    <p className="font-bold text-lg mt-2 xxs:mt-0 xxs:text-xl xs:text-2xl text-center ">
                      DOWNLOAD FORM
                    </p>
                    <form className="mt-10 space-y-8">
                      <div className="w-full sm:w-[90%] md_link:w-[80%] flex sm:flex-row flex-col items-start sm:items-center justify-start">
                        <label
                          htmlFor="name"
                          className="w-auto sm:w-[50%] text-start text-base xs:text-lg text-[#00000080]"
                        >
                          Full Name* :
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border-none outline-none focous:outline-none ml-0 sm:ml-2 p-[0.2rem] shadow-formInputShadow"
                        />
                      </div>

                      <div className="w-full sm:w-[90%] md_link:w-[80%] flex sm:flex-row flex-col items-start sm:items-center justify-start">
                        <label
                          htmlFor="email"
                          className="w-auto sm:w-[50%] text-start text-base xs:text-lg text-[#00000080]"
                        >
                          Email* :
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-none outline-none focous:outline-none ml-0 sm:ml-2 p-[0.2rem] shadow-formInputShadow"
                        />
                      </div>

                      <div className="w-full sm:w-[90%] md_link:w-[80%] flex sm:flex-row flex-col items-start sm:items-center justify-start">
                        <label
                          htmlFor="mobile"
                          className="w-auto sm:w-[50%] text-start text-base xs:text-lg text-[#00000080]"
                        >
                          Mobile
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="bg-transparent outline-none"
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
                          type="number"
                          name="mobile"
                          id="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          className="w-full border-none outline-none focous:outline-none ml-0 sm:ml-2 p-[0.2rem] shadow-formInputShadow"
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
                              type="text"
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
                              {otpSent && (
                                <p
                                  className="text-sm text-green-700 font-bold"
                                  onClick={resendOtp}
                                >
                                  OTP sent to your email
                                </p>
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

                      <div className="flex justify-start items-start">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                          className="accent-[#00000080] transform scale-[1.1] mt-[0.2rem]"
                        />
                        <p className="text-xs text-start ml-2 text-[#000000B2]">
                          I, hereby authorize Investay Realty Services LLP., to
                          contact me. It will override my registry on the NCPR.
                        </p>
                      </div>
                    </form>

                    {/* <a href={`/assets/brochure/${brochure[0]?.link}`} download> */}
                    <button
                      onClick={onSubmitHandler}
                      className="mt-10 bg-black text-primaryColor rounded-md py-2 px-4  font-bold"
                    >
                      SUBMIT
                    </button>
                    {/* </a> */}
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
export default Broucher;
