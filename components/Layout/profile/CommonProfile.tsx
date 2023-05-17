import React from "react";
import { ArrowLeftIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MenuBarDropDown from "../../profile/MenuBarDropDown";
import Link from "next/link";
import { useSelector } from "react-redux";

type TProps = {
  children: React.ReactElement;
};
const CommonProfile = (props: TProps) => {
  const router = useRouter();
  const reduxData = useSelector((state: any) => {
    return state.getUserData;
  });
  const [buttonMode, setButtonMode] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState([
    {
      path_name: "Personal Info",
      path: "personal-info",
      active: true,
    },
    {
      path_name: "KYC Details",
      path: "kyc-details",
      active: false,
    },
    {
      path_name: "Bank Account Details",
      path: "bank-acc-details",
      active: false,
    },
    {
      path_name: "Make Payments",
      path: "make-payments",
      active: false,
    },
    {
      path_name: "Invoice Details",
      path: "invoice-details",
      active: false,
    },
    {
      path_name: "Receipt Details",
      path: "receipt-details",
      active: false,
    },
  ]);

  const [path2, setPath2] = useState([
    {
      path_name: "My Shortlists",
      path: "myshort-lists",
      active: true,
    },
    {
      path_name: "My Enquiries",
      path: "my-enquiries",
      active: false,
    },
    {
      path_name: "My Property Details",
      path: "my-property-details",
      active: false,
    },
  ]);

  const [path3, setPath3] = useState([
    {
      path_name: "My Listing",
      path: "my-listing",
      active: true,
    },
    {
      path_name: "Interested Clients",
      path: "interested-clients",
      active: false,
    },
  ]);

  const [active, setActive] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (id: any, index: any) => {
    if (index == 0) {
      setActive([true, false, false, false, false, false, false, false]);
    } else if (index == 1) {
      setActive([false, true, false, false, false, false, false, false]);
    } else if (index == 2) {
      setActive([false, false, true, false, false, false, false, false]);
    } else if (index == 3) {
      setActive([false, false, false, true, false, false, false, false]);
    } else if (index == 4) {
      setActive([false, false, false, false, true, false, false, false]);
    } else if (index == 5) {
      setActive([false, false, false, false, false, true, false, false]);
    } else if (index == 6) {
      setActive([false, false, false, false, false, false, true, false]);
    } else if (index == 7) {
      setActive([false, false, false, false, false, false, false, true]);
    }

    const doc = document.getElementById(id);

    doc?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useEffect(() => {
    if (router.isReady) {
      if(!reduxData.token) {
        router.replace("/signin");
      }
      setActive([true, false, false, false, false, false, false, false]);

      //TODO: for real time window resize
      window.addEventListener("resize", function (event) {
        if (window.innerWidth < 1273) {
          setButtonMode(true);
        } else {
          setButtonMode(false);
        }
      });
      //TODO: for the first time when window is rendered
      if (window.innerWidth < 1273) {
        setButtonMode(true);
      } else {
        setButtonMode(false);
      }
    }
  }, [router.isReady, reduxData, router.route]);
  return (
    <div className=" md_link:px-20 px-4 mt-6">
      <button
        onClick={() => router.back()}
        className="absolute left-3 top-[4.5rem] sm:left-5 sm:top-20 cursor-pointer z-[10]"
      >
        <ArrowLeftIcon className="h-8 w-8 text-black" />
      </button>
      <div className="grid grid-cols-12">
        <div className="col-span-12 mt-5 mb-10  border-b-4 pb-2 xs:pb-3 xxs:px-4] text-sm xxs:text-base border-black  flex items-center gap-2 xs:gap-5 ">
          <div
            className={`${
              router.route === "/profile/myprofile" ? "bg-primaryColor" : ""
            } px-2 py-1`}
          >
            <Link href="/profile/myprofile">My profile</Link>
          </div>
          <div
            className={`${
              router.route === "/profile/buyer-tenant" ? "bg-primaryColor" : ""
            } px-2 py-1`}
          >
            <Link href="/profile/buyer-tenant">Buyer/Tenant</Link>
          </div>
          <div
            className={`${
              router.route === "/profile/seller-owner" ? "bg-primaryColor" : ""
            } px-2 py-1`}
          >
            <Link href="/profile/seller-owner">Seller/Owner</Link>
          </div>
        </div>

        {buttonMode ? (
          // <MenuBarDropDown path={path} />
          router.route === "/profile/seller-owner" ? (
            <MenuBarDropDown path={path3} />
          ) : router.route === "/profile/buyer-tenant" ? (
            <MenuBarDropDown path={path2} />
          ) : router.route === "/profile/seller-owner/details" ? (
            ""
          ) : (
            <MenuBarDropDown path={path} />
          )
        ) : (
          <div
            className={`${
              [
                "/profile/seller-owner/details",
                "/profile/seller-owner/booking-pricing",
              ].indexOf(router.route) !== -1
                ? "hidden"
                : "flex"
            } col-span-3 h-fit   border-black  border-r-4 gap-y-5 flex-col py-5`}
          >
            {router.route === "/profile/seller-owner" ? (
              <>
                {path3.map((elem, key) => {
                  return (
                    <div
                      key={key}
                      onClick={() => handleClick(elem.path, key)}
                      className={`${
                        active[key] ? "bg-primaryColor" : ""
                      } pl-10  cursor-pointer  py-1`}
                    >
                      <p>{elem.path_name}</p>
                    </div>
                  );
                })}
              </>
            ) : router.route === "/profile/buyer-tenant" ? (
              <>
                {path2.map((elem, key) => {
                  return (
                    <div
                      onClick={() => handleClick(elem.path, key)}
                      key={key}
                      className={`${
                        active[key] ? "bg-primaryColor" : ""
                      }  pl-10  cursor-pointer  py-1`}
                    >
                      <p>{elem.path_name}</p>
                    </div>
                  );
                })}
              </>
            ) : router.route === "/profile/seller-owner/details" ? (
              <></>
            ) : (
              // <div
              //   className={`bg-primaryColor pl-10 font-[600] cursor-pointer  py-1`}
              // >
              //   <p>Property Details</p>
              // </div>
              path.map((val, key) => {
                return (
                  <div
                    key={key}
                    onClick={() => handleClick(val.path, key)}
                    className={`${
                      active[key] ? "bg-primaryColor" : ""
                    } pl-10  cursor-pointer  py-1`}
                  >
                    <p>{val.path_name}</p>
                  </div>
                );
              })
            )}
          </div>
        )}

        <div
          className={`${
            [
              "/profile/seller-owner/details",
              "/profile/seller-owner/booking-pricing",
            ].indexOf(router.route) === -1
              ? buttonMode
                ? "col-span-12 pl-0"
                : "col-span-9 pl-10"
              : `col-span-12 pl-0`
          } h-full`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CommonProfile;
