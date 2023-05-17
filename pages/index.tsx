import React, { useEffect, useState } from "react";
import AnimationCard1 from "../components/Home/AnimationCard1";
import AnimationCard2 from "../components/Home/AnimationCard2";
import AnimationCard3 from "../components/Home/AnimationCard3";
import AnimationCard4 from "../components/Home/AnimationCard4";
import AnimationCard5 from "../components/Home/AnimationCard5";
import { Hero } from "../components/Home/Hero";
import { Testimonial } from "../components/Home/Testimonial";
import { useRef } from "react";
import { useRouter } from "next/router";
import HeaderTitle from "../components/Layout/HeaderTitle";
import { addEnquiry } from "../action-creators/enquiry/addEnquiry";
import { toast } from "react-toastify";
import ThankYou from "../components/Modal/ThankYou";
import LoadingSpinner from "../components/LoadingSpinner";
import Dropdown from "react-dropdown";
const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};

import { countryCodes } from "../utilities/countryCodes";
import { sendOtp } from "../action-creators/downloads/sendOtp";
import Head from "next/head";
import ConfigDefaults from "../Config/ConfigDefaults";

const initialEnquiryDetails: any = {
  name: "",
  email: "",
  mobile: "",
  channelPartnerName: undefined,
  source: "",
  query: "",
  countryCode: "+91",
};

