import React, { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuButton } from "../SVGComponents/MenuButton";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { set_getProperties } from "../../redux/property/propertyReducer";
import { set_user } from "../../redux/user/userReducer";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
type TProps = {
  buttonMode: boolean;
};

// buttonMode
export default function NavDropDown({ buttonMode }: TProps) {

  const [isFaq, setIsFaq] = useState(false)
  const dispatch = useDispatch();
  const router = useRouter();
  const reduxUser = useSelector((state: any) => {
    return state.getUserData;
  });

  const onLogout = (e: any) => {
    if (reduxUser?.userRole === "admin") {
      router.push("/admin");
    }
    if (reduxUser?.userRole === "user") {
      router.push("/signin");
    }

    e.preventDefault();
    localStorage.clear();
    deleteCookie("authorization");
    dispatch(set_user({ user: null }));
  };

  useEffect(() => {
    if (router.isReady) {
      const faq = document.getElementById("faq")
      faq ? setIsFaq(true) : setIsFaq(false)
    }
  }, [router.isReady, router.route])
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open, close }) => (
        <>
          <div>
            <Menu.Button className="flex items-center text-webPrimaryColor  xs:ml-4 cursor-pointer ">
              <MenuButton
                color={`${open ? "white" : "black"}`}
                height="40"
                width="40"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 max-h-[350px] sm:max-h-[450px] overflow-y-auto w-60 origin-top-right divide-y divide-gray-100  bg-white inset shadow-dropdown_shadow  focus:outline-none p-1">
              <div className="px-1 py-1 flex flex-col ">
                <Menu.Item>
                  <button
                    onClick={() => {
                      router.push("/");
                    }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    Home
                  </button>
                </Menu.Item>

                <Menu.Item>
                  <button
                    onClick={() => {
                      router.push("/property?Rental=false");
                    }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    Resale
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={() => {
                      router.push("/property?Rental=true");
                    }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    Rental
                  </button>
                </Menu.Item>
                {
                  isFaq ? <Menu.Item>
                    <button
                      onClick={() => {
                        const doc = document.getElementById("faq");
                        doc?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                          inline: "nearest",
                        });
                      }}
                      className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                    >

                      FAQs
                    </button>
                  </Menu.Item> :
                    <Menu.Item>
                      <Link href="/faqs">
                        <button
                          // onClick={() => {
                          //   router.push("/contactus");
                          // }}
                          className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                        >
                          FAQs
                        </button></Link>



                    </Menu.Item>
                }

                <Menu.Item>
                  <button
                    onClick={() => {
                      router.push("/contactus");
                    }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    Contact Us
                  </button>
                </Menu.Item>

                {buttonMode && reduxUser?.token ? (
                  <>
                    <Menu.Item>
                      <Link href="/profile">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Profile
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard/my-shortlists">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Shortlists
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard/my-properties">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Properties
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/profile/seller-owner/details">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Post a Property
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={(e: any) => {
                          close();
                          onLogout(e);
                        }}
                        className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                      >
                        Logout
                      </button>
                    </Menu.Item>
                  </>
                ) : (
                  buttonMode && (
                    <>
                      <Menu.Item>
                        <Link href="/signin">
                          <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                            Sign In
                          </button>
                        </Link>
                      </Menu.Item>

                      <Menu.Item>
                        <Link href="/signup">
                          <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                            Sign Up
                          </button>
                        </Link>
                      </Menu.Item>
                    </>
                  )
                )}

                {!buttonMode && reduxUser?.token && (
                  <>
                    <Menu.Item>
                      <Link href="/profile/myprofile">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Profile
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard/my-shortlists">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Shortlists
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard/my-properties">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Properties
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/profile/seller-owner/details">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Post a Property
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={(e: any) => {
                          close();
                          onLogout(e);
                        }}
                        className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                      >
                        Logout
                      </button>
                    </Menu.Item>
                  </>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
