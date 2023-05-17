import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { reportsPaths } from '../../utilities/AdminNavLinks';

type TProps = {
  path: any
};

const MenuBarDropDown = ({ path }: TProps) => {
  const router = useRouter()
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(path[0].path_name)
  }, [router.route])
  const handleClick = (selectedPath: any) => {
    const doc = document.getElementById(selectedPath)
    doc?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    })

  }

  return (
    <div className='mb-5 z-10'>
      {
        router.route === "profile/seller-owner/details" ? <div className='bg-primaryColor w-fit px-5 py-2   rounded-md text-base font-semibold'>Details</div> :

          <Listbox value={active} onChange={(val: React.SetStateAction<string>) => setActive(val)}>
            <div className="relative flex border border-secondaryLightColor w-60 py-1  ">
              <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                <span className="text-sm  text-secondaryLightColor">
                  {active}
                </span>

                <span>
                  <FiChevronDown className=" h-3 w-3 " />
                </span>
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                  {path.map((val: any, key: any) => {
                    return (
                      <Listbox.Option
                        id={val.path}
                        key={key}
                        className="relative select-none p-2   text-sm text-secondaryLightColor cursor-pointer"
                        value={val.path_name}
                      >
                        {(router.route.includes("/admin/property-overview") || router.route.includes("/admin/booking-and-pricing-info")) ? <>
                          <Link href={"/admin/" + val.path + "/" + router?.query?._id}>
                            <p
                              onClick={() => {
                                handleClick(val.path)
                              }}
                            >{val.path_name}</p>
                          </Link>
                        </> : <p
                          onClick={() => {
                            handleClick(val.path)
                          }}
                        >{val.path_name}</p>

                        }
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
      }
    </div>
  )
}

export default MenuBarDropDown