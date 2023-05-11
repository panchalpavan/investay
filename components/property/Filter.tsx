import React, { useEffect } from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const initialFilter = {
  configuration: [],
  preferredTenants: [],
  tenancyStatus: [],
  furnishingStatus: [],
  parking: [],
  directionFacing: [],
  propertyType: [],
  constructionStatus: [],
};

type TProps = {
  isDisable: boolean;
  properties: any;
  setProperties: any;
  myproperties: any;
  loading: any;
  filter: any;
  setFilter: any;
  filterProperties: any;
};

export const Filter = ({
  isDisable,
  properties,
  setProperties,
  myproperties,
  loading,
  filter,
  setFilter,
  filterProperties,
}: TProps) => {
  const [active, setActive] = useState("All");
  const Available = ["Online", "Offline"];
  const router = useRouter();
  // const [isDisable, setIsDisable] = useState(false);
  const reduxProperties = useSelector((state: any) => {
    return state.getPropertiesData;
  });

  const fields: any = [
    {
      title: "Configuration",
      field: "configuration",
      val: [
        {
          name: "1 RK",
          value: "1RK",
        },
        {
          name: "4 BHK",
          value: "4BHK",
        },
        {
          name: "1 BHK",
          value: "1BHK",
        },
        {
          name: "4+ BHK",
          value: "4+BHK",
        },
        {
          name: "2 BHK",
          value: "2BHK",
        },
        {
          name: "Penthouse",
          value: "penthouse",
        },
        {
          name: "3 BHK",
          value: "3BHK",
        },
        {
          name: "Villa",
          value: "villa",
        },
        {
          name: "3.5 BHK",
          value: "3.5BHK",
        },
        {
          name: "Plot",
          value: "plot",
        },
      ],
    },
    {
      title: "Preffered Tenants",
      field: "preferredTenants",
      val: [
        {
          name: "Family",
          value: "family",
        },
        {
          name: "Bachelors",
          value: "bachelors",
        },
        {
          name: "Spinsters",
          value: "spinsters",
        },
      ],
    },
    {
      title: "Availability",
      field: "tenancyStatus",
      val: [
        {
          name: "Immediately",
          value: "immediate",
        },
        {
          name: "< 30 Days",
          value: "vaccant",
        },
        {
          name: "> 30 Days",
          value: "unavailable",
        },
      ],
    },
    {
      title: "Furnished",
      field: "furnishingStatus",
      val: [
        {
          name: "Semi",
          value: "semi",
        },
        {
          name: "Full",
          value: "full",
        },
        {
          name: "None",
          value: "none",
        },
      ],
    },
    {
      title: "Parking",
      field: "parking",
      val: [
        {
          name: "Car",
          value: "car",
        },
        {
          name: "Bike",
          value: "bike",
        },
        {
          name: "Both",
          value: "both",
        },
      ],
    },
    {
      title: "Direction Facing",
      field: "directionFacing",
      val: [
        {
          name: "East",
          value: "east",
        },
        {
          name: "West",
          value: "west",
        },
        {
          name: "North",
          value: "north",
        },
        {
          name: "South",
          value: "south",
        },
        {
          name: "North-West",
          value: "north-west",
        },
        {
          name: "North-East",
          value: "north-east",
        },
        {
          name: "South-West",
          value: "south-west",
        },
        {
          name: "South-East",
          value: "south-east",
        },
      ],
    },
    {
      title: "Property Type",
      field: "propertyType",
      val: [
        {
          name: "Apartment/Flat",
          value: "apartment",
        },
        {
          name: "Banglow",
          value: "banglow",
        },
        {
          name: "Independent House",
          value: "independent-house",
        },
        {
          name: "Villa",
          value: "villa",
        },
        {
          name: "Gated Community",
          value: "gated-community",
        },
        {
          name: "Plot",
          value: "plot",
        },
      ],
    },
    {
      title: "Construction Status",
      field: "constructionStatus",
      val: [
        {
          name: "Under Construction(>1Yr)",
          value: "under-construction",
        },
        {
          name: "Nearing Completion(<1Yr)",
          value: "nearing-completion",
        },
        {
          name: "Ready To Move In",
          value: "RTMI",
        },
      ],
    },
  ];

  const handleChange = ({ field, value }: any) => {
    switch (field) {
      case "preferredTenants":
        !filter.preferredTenants.includes(value)
          ? setFilter({
              ...filter,
              preferredTenants: [...filter.preferredTenants, value],
            })
          : setFilter({
              ...filter,
              preferredTenants: filter.preferredTenants.filter(
                (item: any) => item !== value
              ),
            });
        break;
      case "tenancyStatus":
        !filter.tenancyStatus.includes(value)
          ? setFilter({
              ...filter,
              tenancyStatus: [...filter.tenancyStatus, value],
            })
          : setFilter({
              ...filter,
              tenancyStatus: filter.tenancyStatus.filter(
                (item: any) => item !== value
              ),
            });
        break;
      case "furnishingStatus":
        !filter.furnishingStatus.includes(value)
          ? setFilter({
              ...filter,
              furnishingStatus: [...filter.furnishingStatus, value],
            })
          : setFilter({
              ...filter,
              furnishingStatus: filter.furnishingStatus.filter(
                (item: any) => item !== value
              ),
            });
        break;
      case "parking":
        !filter.parking.includes(value)
          ? setFilter({
              ...filter,
              parking: [...filter.parking, value],
            })
          : setFilter({
              ...filter,
              parking: filter.parking.filter((item: any) => item !== value),
            });
        break;
      case "directionFacing":
        !filter.directionFacing.includes(value)
          ? setFilter({
              ...filter,
              directionFacing: [...filter.directionFacing, value],
            })
          : setFilter({
              ...filter,
              directionFacing: filter.directionFacing.filter(
                (item: any) => item !== value
              ),
            });
        break;
      case "propertyType":
        !filter.propertyType.includes(value)
          ? setFilter({
              ...filter,
              propertyType: [...filter.propertyType, value],
            })
          : setFilter({
              ...filter,
              propertyType: filter.propertyType.filter(
                (item: any) => item !== value
              ),
            });
        break;
      case "constructionStatus":
        !filter.constructionStatus.includes(value)
          ? setFilter({
              ...filter,
              constructionStatus: [...filter.constructionStatus, value],
            })
          : setFilter({
              ...filter,
              constructionStatus: filter.constructionStatus.filter(
                (item: any) => item !== value
              ),
            });
        break;
      default:
        break;
    }
  };

  const isChecked = ({ field, value }: any) => {
    switch (field) {
      case "preferredTenants":
        if (filter.preferredTenants.includes(value)) {
          return true;
        }
        return false;
      case "tenancyStatus":
        if (filter.tenancyStatus.includes(value)) {
          return true;
        }
        return false;
      case "furnishingStatus":
        if (filter.furnishingStatus.includes(value)) {
          return true;
        }
        return false;
      case "parking":
        if (filter.parking.includes(value)) {
          return true;
        }
        return false;
      case "directionFacing":
        if (filter.directionFacing.includes(value)) {
          return true;
        }
        return false;
      case "propertyType":
        if (filter.propertyType.includes(value)) {
          return true;
        }
        return false;
      case "constructionStatus":
        if (filter.constructionStatus.includes(value)) {
          return true;
        }
        return false;
      default:
        return false;
    }
  };

  useEffect(() => {
    if (loading) {
      setFilter(initialFilter);
    }
    // console.log("filter: ",filter);
    filterProperties();
  }, [filter, router.isReady, router.query.Rental, loading]);

  return (
    <>
      <div
        className={`border border-black rounded-lg p-5 ${
          isDisable
            ? "bg-white shadow-lg xs:w-[20rem] lg1:w-[30rem] w-[16rem]"
            : "mt-10"
        }`}
      >
        <Listbox
          value={active}
          onChange={(val) => {
            setActive(val);
            setFilter({...filter, propertyLocation: val});
          }}
        >
          <div className="relative flex border border-black w-full py-1 rounded-md">
            <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
              <span className="text-sm ">
                {active}
              </span>

              <span>
                <FiChevronDown className=" h-4 w-4 " />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute   mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none h-[150px] overflow-y-scroll">
                {reduxProperties.locations?.map((val: any, key: any) => {
                  return (
                    <Listbox.Option
                      key={key}
                      className="relative select-none p-2  text-sm  hover:bg-primaryColor hover:text-white text-black cursor-pointer"
                      value={val}
                    >
                      <p>{val}</p>
                    </Listbox.Option>
                  );
                })}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        {fields.map((field: any, key: any) => {
          const myfield = field.field;
          return (
            <div className="mt-5" key={key}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <div className="flex justify-between items-end ">
                      <p className="text-sm font-semibold">{field.title}</p>
                      <Disclosure.Button>
                        {open ? (
                          <MinusIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                        ) : (
                          <PlusIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                        )}
                      </Disclosure.Button>
                    </div>

                    <Disclosure.Panel>
                      <div
                        className={
                          field.title === "Configuration"
                            ? "grid grid-cols-12 gap-x-2"
                            : ""
                        }
                      >
                        {field.val.map((val: any, ind: any) => {
                          const value: any = val.value;
                          return field.title === "Configuration" ? (
                            <div
                              className="mt-4 space-x-5 col-span-6"
                              key={ind}
                            >
                              <div className="flex justify-between">
                                <span className="text-sm  font-light">
                                  {val.name}
                                </span>
                                <input
                                  type="checkbox"
                                  checked={filter.configuration.includes(value)}
                                  onChange={() =>
                                    !filter.configuration.includes(value)
                                      ? setFilter({
                                          ...filter,
                                          configuration: [
                                            ...filter.configuration,
                                            value,
                                          ],
                                        })
                                      : setFilter({
                                          ...filter,
                                          configuration:
                                            filter.configuration.filter(
                                              (item: any) => item !== value
                                            ),
                                        })
                                  }
                                />
                              </div>
                            </div>
                          ) : (
                            <div key={ind}>
                              <div className="flex justify-between mt-4">
                                <span className="text-sm  font-light">
                                  {val.name}
                                </span>
                                <input
                                  type="checkbox"
                                  checked={isChecked({ field: myfield, value })}
                                  onChange={() =>
                                    handleChange({ field: myfield, value })
                                  }
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </>
  );
};
