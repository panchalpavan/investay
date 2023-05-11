import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";
import { Calendar } from "react-calendar";
import { CiCalendar } from "react-icons/ci";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/20/solid";

import {
  available_From,
  categories,
  configurations,
  construction_Status,
  countries,
  directionFacings,
  floorings,
  furnishingTypes,
  gatedCommunities,
  parkingTypes,
  propertyAddressZones,
  propertyAges,
  propertyTypes,
  property_Limits,
  states,
  tenancyTypes,
  tenancy_ExitStatus,
  tenancy_Status,
  waterSupplies,
} from "../../utilities/postProperty";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setProperty } from "../../redux/property/propertyReducer";

const Details = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [launch, setLaunch] = useState(false);
  const [postedDate, setPostedDate] = useState(new Date());
  const [launchDate, setLaunchDate] = useState(new Date());
  const [post, setPost] = useState(false);

  // ****************************FORM STATES************************************************ \\
  const [overview, setOverview] = useState({
    category: categories[0].value,
    gatedCommunity: gatedCommunities[0].value,
    propertyType: propertyTypes[0].value,
    sba: 1,
    plotArea: 1,
    carpetArea: 1,
    plotConfiguration: configurations[0].value,
    constructionStatus: construction_Status[0].value,
    directionFacing: directionFacings[0].value,
    configuration: configurations[0].value,
    furnishingType: furnishingTypes[0].value,
    availableFrom: available_From[0].value,
    postedOn: postedDate.toDateString(),
    propertyId: "",
    cpName: "",
    propertyLimits: property_Limits[0].value,
    reraNo: "",
  });

  const [projectDetails, setProjectDetails] = useState({
    propertyAge: propertyAges[0].value,
    projectName: "",
    builderName: "",
    waterSupply: waterSupplies[0].value,
    launchDate: launchDate.toDateString(),
    visitorParking: false,
    brochure: "",
  });
  const [gallery, setGallery] = useState([]) as any;
  const [documents, setDocuments] = useState({
    onlineRegistrationForm: "",
    resaleForm: "",
    rentalForm: "",
    rentalAgreement: "",
    propertyInspectionReport: "",
    mou: "",
  });

  console.log('documents', documents)

  const [unitDetails, setUnitDetails] = useState({
    noOfOwners: 1,
    khataInOwnersName: false,
    lastTaxPaid: "",
    ownerName: "",
    ownerContact: "",
    towerWing: "",
    phase: "",
    floor: "",
    totalFloor: 1,
    unitName: "",
    doorFacing: "",
    noOfBathrooms: 1,
    parking: false,
    balcony: false,
    flooring: floorings[0].value,
    noOfParking: 1,
    parkingType: parkingTypes[0].value,
    propertyAddressZone: propertyAddressZones[0].value,
    city: "",
    state: states[0].value,
    propertyAddress: "",
    country: countries[0].value,
    nearestLandmark: "",
    propertyLocation: "",
    pincode: 123456,
    lat: 1,
    lng: 1,
    snagDetails: "",
    repairs: "",
  });

  const [amenities, setAmenities] = useState({
    cyclingTrack: false,
    yogaDeck: false,
    outdoorGym: false,
    indoorGym: false,
    yogaRoom: false,
    spa: false,
    steamAndSauna: false,
    kidsPool: false,
    swimmingPool: false,
    aerobicsStudio: false,
    badmintonCourt: false,
    basketballCourt: false,
    volleyballCourt: false,
    squashCourt: false,
    tennisCourt: false,
    tableTennis: false,
    boxCricket: false,
    golf: false,
    multipurposeCourt: false,
    billiards: false,
    skatingRink: false,
    playArea: false,
    library: false,
    creche: false,
    danceStudio: false,
    videoGameRoom: false,
    adventureSports: false,
    oat: false,
    miniTheatre: false,
    preFunctionHall: false,
    banquetHall: false,
    cafe: false,
    barbecuePit: false,
    parks: false,
    seniorCitizenCorner: false,
    natureTrail: false,
    terraceGarden: false,
    ac: false,
    intercom: false,
    internet: false,
    petPark: false,
    gatedSecurity: false,
    cctv: false,
    visitorParking: false,
    fireAlarm: false,
    fireExtinguisher: false,
    waterSprinkler: false,
    rainwaterHarvesting: false,
    organicWasteConverter: false,
    solarHeater: false,
    solarLighting: false,
    electricCarCharging: false,
    sewageTreatmentPlant: false,
    atm: false,
    lift: false,
    supermarket: false,
    coWorkingSpace: false,
    pharmacy: false,
    salon: false,
    conferenceRoom: false,
    laundry: false,
    groceryStore: false,
    houseKeeping: false,
    powerBackup: false,
    gasPipeline: false,
    garbageChute: false,
  });

  const [tenancyInformation, setTenancyInformation] = useState({
    tenancyStatus: tenancy_Status[0].value,
    tenantType: tenancyTypes[0].value,
    securityDeposit: 1,
    tenancyExitStatus: tenancy_ExitStatus[0].value,
    petsAllowed: false,
    nonVegAllowed: false,
  });

  const handleOverviewChange = (e: any) => {
    const { name, value } = e.target;
    setOverview({ ...overview, [name]: value });
  };

  const handleProjectDetailsChange = (e: any) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleUnitDetailsChange = (e: any) => {
    const { name, value } = e.target;
    setUnitDetails({ ...unitDetails, [name]: value });
  };
  const handleGalleryMenuChange = (e: any) => {
    const image = e.target.files[0] ;
    setGallery([...gallery,image])
  };
  const handlePropertyDocsChange = (e: any) => {
    console.log(e.target.name, e.target.files)
    const doc = e.target.files[0] ;
    setDocuments({...documents, [e.target.name]: doc})
  };
  const handleTenantInfoCange = (e: any) => {
    const { name, value } = e.target;
    setTenancyInformation({ ...tenancyInformation, [name]: value });
  };

  const onSubmitHandler = async (e: any) => {
    console.log('GALLERY', gallery)
    e.preventDefault();
    dispatch(
      setProperty({
        ...overview,
        ...projectDetails,
        ...unitDetails,
        amenities,
        ...tenancyInformation,
        gallery,
        documents: {...documents}
      })
    );
    if(router.route.includes("profile")){
      router.push("/profile/seller-owner/booking-pricing");
    }else{
      router.push("/admin/booking-and-pricing");

    }
  };

  return (
    <div
      id="my-property-details"
      className="flex flex-col items-start justify-start"
      
    >
      <Disclosure as={"div"} className="w-full" defaultOpen={true} id="personal-info">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Property Overview</p>
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Service Availed{" "}
                  </p>
                  <Listbox
                    value={overview.category}
                    onChange={(val) =>
                      setOverview({ ...overview, category: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none  rounded-md w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            categories.find(
                              (item: any) => item.value === overview.category
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20]  mt-9 w-full bg-white rounded-md  shadow-md border border-secondaryLightColor focus:outline-none">
                          {categories.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Gated Community
                  </p>
                  <Listbox
                    value={overview.gatedCommunity}
                    onChange={(val) =>
                      setOverview({ ...overview, gatedCommunity: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none  rounded-md w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            gatedCommunities.find(
                              (item: any) =>
                                item.value === overview.gatedCommunity
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20]  mt-9 w-full bg-white rounded-md  shadow-md border border-secondaryLightColor focus:outline-none">
                          {gatedCommunities.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Type
                  </p>
                  <Listbox
                    value={overview.propertyType}
                    onChange={(val) =>
                      setOverview({ ...overview, propertyType: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base capitalize text-secondaryLightColor">
                          {
                            propertyTypes.find(
                              (item: any) =>
                                item.value === overview.propertyType
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {propertyTypes.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    SBA (In Sq.Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] mt-1 px-2 flex items-center  rounded-md">
                    <input
                      type="number"
                      name="sba"
                      value={overview.sba}
                      onChange={handleOverviewChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width="10" height="10" color="black" /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Plot Area (In Sq.Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 mt-1 px-2 flex items-center   rounded-md">
                    <input
                      type="number"
                      name="plotArea"
                      value={overview.plotArea}
                      onChange={handleOverviewChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width="10" height="10" color="black" /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Carpet Area (In Sq.Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] mt-1 px-2 flex items-center  rounded-md">
                    <input
                      type="number"
                      name="carpetArea"
                      value={overview.carpetArea}
                      onChange={handleOverviewChange}
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width="10" height="10" color="black" /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Plot Configuration
                  </p>
                  <Listbox
                    value={overview.plotConfiguration}
                    onChange={(val) =>
                      setOverview({ ...overview, plotConfiguration: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            configurations.find(
                              (item: any) =>
                                item.value === overview.plotConfiguration
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {configurations.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Construction Status
                  </p>
                  <Listbox
                    value={overview.constructionStatus}
                    onChange={(val) =>
                      setOverview({ ...overview, constructionStatus: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            construction_Status.find(
                              (item: any) =>
                                item.value === overview.constructionStatus
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {construction_Status.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Direction Facing
                  </p>
                  <Listbox
                    value={overview.directionFacing}
                    onChange={(val) =>
                      setOverview({ ...overview, directionFacing: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            directionFacings.find(
                              (item: any) =>
                                item.value === overview.directionFacing
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {directionFacings.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Configuration
                  </p>
                  <Listbox
                    value={overview.configuration}
                    onChange={(val) =>
                      setOverview({ ...overview, configuration: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            configurations.find(
                              (item: any) =>
                                item.value === overview.configuration
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {configurations.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Furnishing Type
                  </p>
                  <Listbox
                    value={overview.furnishingType}
                    onChange={(val) =>
                      setOverview({ ...overview, furnishingType: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            furnishingTypes.find(
                              (item: any) =>
                                item.value === overview.furnishingType
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {furnishingTypes.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Available from Date
                  </p>
                  <Listbox
                    value={overview.availableFrom}
                    onChange={(val) =>
                      setOverview({ ...overview, availableFrom: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            available_From.find(
                              (item: any) =>
                                item.value === overview.availableFrom
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {available_From.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12 relative">
                  <p className="text-xs  text-secondaryLightColor">
                    Posted on Date
                  </p>
                  <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                    <div
                      onClick={() => setPost(!post)}
                      className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2"
                    >
                      <span className="text-base  text-secondaryLightColor">
                        {overview.postedOn}
                      </span>
                      <span>
                        <CiCalendar className=" h-5 w-5 " />
                      </span>
                    </div>
                  </div>
                  {post && (
                    <div className="absolute z-10">
                      <Calendar
                        onChange={(e: any) => {
                          setPostedDate(new Date(e));
                          setOverview({
                            ...overview,
                            postedOn: new Date(e).toDateString(),
                          });
                          setPost(!post);
                        }}
                        value={postedDate}
                      />
                    </div>
                  )}
                  {/* <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val}
                              >
                                <p>{val}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox> */}
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property ID
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="propertyId"
                      value={overview.propertyId}
                      onChange={handleOverviewChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">CP Name</p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="cpName"
                      value={overview.cpName}
                      onChange={handleOverviewChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Limits
                  </p>
                  <Listbox
                    value={overview.propertyLimits}
                    onChange={(val) =>
                      setOverview({ ...overview, propertyLimits: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            property_Limits.find(
                              (item: any) =>
                                item.value === overview.propertyLimits
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {property_Limits.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">RERA No. </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="reraNo"
                      value={overview.reraNo}
                      onChange={handleOverviewChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full"  id="personal-info">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Project Details</p>
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Age(In Yrs)
                  </p>
                  <Listbox
                    value={projectDetails.propertyAge}
                    onChange={(val) =>
                      setProjectDetails({ ...projectDetails, propertyAge: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            propertyAges.find(
                              (item: any) =>
                                item.value === projectDetails.propertyAge
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {propertyAges.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Project Name
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="projectName"
                      value={projectDetails.projectName}
                      onChange={handleProjectDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Builder/Developer Name
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="builderName"
                      value={projectDetails.builderName}
                      onChange={handleProjectDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Water Supply
                  </p>
                  <Listbox
                    value={projectDetails.waterSupply}
                    onChange={(val) =>
                      setProjectDetails({ ...projectDetails, waterSupply: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {
                            waterSupplies.find(
                              (item: any) =>
                                item.value === projectDetails.waterSupply
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {waterSupplies.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12 relative">
                  <p className="text-xs  text-secondaryLightColor">
                    Launch Date
                  </p>
                  <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                    <div
                      onClick={() => setLaunch(!launch)}
                      className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2"
                    >
                      <span className="text-base  text-secondaryLightColor">
                        {projectDetails.launchDate}
                      </span>
                      <span>
                        <CiCalendar className=" h-5 w-5 " />
                      </span>
                    </div>
                  </div>
                  {launch && (
                    <div className="absolute ">
                      <Calendar
                        onChange={(e: any) => {
                          setLaunchDate(new Date(e));
                          setProjectDetails({
                            ...projectDetails,
                            launchDate: new Date(e).toDateString(),
                          });
                          setLaunch(!launch);
                        }}
                        value={launchDate}
                      />
                    </div>
                  )}
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Visitor Parking
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <div
                      onClick={() =>
                        setProjectDetails({
                          ...projectDetails,
                          visitorParking: true,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        projectDetails.visitorParking
                          ? "bg-[#fdb813]"
                          : "bg-white"
                      }`}
                    >
                      Yes
                    </div>
                    <div
                      onClick={() =>
                        setProjectDetails({
                          ...projectDetails,
                          visitorParking: false,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        !projectDetails.visitorParking
                          ? "bg-[#fdb813]"
                          : "bg-white"
                      }`}
                    >
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Brochure</p>
                  <div
                    className={`border border-secondaryLightColor text-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md ${
                      projectDetails.brochure === "" || !projectDetails.brochure
                        ? "bg-white"
                        : "bg-[#fdb813]"
                    }`}
                  >
                    <label
                      htmlFor="inputTag"
                      className="flex justify-center w-full h-full"
                    >
                      Upload
                      <input
                        id="inputTag"
                        type="file"  name="file"
                        accept="application/pdf"
                        onChange={(e: any) =>
                          setProjectDetails({
                            ...projectDetails,
                            brochure: e.target.files[0],
                          })
                        }
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Unit Details</p>
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Number of Owners
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="noOfOwners"
                      value={unitDetails.noOfOwners}
                      onChange={handleUnitDetailsChange}
                      className="w-full border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Khata in Owner&apos;s name
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <div
                      onClick={() =>
                        setUnitDetails({
                          ...unitDetails,
                          khataInOwnersName: true,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        unitDetails.khataInOwnersName
                          ? "bg-[#fdb813]"
                          : "bg-white"
                      }`}
                    >
                      Yes
                    </div>
                    <div
                      onClick={() =>
                        setUnitDetails({
                          ...unitDetails,
                          khataInOwnersName: false,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        !unitDetails.khataInOwnersName
                          ? "bg-[#fdb813]"
                          : "bg-white"
                      }`}
                    >
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Last Tax paid date
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="lastTaxPaid"
                      value={unitDetails.lastTaxPaid}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Owner/s or GPA holder name
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="ownerName"
                      value={unitDetails.ownerName}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Owner/s or GPA holder contact details
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="ownerContact"
                      value={unitDetails.ownerContact}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Tower/Wing name
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="towerWing"
                      value={unitDetails.towerWing}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Phase </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="phase"
                      value={unitDetails.phase}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Floor </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="floor"
                      value={unitDetails.floor}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Total Floor
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="totalFloor"
                      value={unitDetails.totalFloor}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Unit No/Unit Name
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="unitName"
                      value={unitDetails.unitName}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Door Facing
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="doorFacing"
                      value={unitDetails.doorFacing}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    No. of Bathrooms
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="noOfBathrooms"
                      value={unitDetails.noOfBathrooms}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor"> Parking </p>
                  <div className="flex items-center justify-between mt-1">
                    <div
                      onClick={() =>
                        setUnitDetails({
                          ...unitDetails,
                          parking: true,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        unitDetails.parking ? "bg-[#fdb813]" : "bg-white"
                      }`}
                    >
                      Yes
                    </div>
                    <div
                      onClick={() =>
                        setUnitDetails({
                          ...unitDetails,
                          parking: false,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        !unitDetails.parking ? "bg-[#fdb813]" : "bg-white"
                      }`}
                    >
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor"> Balcony </p>
                  <div className="flex items-center justify-between mt-1">
                    <div
                      onClick={() =>
                        setUnitDetails({
                          ...unitDetails,
                          balcony: true,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        unitDetails.balcony ? "bg-[#fdb813]" : "bg-white"
                      }`}
                    >
                      Yes
                    </div>
                    <div
                      onClick={() =>
                        setUnitDetails({
                          ...unitDetails,
                          balcony: false,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        !unitDetails.balcony ? "bg-[#fdb813]" : "bg-white"
                      }`}
                    >
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Flooring </p>
                  <Listbox
                    value={unitDetails.flooring}
                    onChange={(val) =>
                      setUnitDetails({ ...unitDetails, flooring: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            floorings.find(
                              (item: any) => item.value === unitDetails.flooring
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {floorings.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    No. of Parking
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="noOfParking"
                      value={unitDetails.noOfParking}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Parking Type
                  </p>
                  <Listbox
                    value={unitDetails.parkingType}
                    onChange={(val) =>
                      setUnitDetails({ ...unitDetails, parkingType: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            parkingTypes.find(
                              (item: any) =>
                                item.value === unitDetails.parkingType
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {parkingTypes.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12 relative">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Address Zone
                  </p>
                  <Listbox
                    value={unitDetails.propertyAddressZone}
                    onChange={(val) =>
                      setUnitDetails({
                        ...unitDetails,
                        propertyAddressZone: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            propertyAddressZones.find(
                              (item: any) =>
                                item.value === unitDetails.propertyAddressZone
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {propertyAddressZones.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">City </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="city"
                      value={unitDetails.city}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">State </p>
                  <Listbox
                    value={unitDetails.state}
                    onChange={(val) =>
                      setUnitDetails({ ...unitDetails, state: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            states.find(
                              (item: any) => item.value === unitDetails.state
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border h-[150px] overflow-y-scroll border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {states.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Address
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="propertyAddress"
                      value={unitDetails.propertyAddress}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property location
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="propertyLocation"
                      value={unitDetails.propertyLocation}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Country </p>
                  <Listbox
                    value={unitDetails.country}
                    onChange={(val) =>
                      setUnitDetails({ ...unitDetails, country: val })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            countries.find(
                              (item: any) => item.value === unitDetails.country
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {countries.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Nearset Landmark
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="nearestLandmark"
                      value={unitDetails.nearestLandmark}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Pincode </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="pincode"
                      value={unitDetails.pincode}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Longitude</p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="lng"
                      value={unitDetails.lng}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Latitude </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="lat"
                      value={unitDetails.lat}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className=" col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Details of snags in property
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="snagDetails"
                      value={unitDetails.snagDetails}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className=" col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Repairs/Fixes by owner prior to SD registration{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      name="repairs"
                      value={unitDetails.repairs}
                      onChange={handleUnitDetailsChange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold"> Gallery Menu</p>
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="col-span-12 px-2 ">
                  <p className="text-base font-semibold">Gallery Property</p>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery"  onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Floor Plan
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Master Plan
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Entrance
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Living Room
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bedroom
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Closet
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Kitchen
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Utility
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bathrooms
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Dining
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Terrace Area
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Balcony
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Pooja
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Servant Room
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Study
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Staircase
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Garden
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Garage/Parking
                      </p>
                    </div>

                    
                  </div>
                </div>

                <div className="col-span-12 px-2 mt-5 ">
                  <p className="text-base font-semibold">Gallery Society </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Elevation
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Common Areas
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Outdoor Amenities
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Indoor Amenities
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Neighbourhood
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" onChange={handleGalleryMenuChange} className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Walkthrough Video
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 px-2 mt-5 ">
                  <p className="text-base font-semibold">User Images</p>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 cursor-pointer " />
                        <input id="inputTag" type="file"  name="gallery" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Upload Images
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Amenities</p>
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-10 my-5 ">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Health & Wellness</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="cyclingTrack"
                        checked={amenities.cyclingTrack}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            cyclingTrack: !amenities.cyclingTrack,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="cyclingTrack" className="ml-2">
                        Cycling & Jogging track
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="yogaDeck"
                        checked={amenities.yogaDeck}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            yogaDeck: !amenities.yogaDeck,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="yogaDeck" className="ml-2">
                        Yoga & Meditation deck
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="outdoorGym"
                        checked={amenities.outdoorGym}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            outdoorGym: !amenities.outdoorGym,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="outdoorGym" className="ml-2">
                        Outdoor Gym
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="indoorGym"
                        checked={amenities.indoorGym}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            indoorGym: !amenities.indoorGym,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="indoorGym" className="ml-2">
                        Indoor Gym
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="yogaRoom"
                        checked={amenities.yogaRoom}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            yogaRoom: !amenities.yogaRoom,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="yogaRoom" className="ml-2">
                        Yoga Room
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="spa"
                        checked={amenities.spa}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            spa: !amenities.spa,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="spa" className="ml-2">
                        Spa
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="steamAndSauna"
                        checked={amenities.steamAndSauna}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            steamAndSauna: !amenities.steamAndSauna,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="steamAndSauna" className="ml-2">
                        Steam & Sauna
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="kidsPool"
                        checked={amenities.kidsPool}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            kidsPool: !amenities.kidsPool,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="kidsPool" className="ml-2">
                        Kids Pool
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="swimmingPool"
                        checked={amenities.swimmingPool}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            swimmingPool: !amenities.swimmingPool,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="swimmingPool" className="ml-2">
                        Swimming Pool
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="aerobicsStudio"
                        checked={amenities.aerobicsStudio}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            aerobicsStudio: !amenities.aerobicsStudio,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="aerobicsStudio" className="ml-2">
                        Aerobics Studio
                      </label>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Sports</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="badmintonCourt"
                        checked={amenities.badmintonCourt}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            badmintonCourt: !amenities.badmintonCourt,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="badmintonCourt" className="ml-2">
                        Badminton Court
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="basketballCourt"
                        checked={amenities.basketballCourt}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            basketballCourt: !amenities.basketballCourt,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="basketballCourt" className="ml-2">
                        Basketball Court
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="volleyballCourt"
                        checked={amenities.volleyballCourt}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            volleyballCourt: !amenities.volleyballCourt,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="volleyballCourt" className="ml-2">
                        Volleyball Court
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="squashCourt"
                        checked={amenities.squashCourt}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            squashCourt: !amenities.squashCourt,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="squashCourt" className="ml-2">
                        Squash Court
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="tennisCourt"
                        checked={amenities.tennisCourt}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            tennisCourt: !amenities.tennisCourt,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="tennisCourt" className="ml-2">
                        Tennis Court
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="tableTennis"
                        checked={amenities.tableTennis}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            tableTennis: !amenities.tableTennis,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="tableTennis" className="ml-2">
                        Table Tennis
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="boxCricket"
                        checked={amenities.boxCricket}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            boxCricket: !amenities.boxCricket,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="boxCricket" className="ml-2">
                        Box Cricket
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="golf"
                        checked={amenities.golf}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            golf: !amenities.golf,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="golf" className="ml-2">
                        Golf Putting Greens
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="multipurposeCourt"
                        checked={amenities.multipurposeCourt}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            multipurposeCourt: !amenities.multipurposeCourt,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="multipurposeCourt" className="ml-2">
                        Multipurpose Court
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="billiards"
                        checked={amenities.billiards}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            billiards: !amenities.billiards,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="billiards" className="ml-2">
                        Billiards
                      </label>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Learning & Games</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="skatingRink"
                        checked={amenities.skatingRink}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            skatingRink: !amenities.skatingRink,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="skatingRink" className="ml-2">
                        Skating Rink
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="playArea"
                        checked={amenities.playArea}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            playArea: !amenities.playArea,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="playArea" className="ml-2">
                        Children&apos;s Play Area
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="library"
                        checked={amenities.library}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            library: !amenities.library,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="library" className="ml-2">
                        Library
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="creche"
                        checked={amenities.creche}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            creche: !amenities.creche,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="creche" className="ml-2">
                        Creche
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="danceStudio"
                        checked={amenities.danceStudio}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            danceStudio: !amenities.danceStudio,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="danceStudio" className="ml-2">
                        Dance Studio
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="videoGameRoom"
                        checked={amenities.videoGameRoom}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            videoGameRoom: !amenities.videoGameRoom,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="videoGameRoom" className="ml-2">
                        Video Game Room
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="adventureSports"
                        checked={amenities.adventureSports}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            adventureSports: !amenities.adventureSports,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="adventureSports" className="ml-2">
                        Adventure Sports
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">
                    Leisure & Entertainment
                  </p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="oat"
                        checked={amenities.oat}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            oat: !amenities.oat,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="oat" className="ml-2">
                        Amphitheatre/OAT
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="miniTheatre"
                        checked={amenities.miniTheatre}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            miniTheatre: !amenities.miniTheatre,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="miniTheatre" className="ml-2">
                        Mini Theatre
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="preFunctionHall"
                        checked={amenities.preFunctionHall}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            preFunctionHall: !amenities.preFunctionHall,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="preFunctionHall" className="ml-2">
                        Pre Function Hall
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="banquetHall"
                        checked={amenities.banquetHall}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            banquetHall: !amenities.banquetHall,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="banquetHall" className="ml-2">
                        Banquet Hall
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="cafe"
                        checked={amenities.cafe}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            cafe: !amenities.cafe,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="cafe" className="ml-2">
                        Cafe
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Nature & Lifestyle</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="barbecuePit"
                        checked={amenities.barbecuePit}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            barbecuePit: !amenities.barbecuePit,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="barbecuePit" className="ml-2">
                        Barbecue pit
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="parks"
                        checked={amenities.parks}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            parks: !amenities.parks,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="parks" className="ml-2">
                        Parks & Themed gardens
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="seniorCitizenCorner"
                        checked={amenities.seniorCitizenCorner}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            seniorCitizenCorner: !amenities.seniorCitizenCorner,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="seniorCitizenCorner" className="ml-2">
                        Senior Citizen corner
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="natureTrail"
                        checked={amenities.natureTrail}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            natureTrail: !amenities.natureTrail,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="natureTrail" className="ml-2">
                        Nature Trail
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="terraceGarden"
                        checked={amenities.terraceGarden}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            terraceGarden: !amenities.terraceGarden,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="terraceGarden" className="ml-2">
                        Terrace Garden
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="ac"
                        checked={amenities.ac}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            ac: !amenities.ac,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="ac" className="ml-2">
                        Air Conditioner
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="intercom"
                        checked={amenities.intercom}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            intercom: !amenities.intercom,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="intercom" className="ml-2">
                        Intercom
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="internet"
                        checked={amenities.internet}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            internet: !amenities.internet,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="internet" className="ml-2">
                        Internet Service Provider
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="petPark"
                        checked={amenities.petPark}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            petPark: !amenities.petPark,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="petPark" className="ml-2">
                        Pet park
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Safety & Security</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="gatedSecurity"
                        checked={amenities.gatedSecurity}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            gatedSecurity: !amenities.gatedSecurity,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="gatedSecurity" className="ml-2">
                        Gated Security
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="cctv"
                        checked={amenities.cctv}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            cctv: !amenities.cctv,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="cctv" className="ml-2">
                        CCTV
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="visitorParking"
                        checked={amenities.visitorParking}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            visitorParking: !amenities.visitorParking,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="visitorParking" className="ml-2">
                        Visitor Parking
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="fireAlarm"
                        checked={amenities.fireAlarm}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            fireAlarm: !amenities.fireAlarm,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="fireAlarm" className="ml-2">
                        Fire Alarm
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="fireExtinguisher"
                        checked={amenities.fireExtinguisher}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            fireExtinguisher: !amenities.fireExtinguisher,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="fireExtinguisher" className="ml-2">
                        Fire Extinguisher
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="waterSprinkler"
                        checked={amenities.waterSprinkler}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            waterSprinkler: !amenities.waterSprinkler,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="waterSprinkler" className="ml-2">
                        Water Sprinkler
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Sustainability</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="rainwaterHarvesting"
                        checked={amenities.rainwaterHarvesting}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            rainwaterHarvesting: !amenities.rainwaterHarvesting,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="rainwaterHarvesting" className="ml-2">
                        Rainwater Harvesting
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="organicWasteConverter"
                        checked={amenities.organicWasteConverter}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            organicWasteConverter:
                              !amenities.organicWasteConverter,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="organicWasteConverter" className="ml-2">
                        Organic Waste converter
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="solarHeater"
                        checked={amenities.solarHeater}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            solarHeater: !amenities.solarHeater,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="solarHeater" className="ml-2">
                        Solar Heater
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="solarLighting"
                        checked={amenities.solarLighting}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            solarLighting: !amenities.solarLighting,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="solarLighting" className="ml-2">
                        Solar Lighting
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="electricCarCharging"
                        checked={amenities.electricCarCharging}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            electricCarCharging: !amenities.electricCarCharging,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="electricCarCharging" className="ml-2">
                        Electric Car Charging
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="sewageTreatmentPlant"
                        checked={amenities.sewageTreatmentPlant}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            sewageTreatmentPlant:
                              !amenities.sewageTreatmentPlant,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="sewageTreatmentPlant" className="ml-2">
                        Sewage Treatment Plant
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Services</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="atm"
                        checked={amenities.atm}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            atm: !amenities.atm,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="atm" className="ml-2">
                        ATM
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="lift"
                        checked={amenities.lift}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            lift: !amenities.lift,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="lift" className="ml-2">
                        Lift
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="supermarket"
                        checked={amenities.supermarket}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            supermarket: !amenities.supermarket,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="supermarket" className="ml-2">
                        Super Market
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="coWorkingSpace"
                        checked={amenities.coWorkingSpace}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            coWorkingSpace: !amenities.coWorkingSpace,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="coWorkingSpace" className="ml-2">
                        Co-working Spaces
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="pharmacy"
                        checked={amenities.pharmacy}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            pharmacy: !amenities.pharmacy,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="pharmacy" className="ml-2">
                        Pharmacy
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="salon"
                        checked={amenities.salon}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            salon: !amenities.salon,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="salon" className="ml-2">
                        Salon
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="conferenceRoom"
                        checked={amenities.conferenceRoom}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            conferenceRoom: !amenities.conferenceRoom,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="conferenceRoom" className="ml-2">
                        Business Center/Conference Room
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="laundry"
                        checked={amenities.laundry}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            laundry: !amenities.laundry,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="laundry" className="ml-2">
                        Laundry Services/Ironing Shop
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="groceryStore"
                        checked={amenities.groceryStore}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            groceryStore: !amenities.groceryStore,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="groceryStore" className="ml-2">
                        Convenience/Grocery Store
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="houseKeeping"
                        checked={amenities.houseKeeping}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            houseKeeping: !amenities.houseKeeping,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="houseKeeping" className="ml-2">
                        Housekeeping
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="powerBackup"
                        checked={amenities.powerBackup}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            powerBackup: !amenities.powerBackup,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="powerBackup" className="ml-2">
                        Power Backup
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="gasPipeline"
                        checked={amenities.gasPipeline}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            gasPipeline: !amenities.gasPipeline,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="gasPipeline" className="ml-2">
                        Gas Pipeline
                      </label>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input
                        type="checkbox"
                        id="garbageChute"
                        checked={amenities.garbageChute}
                        onChange={() => {
                          setAmenities({
                            ...amenities,
                            garbageChute: !amenities.garbageChute,
                          });
                        }}
                        className="w-5 h-5"
                      />
                      <label htmlFor="garbageChute" className="ml-2">
                        Garbage Chute
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Property Documents</p>
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-10 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    Online Registration Form{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file" name="onlineRegistrationForm" accept=".jpg,.jpeg,.png,.pdf"  onChange={handlePropertyDocsChange} className="hidden " />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    Reservation Form - Resale{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file" name="resaleForm" accept=".jpg,.jpeg,.png,.pdf"  onChange={handlePropertyDocsChange} className="hidden" />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    {" "}
                    Rental Agreement{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file"  name="rentalAgreement" accept=".jpg,.jpeg,.png,.pdf"  onChange={handlePropertyDocsChange} className="hidden " />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    Property Inspection Report{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file"  name="propertyInspectionReport" accept=".jpg,.jpeg,.png,.pdf"  onChange={handlePropertyDocsChange} className="hidden " />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">MOU </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file"  name="mou" accept=".jpg,.jpeg,.png,.pdf"  onChange={handlePropertyDocsChange} className="hidden " />
                    </label>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Tenant Information</p>
              {open ? (
                <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              ) : (
                <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
              )}
            </Disclosure.Button>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Tenancy Status
                  </p>
                  <Listbox
                    value={tenancyInformation.tenancyStatus}
                    onChange={(val) =>
                      setTenancyInformation({
                        ...tenancyInformation,
                        tenancyStatus: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            tenancy_Status.find(
                              (item: any) =>
                                item.value === tenancyInformation.tenancyStatus
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {tenancy_Status.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Tenant Type
                  </p>
                  <Listbox
                    value={tenancyInformation.tenantType}
                    onChange={(val) =>
                      setTenancyInformation({
                        ...tenancyInformation,
                        tenantType: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            tenancyTypes.find(
                              (item: any) =>
                                item.value === tenancyInformation.tenantType
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {tenancyTypes.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Tenant Security Deposit Amount
                  </p>
                  <div className="border border-secondaryLightColor  py-[0.3rem] px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="number"
                      name="securityDeposit"
                      value={tenancyInformation.securityDeposit}
                      onChange={handleTenantInfoCange}
                      className="w-full  border-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Tenancy Exit Status
                  </p>
                  <Listbox
                    value={tenancyInformation.tenancyExitStatus}
                    onChange={(val) =>
                      setTenancyInformation({
                        ...tenancyInformation,
                        tenancyExitStatus: val,
                      })
                    }
                  >
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.3rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {
                            tenancy_ExitStatus.find(
                              (item: any) =>
                                item.value ===
                                tenancyInformation.tenancyExitStatus
                            )?.name
                          }
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {tenancy_ExitStatus.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
                                value={val.value}
                              >
                                <p>{val.name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Pets Allowed
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <div
                      onClick={() =>
                        setTenancyInformation({
                          ...tenancyInformation,
                          petsAllowed: true,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        tenancyInformation.petsAllowed
                          ? "bg-[#fdb813]"
                          : "bg-white"
                      }`}
                    >
                      Yes
                    </div>
                    <div
                      onClick={() =>
                        setTenancyInformation({
                          ...tenancyInformation,
                          petsAllowed: false,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        !tenancyInformation.petsAllowed
                          ? "bg-[#fdb813]"
                          : "bg-white"
                      }`}
                    >
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Non-Veg Allowed
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <div
                      onClick={() =>
                        setTenancyInformation({
                          ...tenancyInformation,
                          nonVegAllowed: true,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        tenancyInformation.nonVegAllowed
                          ? "bg-[#fdb813]"
                          : "bg-white"
                      }`}
                    >
                      Yes
                    </div>
                    <div
                      onClick={() =>
                        setTenancyInformation({
                          ...tenancyInformation,
                          nonVegAllowed: false,
                        })
                      }
                      className={`cursor-pointer border border-secondaryLightColor rounded-md h-full px-8 py-2 ${
                        !tenancyInformation.nonVegAllowed
                          ? "bg-[#fdb813]"
                          : "bg-white"
                      }`}
                    >
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <button
        onClick={onSubmitHandler}
        className="self-center bg-black text-primaryColor rounded-md py-2 px-4  font-bold"
      >
        NEXT
      </button>
    </div>
  );
};

export default Details;
