import React, { useState } from "react";
import HeaderTitle from "../../components/Layout/HeaderTitle";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { login } from "../../action-creators/admin/login";
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useDispatch } from "react-redux";
import { set_user } from "../../redux/user/userReducer";

const index = () => {
  const [pwdShow, setPwdShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    userId: "",
    password: "",
  });
  const router = useRouter()
  const dispatch = useDispatch();


  const handleSubmit = async () => {
    if (!userData.userId || !userData.password) {
      toast.error("Please fill the credentials.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    try {
      setIsLoading(true);

      const response = await login({
        ...userData,
      });
      if (response.success) {
        localStorage.setItem("investay_user", JSON.stringify(response.user));
        dispatch(set_user({ user: response.user }));

        setIsLoading(false);
        router.push("/admin/myprofile")
      }
    }
    catch (err: any) {
      toast.error(err?.response?.data?.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsLoading(false);

    }
  };

  return (
    <>
      <HeaderTitle pageName={"Admin Login"} />
      {isLoading && <LoadingSpinner />}
      <div className="min-h-[100vh] w-full flex justify-center items-center bg-Signin_bg bg-cover">
        <div className="bg-white  w-[90vw] sm:w-[60vw] p-10 overflow-y-auto">
          <form
            className="w-full flex flex-col justify-center items-center"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <p className="text-lg font-semibold">Admin Log In</p>
            <div className="mt-10">
              <p className="text-base font-light">Unique Id</p>
              <input
                type="text"
                className="h-9 mt-2 border border-secondaryColor w-full sm:w-[20rem] px-2 focus:outline-none"
                value={userData.userId}
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    userId: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="mt-4">
              <p className="text-base font-light">Password</p>
              <div className="h-9 mt-2 border border-secondaryColor w-full sm:w-[20rem] flex items-center">
                <input
                  type={pwdShow ? "text" : "password"}
                  className="focus:outline-none mx-2 w-full"
                  value={userData.password}
                  onChange={(e) => {
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }));
                  }}
                />
                {pwdShow ? (
                  <FaEye
                    className="ml-auto mr-2 cursor-pointer"
                    onClick={() => setPwdShow(!pwdShow)}
                  />
                ) : (
                  <FaEyeSlash
                    className="ml-auto mr-2 cursor-pointer"
                    onClick={() => setPwdShow(!pwdShow)}
                  />
                )}
              </div>
            </div>

            <div className="w-full flex justify-center mt-10">
              <button
                type="submit"
                className="bg-primaryColor px-8 py-2 rounded-md cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;

index.public = (page: React.ReactElement) => {
  return { page };
};
