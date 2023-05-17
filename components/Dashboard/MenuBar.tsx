import React from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
// import MinusIcon from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiMinus } from "react-icons/fi";
import { useRouter } from "next/router";

const MenuBar = ({ toggle, setToggle, buttonMode }: any) => {
  const routes = [
    {
      route_name: "Edit Profile",
      path: "/dashboard/edit-profile",
    },
    {
      route_name: "Your Shortlist",
      path: "/dashboard/my-shortlists",
    },
    {
      route_name: "Owners You Contacted",
      path: "/dashboard/owners-you-contacted",
    },
    {
      route_name: "Your Payments",
      path: "/dashboard/your-payments",
    },
    {
      route_name: "Your Properties",
      path: "/dashboard/my-properties",
    },
    {
      route_name: "Interested In Your Properties",
      path: "/dashboard/interested-properties",
    },
    {
      route_name: "Details",
      path: "/dashboard/details",
      sub_route: [
        {
          route_name: "Upload Documents",
          path: "/dashboard/details/upload_document",
        },
        {
          route_name: "Property Details",
          path: "/dashboard/details/property_details",
        },
        {
          route_name: "Gallery-Society",
          path: "/dashboard/details/gallery_society",
        },
        {
          route_name: "Gallery-Property",
          path: "/dashboard/details/gallery_property",
        },
        {
          route_name: "Booking and Pricing Details",
          path: "/dashboard/details/booking_pricing_details",
        },
        {
          route_name: "Payments Details",
          path: "/dashboard/details/payment_details",
        },
      ],
    },
  ];
  const router = useRouter();
  return (
    <div className={`pr-10 ${toggle ? "absolute top-4 mt-0" : "static mt-8"}`}>
      <ul className="space-y-5">
        {routes.map((route, key) => {
          return route.sub_route ? (
            <li
              key={key}
              className="pl-2 py-1 flex items-center flex-col cursor-pointer"
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <div className="flex justify-between items-end w-full ">
                      <Link
                        href="/dashboard/details"
                        onClick={() => (buttonMode ? setToggle(!toggle) : null)}
                      >
                        Details
                      </Link>
                      <Disclosure.Button>
                        {open ? (
                          <FiMinus className="w-7 h-7 cursor-pointer" />
                        ) : (
                          <PlusIcon className="w-7 h-7 cursor-pointer" />
                        )}
                      </Disclosure.Button>
                    </div>

                    <Disclosure.Panel className="w-full">
                      <div className="mt-10 space-y-10 flex flex-col justify-start w-full">
                        {route.sub_route.map((subRoute, key) => {
                          return (
                            <li key={key}>
                              {" "}
                              <Link
                                key={key}
                                href={subRoute.path}
                                onClick={() =>
                                  buttonMode ? setToggle(!toggle) : null
                                }
                              >
                                {" "}
                                {subRoute.route_name}
                              </Link>
                            </li>
                          );
                        })}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
          ) : (
            <li
              key={key}
              className={`pl-2 py-1 ${
                router.pathname == route.path
                  ? "text-base font-bold border-l-4 border-primaryColor"
                  : ""
              }`}
            >
              <Link
                href={route.path}
                onClick={() => (buttonMode ? setToggle(!toggle) : null)}
              >
                {route.route_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MenuBar;
