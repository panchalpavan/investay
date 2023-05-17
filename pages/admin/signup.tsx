import React, { useState } from "react";
import HeaderTitle from "../../components/Layout/HeaderTitle";
import { signup } from "../../action-creators/admin/signup";
import { countryCodes } from "../../utilities/countryCodes";
import moment from "moment";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
// import { countries, states } from "../../utilities/postProperty";
import { Country, State }  from 'country-state-city';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    prefix: "mr",
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    userId: "",
    password: "",
    designation: "",
    dob: "",
    companyName: "",
    gender: "male",
    maritalStatus: "single",
    age: "",
    nationality: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [errors, setErrors] = useState(true);
  const [terms, setTerms] = useState(false);
  const router = useRouter()

  const handleSubmit = async () => {
    let keys = Object.keys(userData);
    Object.values(userData).every((val, i) => {
      if (!val) {
        toast.error(`Please fill the field ${keys[i]}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setErrors(true);
        return false;
      }
      setErrors(false);
      return true;
    });
    if (errors) {
      return;
    }
    if (!terms) {
      toast.error(`Please agree to Terms and Conditions`, {
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
    if (moment().diff(moment(userData.dob, "YYYY-MM-DD"), "days", false) < 0) {
      toast.error(`Please enter a valid Date of Birth`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }


    if (!errors) {
      try {
        setLoading(true);
        const response = await signup({
          ...userData,
        });
        if (response.success === true) {
          toast.success("Admin Created Successfullly", {
            position: "top-right",
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          setTimeout(() => {
            setLoading(false)
            router.push("/admin")
          }, 5000);
        }
      } catch (err: any) {
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
        setLoading(false)
      }
    }

  };

  return (
    <>
      <HeaderTitle pageName={"Admin Sign Up"} />
      <div className="h-full w-full  flex justify-center bg-Signin_bg bg-cover">
        <div className="bg-white w-full max-w-3xl overflow-y-auto px-2 py-4 my-16">
          <p className="text-xl font-bold text-center">Let's Create Account</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 mx-4 gap-x-4 gap-y-2">
              <div>
                <select
                  value={userData.prefix}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      prefix: e.target.value,
                    }))
                  }
                  className="border border-black h-9 font-light focus:outline-none mb-4"
                >
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="miss">Miss</option>
                </select>
              </div>
              <div />
              <div>
                <p className="font-light text-base">First Name:</p>
                <input
                  type="text"
                  value={userData.firstName}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Last Name:</p>
                <input
                  type="text"
                  value={userData.lastName}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Email:</p>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="text-base font-light">
                  Mobile:
                  <select
                    name="countryCode"
                    id="countryCode"
                    value={userData.countryCode}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        countryCode: e.target.value,
                      }))
                    }
                    className="outline-none bg-transparent ml-2"
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
                <input
                  type="number"
                  value={userData.mobile}
                  onChange={(e) => {
                    if (e.target.value.length < 11) {
                      setUserData((prev) => ({
                        ...prev,
                        mobile: e.target.value,
                      }));
                    }
                  }}
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">User ID:</p>
                <input
                  type="text"
                  value={userData.userId}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      userId: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Create a password:</p>
                <input
                  type="password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Designation:</p>
                <input
                  type="text"
                  value={userData.designation}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      designation: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Date of Birth:</p>
                <input
                  type="date"
                  value={userData.dob || new Date()}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setUserData((prev) => ({
                      ...prev,
                      dob: e.target.value,
                    }));
                  }}
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Company Name:</p>
                <input
                  type="text"
                  value={userData.companyName}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      companyName: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Gender:</p>
                <select
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                  className="border border-black h-9 font-light focus:outline-none w-full"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <p className="font-light text-base">Marital Status:</p>
                <select
                  value={userData.maritalStatus}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      maritalStatus: e.target.value,
                    }))
                  }
                  className="border border-black h-9 font-light focus:outline-none w-full"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="divorced">Divorced</option>
                  <option value="separated">Separated</option>
                </select>
              </div>
              <div>
                <p className="font-light text-base">Age:</p>
                <input
                  type="number"
                  value={userData.age}
                  onChange={(e) => {
                    if (e.target.value.length < 4) {
                      setUserData((prev) => ({
                        ...prev,
                        age: e.target.value,
                      }));
                    }
                  }}
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Nationality:</p>
                <input
                  type="text"
                  value={userData.nationality}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      nationality: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Address*:</p>
                <input
                  type="text"
                  value={userData.address}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">City*:</p>
                <input
                  type="text"
                  value={userData.city}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div>
                <p className="font-light text-base">Country*:</p>
                <select
                  value={userData.country}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
                  }
                  className="border border-black h-9 w-full font-light focus:outline-none mb-4"
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

              </div>
              <div>
                <p className="font-light text-base">State*:</p>
                <select
                  value={userData.state}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      state: e.target.value,
                    }))
                  }
                  className="border border-black h-9 w-full font-light focus:outline-none "
                >
                  <option value="" disabled >Select a State</option>
                  {
                    State?.getStatesOfCountry(userData?.country).map((state, index) => {
                      return (
                        <option key={index} value={state.isoCode} >{state.name}</option>
                      )
                    })
                  }
                </select>
              </div>
             
              <div>
                <p className="font-light text-base">Pincode*:</p>
                <input
                  type="text"
                  value={userData.pincode}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      pincode: e.target.value,
                    }))
                  }
                  className="h-9 border border-black w-full p-2 focus:outline-none"
                />
              </div>
              <div className="flex items-center mt-3">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="border border-black"
                  defaultChecked={terms}
                  onChange={(e) => {
                    setTerms(!terms);
                  }}
                />
                <label
                  htmlFor=""
                  className="text-xs font-semibold ml-2 uppercase"
                >
                  Terms and Conditions
                </label>
              </div>
            </div>
            <div className="w-full flex justify-center my-16">
              <button
                disabled={loading}
                type="submit"
                className={`bg-primaryColor h-10 w-28 flex justify-center items-center rounded-md ${loading ? "cursor-progress" : "cursor-pointer"
                  } `}
              >
                {loading ? (
                  <FiLoader className="h-5 w-5 text-black animate-spin" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