const Home = () => {
  const router = useRouter();
  const animeRef: any = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [enquiryDetails, setEnquiryDetails] = useState(initialEnquiryDetails);
  const [checked, setIsChecked] = useState(false);
  const [role, setRole] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");
  const [token, setToken] = useState(undefined);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(undefined);
  const [onSuccess, setOnSuccess] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleValChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEnquiryDetails({ ...enquiryDetails, [name]: value });
  };

  const onAddEnquiry = async (e: any) => {
    e.preventDefault();
    const { name, email, countryCode, mobile, source, query } = enquiryDetails;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!checked) {
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
            setLoading(false);
            setError(error.response.data.error);
            console.log(error.response.data.error);
          }
        } else {
          setLoading(true);
          try {
            const response = await addEnquiry({
              ...enquiryDetails,
              role,
              serviceNeeded,
              otp,
            });
            if (response.success) {
              setEnquiryDetails(initialEnquiryDetails);
              setRole("");
              setServiceNeeded("");
              setIsChecked(false);
              setToken(undefined);
              setOtp("");
              setError(undefined);
              setOnSuccess(true);
              setOtpSent(false);
              setLoading(false);
            }
          } catch (error: any) {
            setError(error.response.data.error);
            setLoading(false);
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
      setLoading(false);
      setError(error.response.data.error);
      console.log(error.response.data.error);
    }
  };

  useEffect(() => {
    let observer = new window.IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log("visible------------------");
          setIsVisible(true);
          self.unobserve(entry.target);
        }
      });
    }, config);
    observer.observe(animeRef.current);
  }, [router.isReady]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <ThankYou isOpen={onSuccess} setIsOpen={setOnSuccess} />
      <Head>
        <title>{`${ConfigDefaults.name.slugName} `}</title>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />

        <link
          rel="apple-touch-icon"
          href={"/assets/images/favIcon.svg"}
          key="apple"
        />
        <link rel="icon" href={"/assets/images/favIcon.svg"} key="favicon" />
      </Head>
      <Hero />
      <div>
        <div className="md_link:px-20 px-4 ">
          <p className="sm:text-2xl  text-xl font-bold  text-primaryColor text-center ">
            ABOUT INVESTAY
          </p>
          <p className="font-light text-base mt-8 text-center">
            Investay Realty Services LLP is a professionally run service
            organization created with the objective of providing a one- stop
            solution for real estate investors in leasing or reselling their
            real estate properties. Supported by the very reputed 5 decade old
            brand Century Real Estate Holdings Pvt. Ltd., Investay is an
            organization that intends to bring transparency, professionalism and
            customer experience to a process that has relied on organic/personal
            references and local area brokers in the past.
          </p>
        </div>
        <div className="sm:mt-20 mt-8 md_link:px-20 px-4 ">
          <p className="sm:text-2xl  text-xl font-bold  text-primaryColor text-center ">
            INVESTAY ADVANTAGE
          </p>
          <p className="font-light text-base mt-8 text-center">
            A subsidiary arm of Century Residential portfolio helping
            prospective buyers + existing customer in resale (existing property)
            + Rental (Century property) + UMS (Century property) An arm to
            ensure revenue, sales push, customer experience and one stop
            solution, directly or indirectly helping Century residential sales
            push + Brand Positioning. One stop solution for customers - pre
            sales and Post-handover services.
          </p>
        </div>
        <div className="md_link:px-20 px-4 " ref={animeRef}>
          <div
            className={`${
              isVisible ? "flex" : "hidden"
            } justify-center flex-wrap mt-20 `}
          >
            <AnimationCard1 />
            <AnimationCard2 />
            <AnimationCard3 />
            <AnimationCard4 />
            <AnimationCard5 />
          </div>
        </div>
        <div className="sm:mt-20 mt-8 md_link:px-20 px-4 ">
          <p className="sm:text-2xl  text-xl font-bold  text-primaryColor text-center uppercase ">
            LeaderShip Team
          </p>
          <div className="mt-8 grid sm:grid-cols-12 grid-cols-6 gap-10">
            <div className="col-span-6 flex flex-col gap-5">
              <p className="text-center font-bold ">
                Maninder Chhabra (Director)
              </p>
              {/* <div className="flex flex-col gap-5"> */}
              <p className="text-base text-secondaryLightColor font-light text-justify">
                Maninder is an IIM Bangalore alumnus & a Gold medallist
                engineer; He brings with him over 15 years of experience in
                various roles in the real estate sector with top developers in
                Mumbai and Bengaluru, including the Lodha Group & Shriram
                Properties through their fairy-tale growth journeys.
              </p>
              <p className="text-base text-secondaryLightColor font-light text-justify">
                Maninder is leading the creation of Investay Realty backed by
                the parent company Century Real Estate, since he firmly believes
                in the need for such a professional end-to-end service provider
                in the resale/rental market, and sees a huge demand for it as
                Indian Realty continues its bull run. Customers across sectors
                are increasingly becoming used to transparent & tech-led
                efficient service experiences; and there is no reason for them
                to not expect the same when it comes to the resale/rental space.
              </p>
              {/* </div> */}
            </div>
            <div className="col-span-6 flex flex-col gap-5">
              <p className="text-center font-bold ">
                Ajay K Singh (Business Head)
              </p>
              <p className="text-base text-secondaryLightColor font-light text-justify">
                Ajay is the Business Head of Investay Realty. He has been
                leading Sales and sourcing at Century Real Estate for over 3
                years, and is among the most dynamic leaders in the real estate
                sector at the moment. He is responsible for driving the targeted
                topline growth of 2X every 2 years at Century. As a part of the
                leadership team of Century Real estate, he is also responsible
                for strengthening and growing brand Century into a profitable
                premium real estate brand.
              </p>
              <p className="text-base text-secondaryLightColor font-light text-justify">
                Ajay comes with over 17 years of experience across FMCG, media
                and real estate companies, including the recently listed Shriram
                Properties.
              </p>
              <p className="text-base text-secondaryLightColor font-light text-justify">
                Investay Realty Services LLP, the brain child of Ajay, is a
                subsidiary company of Century Real Estate, aimed at providing a
                one stop solution for all property related needs of investors
                and property seekers. It's unique value proposition makes it all
                set for multifold growth in the coming 3-4 years.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:mt-20 mt-8   ">
          <div className="relative  bg-EnquiryForm_bg bg-cover overflow-x-hidden xl:px-[15rem] base:px-[5rem] px-5 py-16">
            <div className="bg-[#FEFEFEE8] p-4  md:p-6  rounded-xl shadow-formShadow">
              <p className="font-bold text-2xl text-center ">ENQUIRY FORM</p>
              <form onSubmit={onAddEnquiry} className="mt-10 space-y-8">
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
                    onChange={handleValChange}
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
                    onChange={handleValChange}
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
                      onChange={handleValChange}
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
                    {/* <Dropdown
                      options={countryCodes}
                      value={prefix}
                      onChange={(e) => setPrefix(e.value)}
                      placeholder="Mr."
                      className="w-[80px] text-sm text-[#00000080] border-[1px] border-black mb-4 "
                    /> */}
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    value={enquiryDetails.mobile}
                    onChange={handleValChange}
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
                        className="transform scale-[1.5] mr-2 accent-[#00000080]"
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label htmlFor="seller" className="text-[#000000B2]">
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
                        className="transform scale-[1.5] mr-2 accent-[#00000080]"
                        onChange={(e) => setRole(e.target.value)}
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
                        className="transform scale-[1.5] mr-2 accent-[#00000080]"
                        onChange={(e) => setRole(e.target.value)}
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
                      htmlFor="partner"
                      className="text-base w-full sm:w-[50%] text-start text-[#000000B2]"
                    >
                      Channel Partner Name
                    </label>
                    <input
                      type="text"
                      name="partner"
                      id="partner"
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
                        value="rental"
                        checked={serviceNeeded === "rental"}
                        onChange={(e) => setServiceNeeded(e.target.value)}
                        className="transform scale-[1.5] mr-2 accent-[#00000080]"
                      />
                      <label htmlFor="rental" className="text-[#000000B2]">
                        Rental
                      </label>
                    </div>

                    <div className="flex justify-start items-center">
                      <input
                        type="radio"
                        name="serviceNeeded"
                        id="resale"
                        value="resale"
                        checked={serviceNeeded === "resale"}
                        onChange={(e) => setServiceNeeded(e.target.value)}
                        className="transform scale-[1.5] mr-2 accent-[#00000080]"
                      />
                      <label htmlFor="resale" className="text-[#000000B2]">
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
                    onChange={handleValChange}
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
                    onChange={handleValChange}
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
                          <p className="text-sm text-green-700 font-bold">
                            OTP sent to your email
                          </p>
                        ) : (
                          error && (
                            <p className="text-sm text-red-700 font-bold">
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
                    checked={checked}
                    onChange={() => setIsChecked(!checked)}
                    className="transform scale-[1.1] accent-[#00000080]"
                  />
                  <p className="text-xs text-start ml-0 sm:ml-2 text-[#000000B2]">
                    I, hereby authorize Investay Realty Services LLP., to
                    contact me. It will override my registry on the NCPR.
                  </p>
                </div>
                <div className="flex justify-center">
                  {" "}
                  <button
                    type="submit"
                    className="bg-black text-primaryColor rounded-md py-2 px-4  font-bold"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Testimonial />
      </div>
    </>
  );
};

export default Home;
Home.public1 = (page: React.ReactElement) => {
  return { page };
};
