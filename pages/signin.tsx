import React, { useEffect, useRef, useState } from "react";
import HeaderTitle from "../components/Layout/HeaderTitle";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login } from "../action-creators/user/login";
import { set_user } from "../redux/user/userReducer";
import { toast } from "react-toastify";
import cookie from "cookie";
import { verifyOtp } from "../action-creators/token/verifyOtp";
import LoadingSpinner from "../components/LoadingSpinner";
const otpRegex = /^[0-9]$/;

const initialUserDetails = {
  identifier: "",
};

const Signin = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const [isContinue, setIsContinue] = useState(false);
  const [id, setId] = useState(undefined);
  const [error, setError]: any = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const dispatch = useDispatch();

  const handleKeyPress = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      handleOtpChange(e);
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

  const handleOtpChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (otpRegex.test(value) || value === "") {
      setToken({ ...token, [name]: value });
      if (name === "first" && otpRegex.test(value)) {
        secondRef.current.focus();
      } else if (name === "second" && otpRegex.test(value)) {
        thirdRef.current.focus();
      } else if (name === "third" && otpRegex.test(value)) {
        fourthRef.current.focus();
      }
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const onLogin = async (e: any) => {
    e.preventDefault();
    const { identifier } = userDetails;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // console.log(emailRegex.test(identifier));
    const mobileRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(identifier) && !mobileRegex.test(identifier)) {
      toast.error("Invalid email or mobile number!", {
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
      // if(!isContinue) {
      //   setIsContinue(true);
      // }
      try {
        setIsLoading(true);
        const response = await login(userDetails);
        if (response.success) {
          setIsContinue(true);
          setId(response.token);
          setError(undefined);
          setIsLoading(false);
          // localStorage.setItem("investay_user", JSON.stringify(response.user));
          // dispatch(set_user({ user: response.user }));
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
  };

  const verifyToken = async (e: any) => {
    e.preventDefault();
    const { first, second, third, fourth } = token;
    if (!otpRegex.test(first)) {
      toast.error("Invalid OTP", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!otpRegex.test(second)) {
      toast.error("Invalid OTP", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!otpRegex.test(third)) {
      toast.error("Invalid OTP", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!otpRegex.test(fourth)) {
      toast.error("Invalid OTP", {
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
      const otp = `${token.first}${token.second}${token.third}${token.fourth}`;
      try {
        setIsLoading(true);
        const res = await verifyOtp({ id, otp });
        if (res.success) {
          setError(undefined);
          localStorage.setItem("investay_user", JSON.stringify(res.user));
          dispatch(set_user({ user: res.user }));
          setIsLoading(false);
        }
      } catch (error: any) {
        setError(error.response.data.error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <HeaderTitle pageName={"Signin"} />

      {isLoading && <LoadingSpinner />}

      <form
        onSubmit={isContinue ? verifyToken : onLogin}
        className="min-h-[90vh] w-full flex justify-between bg-Signin_bg bg-cover"
      >
        {!isContinue ? (
          <div className="min-h-[320px] xs:min-h-[380px] w-[300px] xxs:w-[350px] xs:w-[400px] sm:w-[420px] m-auto px-4 xs:px-8 py-4 flex flex-col bg-white">
            <h1 className="mb-6 text-center text-2xl font-[700] text-black">
              Sign in
            </h1>

            <div className="mb-4 flex flex-col justify-start items-start">
              <label htmlFor="identifier" className="text-[#00000080]">
                Email/Mobile:
              </label>
              <input
                type="text"
                name="identifier"
                id="identifier"
                value={userDetails.identifier}
                onChange={handleChange}
                className="w-full border-[1px] border-black p-[0.3rem] outline-none"
              />
              <p className="w-full mt-[0.3rem] text-black text-xs text-center xs:text-start">
                Please enter your registered email or mobile number.
              </p>
            </div>

            {error && (
              <p className="mt-2 text-xs font-[600] text-center text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-[7rem] my-2 mx-auto py-[0.3rem] px-2 text-black font-[700] rounded-md bg-[#FDB813]"
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="min-h-[320px] xs:min-h-[380px] w-[300px] xxs:w-[350px] xs:w-[400px] sm:w-[420px] m-auto px-4 xs:px-8 py-4 flex flex-col items-center bg-white">
            <h1 className="text-center text-2xl font-[700] text-black">
              Sign in
            </h1>

            <div className="w-[95%] mt-6 xs:mt-10 flex flex-col items-center justify-start">
              <div className="w-[80%] text-sm text-gray-400 font-[600] flex justify-between items-center">
                <p>Enter OTP</p>
                <p>Resend OTP</p>
              </div>

              <div className="w-[80%] text-sm flex justify-between items-center">
                <input
                  ref={firstRef}
                  type="text"
                  name="first"
                  value={token.first}
                  onChange={handleOtpChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 text-center border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={secondRef}
                  type="text"
                  name="second"
                  value={token.second}
                  onChange={handleOtpChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 text-center border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={thirdRef}
                  type="text"
                  name="third"
                  value={token.third}
                  onChange={handleOtpChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 text-center border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={fourthRef}
                  type="text"
                  name="fourth"
                  value={token.fourth}
                  onChange={handleOtpChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 text-center border-[1px] border-gray-400 outline-none"
                />
              </div>
            </div>
            <p className="w-full text-center mt-[0.3rem] text-[#00000080] text-xs">
              A 4-digit OTP has been sent to your Mobile number/Email
            </p>

            {error && (
              <p className="mt-2 text-xs font-[600] text-red-600">{error}</p>
            )}

            <button
              type="submit"
              className="w-[7rem] my-6 mx-auto py-[0.3rem] px-2 text-black font-[700] rounded-md bg-[#FDB813]"
            >
              Continue
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default Signin;
Signin.public = (page: React.ReactElement) => {
  return { page };
};

// export const getServerSideProps = async (context: any) => {
//   const mycookie = context?.req?.headers?.cookie || "";
//   const cookieObj = cookie.parse(mycookie);
//   if (cookieObj.authorization) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/dashboard",
//       },
//       props: {},
//     };
//   }
// };
