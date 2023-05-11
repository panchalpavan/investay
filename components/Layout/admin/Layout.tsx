import React from "react";
import { ArrowLeftIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MenuBarDropDown from "../../profile/MenuBarDropDown";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AdminNavLinks, dashboardPaths, listingPropertyPaths, myProfilePaths, propertyDetailsPaths, reportsPaths } from "../../../utilities/AdminNavLinks";
import SelectDropDown from "./SelectDropDown";

type TProps = {
  children: React.ReactElement;
};
const Layout = (props: TProps) => {
  const router = useRouter();

  const reduxData = useSelector((state: any) => {
    return state.getUserData;
  });

  const [buttonMode, setButtonMode] = useState(false);
  const [active, setActive] = useState([true, false, false, false, false, false, false]);
  const activeArray = [false, false, false, false, false, false, false]

  const handleClick = (path: any, index: any) => {
    activeArray[index] = true;
    setActive([...activeArray]);
    if (router.route === "/admin/reports") {
      reportsPaths.map((reportTab: any) => {
        const hiddenTabs: any = document.getElementById(reportTab?.path)
        hiddenTabs.hidden = true
        const showTab: any = document.getElementById(path);
        showTab.hidden = false
      })
    } else {
      const doc = document.getElementById(path)
      doc?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      })
    }
  };
  useEffect(() => {
    if (router.isReady) {
      if (!reduxData.token) {
        router.replace("/admin");
      }

      setActive([true, false, false, false, false, false, false]);

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
      if (router.route === "/admin/reports") {
        reportsPaths.map((reportTab: any) => {
          const hiddenTabs: any = document.getElementById(reportTab?.path)
          hiddenTabs.hidden = true
          const showTab: any = document.getElementById("unique-user-report");
          showTab.hidden = false
        })
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

        <div className="col-span-12 mt-5 mb-10  border-b-4 pb-2 xs:pb-3 xxs:px-4] text-sm xxs:text-base border-black  flex xxs:flex-row flex0 gap-2 xs:gap-5 ">
          {AdminNavLinks.map((val, i) => {
            return (
              <button
                key={i}
                className={`${router.route === val.path ? "bg-primaryColor" : ""
                  } mx-3 px-3 py-1 whitespace-nowrap`}
              >
                <Link href={val.path}>{val.title}</Link>
              </button>
            );
          })}
        </div>
        {
          router.route.includes("/admin/property-overview") &&
          <div className=" col-span-12 flex flex-wrap md:mb-4 mb-2 text-center">
            {
              propertyDetailsPaths.map((elem, index) => {
                return (
                  <div key={index} className={`${active[index] ? "bg-primaryColor" : ""
                    } px-4 text-center  cursor-pointer  py-1`} onClick={() => handleClick(elem.path, index)}>
                    {elem?.path_name}
                  </div>
                )
              })
            }
          </div>
        }

        {
          router.route === "/admin/listings" ||  router.route === "/admin/reports" ||  router.route === "/admin/booking-and-pricing" ||  router.route === "/admin/add-property" ? null :
            buttonMode ? ((router.route.includes("/admin/property-overview") || router.route.includes("/admin/booking-and-pricing-info")) ?
              <SelectDropDown paths={listingPropertyPaths} />
              : (router.route === "/admin/reports") ?
                <SelectDropDown paths={reportsPaths} />
                : null
            ) : (
              <div className=" flex  col-span-3 h-fit   border-black  border-r-4 gap-y-5 flex-col py-5">
                {
                  router.route === "/admin/myprofile" && (
                    <>
                      {myProfilePaths.map((elem, key) => {
                        return (
                          <div
                            key={key}
                            onClick={() => handleClick(elem.path, key)}
                            className={`${active[key] ? "bg-primaryColor" : ""
                              } pl-10  cursor-pointer  py-1`}
                          >
                            <p>{elem.path_name}</p>
                          </div>
                        );
                      })}
                    </>
                  )}
                {/* {
                  router.route === "/admin/reports" && (
                    <>
                      {reportsPaths.map((elem, key) => {
                        return (
                          <div
                            key={key}
                            onClick={() => handleClick(elem.path, key)}
                            className={`${active[key] ? "bg-primaryColor" : ""
                              } pl-10  cursor-pointer  py-1`}
                          >
                            <p>{elem.path_name}</p>
                          </div>
                        );
                      })}
                    </>
                  )
                } */}
                
                {
                  router.route === "/admin/dashboard" && (
                    <>
                      {dashboardPaths.map((elem, key) => {
                        return (
                          <div
                            onClick={() => handleClick(elem.path, key)}
                            key={key}
                            className={`${active[key] ? "bg-primaryColor" : ""
                              }  pl-10  cursor-pointer  py-1`}
                          >
                            <p>{elem.path_name}</p>
                          </div>
                        );
                      })}
                    </>
                  )
                }

                {
                  (router.route.includes("/admin/property-overview") || router.route.includes("/admin/booking-and-pricing-info") ) && (
                    <>
                      {listingPropertyPaths.map((elem, key) => {
                        return (
                          <Link key={key} href={"/admin/" + elem.path + "/" + router?.query?._id}>
                            <div
                              className={`${router.route.includes("/admin/" + elem.path) ? "bg-primaryColor" : ""
                                } pl-10  cursor-pointer  py-1`}
                            >
                              <p>{elem.path_name}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </>
                  )}

              </div>
            )}
        <div className={`${buttonMode
          ? "col-span-12 pl-0"
          : router.route === "/admin/listings" ||  router.route === "/admin/reports" ||  router.route === "/admin/booking-and-pricing" ||  router.route === "/admin/add-property" ? "col-span-12 pl-0" : "col-span-9 pl-10"
          } h-full`}>
          {props.children}
        </div>


      </div>
    </div>
  );
};
export default Layout;
