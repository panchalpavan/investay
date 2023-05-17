import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getToken } from "../../action-creators/token";
import { verifyOtp } from "../../action-creators/token/verifyOtp";
import { set_user } from "../../redux/user/userReducer";
const otpRegex = /^[0-9]$/;

const VerifyOtp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const reduxData = useSelector((state: any) => {
    return state.getUserData;
  });
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const [myOtp, setMyOtp]:any = useState(undefined);
  const [error, setError]:any = useState(undefined);
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
      handleChange(e);
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

  const handleChange = (e: any) => {
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

  const verify = async (e:any)=> {
    e.preventDefault();
    const otp = `${token.first}${token.second}${token.third}${token.fourth}`;
    try {
      const res = await verifyOtp({id: router?.query?.id, otp});
      if(res.success) {
        dispatch(set_user({user: res.user}));
      }
    } catch (error:any) {
      setError(error.response.data.error);
    }
    
  }

  useEffect(() => {
    if(router.isReady) {
      getToken({id: router.query.id}).then((response:any)=> {
        if(response.success) {
          setMyOtp(response.token.otp);
        }
      }).catch((error:any)=> {
        toast.error("OTP expired! Resend Otp and try again!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // router.replace("/");
      })
    }
  }, [router.isReady, router.query.id]);

  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center justify-center bg-Signin_bg">
      <form onSubmit={verify} className="h-auto w-[80%] xxs:w-[70%] xs:w-[60%] sm:w-[50%] md:w-[45%] md_link:w-[40%] lg1:w-[35%] px-[0.2rem] py-6 xxs:px-2 sm:px-4 sm:py-6 lg1:p-6 flex flex-col items-center bg-white">
        <h1 className="text-black text-xl font-[700]">OTP verification</h1>
        <p className="w-[95%] mt-3 text-xs text-center text-gray-400">
          A 4-digit OTP has been sent to your Mobile number/Email
        </p>

        <div className="w-[90%] md:w-[80%] md_link:w-[70%] lg1:w-[65%] mt-4 py-2 px-3 text-black text-sm text-start rounded-md bg-yellow-300">
          OTP has been sent successfully.
        </div>

        <div className="w-[90%] md:w-[80%] md_link:w-[70%] lg1:w-[65%] mt-4 py-2 px-3 text-black text-sm text-start rounded-md bg-yellow-300">
          <p>Your mobile number:</p>
          <div className="w-full flex justify-between items-center">
            <p>+91 1594567536</p>
            {/* <BiEdit className="text-xl text-gray-600" /> */}
          </div>
        </div>

        <div className="w-[90%] md:w-[85%] md_link:w-[75%] lg1:w-[65%] mt-6 flex flex-col items-start justify-start">
          <div className="w-full text-sm text-gray-400 font-[600] flex justify-between items-center">
            <p>Enter OTP</p>
            <p>Resend OTP</p>
          </div>

          <div className="w-full text-sm flex justify-between items-center">
            <input
              ref={firstRef}
              type="text"
              name="first"
              value={token.first}
              onChange={handleChange}
              onKeyUp={handleKeyPress}
              className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
            />
            <input
              ref={secondRef}
              type="text"
              name="second"
              value={token.second}
              onChange={handleChange}
              onKeyUp={handleKeyPress}
              className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
            />
            <input
              ref={thirdRef}
              type="text"
              name="third"
              value={token.third}
              onChange={handleChange}
              onKeyUp={handleKeyPress}
              className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
            />
            <input
              ref={fourthRef}
              type="text"
              name="fourth"
              value={token.fourth}
              onChange={handleChange}
              onKeyUp={handleKeyPress}
              className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
            />
          </div>
        </div>

        {error && <p className="mt-2 text-xs text-center font-[600] text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-[7rem] mt-6 mx-auto py-[0.3rem] px-2 text-black font-[700] rounded-md bg-[#FDB813]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
VerifyOtp.public = (page: React.ReactElement) => {
  return { page };
};

// export const getServerSideProps = async (context:any)=> {
//   const { params } = context;
//   if(params.id) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//       props: {},
//     };
//   }
//   try {
//     const response = await getToken({id:params.id});
//     if(response.success) {
//       return {
//         props: {}
//       }
//     }
//   } catch (error:any) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/"
//       }
//     }
//   }
// }
