import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { RiCellphoneLine } from "react-icons/ri";
import { TfiLocationPin } from "react-icons/tfi";
import Router from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

const index = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_DATA_API_URL;

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { name, email, mobile, message } = formData;
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
    } else if (mobile.replace(/\s/, "").trim() === "") {
      toast.error("Mobile cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (message.replace(/\s/, "").trim() === "") {
      toast.error("Message cannot be empty!", {
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
      try {
        const { data } = await axios.post(`${url}/api/contact`, {
          ...formData,
        });
        if (data.success) {
          toast.success("Message sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setFormData(initialState);
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
    <div className="w-full ">
      <div className="relative bg-contact_bg bg-cover bg-center w-full h-[14rem] flex items-center justify-center">
        <button
          onClick={() => Router.back()}
          className=" ml-5  left-0 top-5 cursor-pointer absolute"
        >
          <ArrowLeftIcon className="h-8 w-8 text-white" />
        </button>
        <p className="text-white text-4xl text-center">Contact</p>
      </div>

      <div className="md_link:px-20 px-4 grid md_link:grid-cols-12 grid-cols-4 gap-10 mt-10">
        <div className="col-span-4 ">
          <p className="text-lg">Send Us Message</p>
          <div className="mt-5 flex flex-col gap-8">
            <div className="flex flex-col  gap-y-2">
              <label
                htmlFor="name"
                className="text-sm w-full sm: text-start text-[#000000B2]"
              >
                Please Enter Your Name.
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-[0.2rem] border-none outline-none focus:outline-none  shadow-formInputShadow"
              />
            </div>{" "}
            <div className="flex flex-col  gap-y-2">
              <label
                htmlFor="email"
                className="text-sm w-full sm: text-start text-[#000000B2]"
              >
                Please Enter Your Valid E-mail ID.
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-[0.2rem] border-none outline-none focus:outline-none  shadow-formInputShadow"
              />
            </div>
            <div className="flex flex-col  gap-y-2">
              <label
                htmlFor="mobile"
                className="text-sm w-full text-start text-[#000000B2]"
              >
                Please Enter Your Phone Number.
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-[0.2rem] border-none outline-none focus:outline-none  shadow-formInputShadow"
              />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="mt-9">
            <p className="text-[#000000B2] text-sm">
              Please enter your message
            </p>
            <textarea
              cols={30}
              rows={9}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 shadow-formInputShadow border-none  focus:outline-none w-full"
            ></textarea>
          </div>
        </div>

        <div className="col-span-4 ">
          <p className="text-lg">Contact Info</p>

          <div className="mt-5 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <AiOutlinePhone className="text-primaryColor h-6 w-6" />
              </div>
              <p className="font-normal">+91 8044334464 </p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <RiCellphoneLine className="text-primaryColor h-6 w-6" />
              </div>
              <p className="font-normal">+91 9900062997 </p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <AiOutlineMail className="text-primaryColor h-6 w-6" />
              </div>
              <p className="font-normal">enquiry@investayrealty.com</p>
            </div>
            <div className="flex items-start gap-2">
              <div>
                {" "}
                <TfiLocationPin className="text-primaryColor h-6 w-6" />
              </div>
              <p className="font-normal">
                No. 10/1, Ground Floor, Lakshminarayana Complex, Palace Road,
                Bangalore, Karnataka, India-560052
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={onSubmitHandler}
          className=" text-[14px] sm:text-base bg-black text-primaryColor rounded-md py-2 px-10 font-bold"
        >
          SUBMIT
        </button>
      </div>
      <div className="bg-star_bg bg-cover bg-no-repeat   w-full h-[15rem] "></div>
    </div>
  );
};

export default index;
