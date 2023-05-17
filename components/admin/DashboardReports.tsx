import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { states } from "../../utilities/postProperty";
import { CancelButton } from "../Utilities/Cancel";
import { View } from "../Utilities/View";
import Link from "next/link";
import { updateProperty } from "../../action-creators/properties/updateProperty";
import Swal from "sweetalert2"
import { toast } from "react-toastify";
import { setProperty, set_getProperties } from "../../redux/property/propertyReducer";
import { useDispatch } from "react-redux";
import EditIcon from "../SVGComponents/profile/EditIcon";

const DashboardReports = (props: any) => {
    const { allEnquiryReports, allPropertyReports, allUsers,modalToggle } = props
    const dispatch = useDispatch();
    const [availedServiceOptionsShow, setAvailedServiceOptionsShow] = useState(false)
    const [propertyStatusOptionsShow, setPropertyStatusOptionsShow] = useState(false)
    const [filterModalShow, setFilterModalShow] = useState(false)
 

    const [emailFilter, setEmailFilter] = useState(false)
    const [ownerNameFilter, setOwnerNameFilter] = useState(false)
    const [ownerMobileFilter, setOwnerMobileFilter] = useState(false)

    const [propertyOwnerNameFilter, setPropertyOwnerNameFilter] = useState(false)
    const [propertyOwnerMobileFilter, setPropertyOwnerMobileFilter] = useState(false)
    const [propertyNameFilter, setPropertyNameFilter] = useState(false)

    const [enquiryPopertyNameFilter, setEnquiryPopertyNameFilter] = useState(false)
    const [enquiryNameFilter, setEnquiryNameFilter] = useState(false)
    const [sellerNameFilter, setSellerNameFilter] = useState(false)
    const [prompt, setPrompt] = useState(false)


    const [query, setQuery] = useState('');
    const [allPropertyReport, setAllPropertyReports] = useState([])
    const [allEnquiryReport, setAllEnquiryReports] = useState([])
    const [allUser, setUsers] = useState([])
    const getAllData = () => {
        setUsers((allUsers))
        setAllPropertyReports((allPropertyReports))
        setAllEnquiryReports((allEnquiryReports))

        if (propertyOwnerNameFilter) {
            setAllPropertyReports(searchByOwnerNamePropertiesFilter(allPropertyReports))
        }
        if (propertyOwnerMobileFilter) {
            setAllPropertyReports(searchByOwnerMobilePropertiesFilter(allPropertyReports))
        }
        if (propertyNameFilter) {
            setAllPropertyReports(searchByPropertyNamePropertiesFilter(allPropertyReports))
        }
        if (enquiryPopertyNameFilter) {
            setAllEnquiryReports(searchByPropertyNameEnquiriesFilter(allEnquiryReports))
        }
        if (enquiryNameFilter) {
            setAllEnquiryReports(searchByEnquiryNameEnquiriesFilter(allEnquiryReports))
        }
        if (sellerNameFilter) {
            setAllEnquiryReports(searchBySellerNameEnquiriesFilter(allEnquiryReports))
        }
        if (ownerNameFilter) {
            setUsers(searchUsersNameFilter(allUsers))
        }
        if (emailFilter) {
            setUsers(searchUsersEmailFilters(allUsers))
        }
        if (ownerMobileFilter) {
            setUsers(searchUsersMobileFilters(allUsers))
        }

    }
    useEffect(() => {
        getAllData()
    }, [allUsers, allPropertyReports, allEnquiryReports, query])

    useEffect(() => {

        //HERE PROMPT

        if (prompt) {
            setTimeout(()=> {
                toast.warning("Please Update Your Name And Number", { autoClose: 5000 });
    
            }, 1000)
        }

        // setTimeout(()=> {
        //     toast.warning("Please Update Your Name And Number", { autoClose: 5000 });

        // }, 1000)
        
      }, [prompt]);

    const propertyReject = async (propertyId: string) => {
        const data = {
            propertyId,
            status: "rejected"
        }
        const response = await updateProperty(data);
        if (response.success) {
            dispatch(set_getProperties(response.property));
            dispatch(setProperty(response.property));
        }

        // Swal.fire({
        //     title: "Are you sure you want to proceed?",
        //     icon: "info",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes,Proceed",
        //     customClass: "removeProduct",
        // }).then(async (result: any) => {
        //     if (result.isConfirmed) {
        //         const data = {
        //             propertyId,
        //             status: "rejected"
        //         }
        //         const response = await updateProperty(data);
        //         if (response?.success) {
        //             toast.success("Property  is rejected", {
        //                 position: "top-right",
        //                 autoClose: 5000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: "light",
        //             });
        //         }
        //     }
        // });

    }
    const filterProperty = (filterValue: string) => {
        setAllPropertyReports(allPropertyReports)

        setAllPropertyReports(
            allPropertyReports?.filter((property: any) => {
                if (filterValue === "resale" || filterValue === "rental") {
                    return filterValue === property?.category
                }
                if (filterValue === "available" || filterValue === "sold" || filterValue === "rented") {
                    return filterValue === property?.saleStatus
                }
            }))
        setAvailedServiceOptionsShow(false)
        setPropertyStatusOptionsShow(false)
    }
    const filterEnquiry = (filterValue: string) => {
        setAllEnquiryReports(allEnquiryReports)

        setAllEnquiryReports(
            allEnquiryReports?.filter((property: any) => {
                return filterValue === property?.category
            }))
        setAvailedServiceOptionsShow(false)
        setPropertyStatusOptionsShow(false)
    }

    const searchUsersNameFilter = (allUsers: any) => {

        return allUsers.filter(
            (user: any) => user?.firstName?.toLowerCase().includes(query)
        )
    }
    const searchUsersEmailFilters = (allUsers: any) => {
        return allUsers.filter(
            (user: any) => user?.email?.includes(query)
        )
    }
    const searchUsersMobileFilters = (allUsers: any) => {
        return allUsers.filter(
            (user: any) => user?.mobile.toString().includes(query)
        )

    }
    const searchByOwnerNamePropertiesFilter = (allProperties: any) => {
        return allProperties.filter(
            (property: any) =>
                property?.ownerName?.toLowerCase()?.includes(query)
        )
    }
    const searchByOwnerMobilePropertiesFilter = (allProperties: any) => {
        return allProperties.filter(
            (property: any) =>
                property?.ownerContact?.toLowerCase()?.includes(query)
        )
    }
    const searchByPropertyNamePropertiesFilter = (allProperties: any) => {
        return allProperties.filter(
            (property: any) =>
                property?.projectName?.toLowerCase()?.includes(query)
        )
    }
    const searchByPropertyNameEnquiriesFilter = (allEnquiryReports: any) => {
        return allEnquiryReports.filter(
            (report: any) =>
                report?.property?.projectName?.toLowerCase()?.includes(query)
        )
    }
    const searchByEnquiryNameEnquiriesFilter = (allEnquiryReports: any) => {
        return allEnquiryReports.filter(
            (report: any) =>
                report?.name?.toLowerCase()?.includes(query)
        )
    }
    const searchBySellerNameEnquiriesFilter = (allEnquiryReports: any) => {
        return allEnquiryReports.filter(
            (report: any) =>
                report?.property?.ownerName?.toLowerCase()?.includes(query)
        )
    }
    const handleChange = (e: any) => {
        setQuery(e.target.value)
    }

    return (
        <div>
                <>
                    <Disclosure
                        as={"div"}
                        defaultOpen={true}
                        className="w-full unique-user-report"
                        id="unique-user-report"

                    >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
                                    <p className="text-sm font-bold">Unique User Report</p>
                                    {open ? (
                                        <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                                    ) : (
                                        <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                                    )}
                                </Disclosure.Button>

                                <Disclosure.Panel>
                                    <div className="m-2 my-6 flex justify-end">
                                        <div className="flex z-10 absolute">
                                            <div>
                                                <span className="border py-1 px-2 border-black">Filters:</span>
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setOwnerNameFilter(true)
                                                    setOwnerMobileFilter(false)
                                                    setEmailFilter(false)

                                                }} className="border cursor-pointer py-1 px-2 border-black">Seller/Owner Name</span>
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setOwnerMobileFilter(true)
                                                    setEmailFilter(false)
                                                    setOwnerNameFilter(false)

                                                }
                                                } className="border cursor-pointer py-1 px-2 border-black">Seller/Owner Mobile</span>
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setEmailFilter(true)
                                                    setOwnerMobileFilter(false)
                                                    setOwnerNameFilter(false)
                                                }
                                                } className="border cursor-pointer py-1 px-2 border-black">Seller/Owner Email</span>
                                            </div>

                                        </div>
                                        <div className="absolute z-10 mt-5 ">

                                            {filterModalShow &&
                                                <div>
                                                    <span className='mx-4 my-2 shadow-md bg-yellow-600 border-gray-900 border  flex flex-col text-center cursor-pointer ' >
                                                        <input type="text" placeholder="Search..." onChange={handleChange} className="p-2  hover:bg-gray-300" />
                                                    </span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {
                                        allUser?.length !== 0 &&
                                        <div className="mt-20 overflow-x-auto">
                                            <table className="w-full  mx-auto overflow-hidden bg-white divide-y divide-gray-300 ">
                                                <thead className=" p-2 text-center">
                                                    <tr className="border border-black">
                                                        <th className="border-l px-2 border-black">
                                                            User ID

                                                        </th>
                                                        <th className="border-l px-2 p-2 border-black">
                                                            Name

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Mobile No.

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Email

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Address

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            City

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            State

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Pincode

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Nationality

                                                        </th>
                                                        {/* <th className="border-l px-2 border-black">
                                                            Action

                                                        </th> */}
                                                    </tr>
                                                </thead>
                                                <tbody className="border-black border p-2 text-center">
                                                    {
                                                        allUser?.map((user: any) => {
                                                            return (
                                                                <tr key={user?._id} className="border-black border">
                                                                    <td className="border-l px-2 p-2 border-black">
                                                                        {user?.userId}

                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {user?.firstName} {user?.lastName}

                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {user?.mobile}

                                                                    </td>
                                                                    <td className="border-l break-all  px-2 border-black">
                                                                        <div className="w-36 2xl:w-full">

                                                                            {user?.email}
                                                                        </div>

                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {user?.address}

                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {user?.city}

                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {
                                                                            states.find(
                                                                                (item: any) => item.value === user.state
                                                                            )?.name
                                                                        }

                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {user?.pincode}

                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {user?.nationality}

                                                                    </td>
                                                                    {/* <td className="border-l px-2  border-black" >
                                                                        <div onClick={() => modalToggle(true,user)} className="flex justify-center cursor-pointer ">
                                                                            <EditIcon width="30" height="30" />
                                                                        </div>
                                                                    </td> */}
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                    {
                                        allUser?.length === 0 &&
                                        <div className='flex justify-center items-center h-screen -mt-20 col-span-12' onClick={() => {
                                            setAvailedServiceOptionsShow(false)
                                            setPropertyStatusOptionsShow(false)

                                        }}>
                                            <div> No properties Available</div>
                                        </div>
                                    }

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure
                        as={"div"}
                        defaultOpen={true}
                        className="w-full"
                        id="unique-property-report"
                    >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 my-5">
                                    <p className="text-sm font-bold">Unique Property Report</p>
                                    {open ? (
                                        <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                                    ) : (
                                        <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                                    )}
                                </Disclosure.Button>

                                <Disclosure.Panel>
                                    <div className="m-2 my-6 flex justify-end">
                                        <div className="flex z-10 absolute">
                                            <div>
                                                <span className="border py-1 px-2 border-black">Filters:</span>
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setPropertyOwnerNameFilter(true)
                                                    setPropertyOwnerMobileFilter(false)
                                                    setPropertyNameFilter(false)

                                                }} className="border py-1 cursor-pointer px-2 border-black">Seller/Owner Name</span>
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setPropertyOwnerMobileFilter(true)
                                                    setPropertyNameFilter(false)
                                                    setPropertyOwnerNameFilter(false)


                                                }} className="border py-1 px-2 cursor-pointer border-black">Seller/Owner Mobile</span>
                                            </div>
                                            {/* <div>
                                        <span onClick={() => {
                                            setFilterModalShow(!filterModalShow)
                                        }} className="border py-1 px-2 border-black">Seller/Owner Email</span>
                                    </div> */}
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setPropertyOwnerMobileFilter(false)
                                                    setPropertyNameFilter(true)
                                                    setPropertyOwnerNameFilter(false)
                                                }} className="border py-1 cursor-pointer px-2 border-black">Property Name</span>
                                            </div>


                                            <div>
                                                <span onClick={() => {
                                                    setAvailedServiceOptionsShow(!availedServiceOptionsShow)
                                                    setPropertyStatusOptionsShow(false)
                                                }}
                                                    className="border cursor-pointer py-1 px-2 border-black">Service Availed</span>
                                                {availedServiceOptionsShow &&
                                                    <span className='mx-4 my-2 shadow-md bg-gray-100 flex flex-col text-center cursor-pointer ' >
                                                        <span onClick={() => { filterProperty("rental") }} className=' p-2 border hover:bg-gray-300'> Rental</span>
                                                        <span onClick={() => { filterProperty("resale") }} className='p-2 border hover:bg-gray-300'> Resale</span>
                                                    </span>
                                                }
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setPropertyStatusOptionsShow(!propertyStatusOptionsShow)
                                                    setAvailedServiceOptionsShow(false)

                                                }} className="border cursor-pointer py-1 px-2 border-black">Property Status</span>
                                                {
                                                    propertyStatusOptionsShow &&
                                                    <span className='mx-4 my-2 shadow-md bg-gray-100 flex flex-col text-center cursor-pointer ' >
                                                        <span onClick={() => { filterProperty("available") }} className=' p-2 border hover:bg-gray-300'> Available</span>
                                                        <span onClick={() => { filterProperty("sold") }} className='p-2 border hover:bg-gray-300'> Sold Out</span>
                                                        <span onClick={() => { filterProperty("rented") }} className='p-2 border hover:bg-gray-300'> Rented Out</span>
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                        <div className="absolute z-10 mt-6 ">

                                            {filterModalShow &&
                                                <div>
                                                    <span className='mx-4 my-2 shadow-md bg-yellow-600 border-gray-900 border  flex flex-col text-center cursor-pointer ' >
                                                        <input type="text" placeholder="Search..." onChange={handleChange} className="p-2  hover:bg-gray-300" />
                                                    </span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {
                                        allPropertyReport?.length !== 0 &&
                                        <div className=" mt-20 overflow-x-auto">
                                            <table className="w-full max-w-screen mx-auto overflow-hidden bg-white divide-y divide-gray-300 ">
                                                <thead className=" p-2 text-center">
                                                    <tr className="border border-black">
                                                        <th colSpan={3} className="border-l px-2 border-black">
                                                            Property Info

                                                        </th>
                                                        <th colSpan={2} className="border-l px-2 border-black">
                                                            Seller/Owner Info

                                                        </th>
                                                        <th className="border-l p-2 border-black">
                                                            Service Availed

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Property Status

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Closed Price

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Approvals

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Action
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody className="border-black border p-2 text-center">
                                                    {
                                                        allPropertyReport?.map((property: any) => {
                                                            console.log(property)
                                                            return (
                                                                <tr key={property?._id} className="border-black border capitalize">
                                                                    <td className="border-l  p-2  border-black">
                                                                        {property?.propertyId || property?._id}

                                                                    </td>
                                                                    <td className="border-l p-2  border-black">
                                                                        {property?.projectName}
                                                                    </td>
                                                                    <td className="border-l px-2 py-1 h-[100px]  w-[200px] p-2 float-left border-black overflow-hidden overflow-y-auto ">
                                                                        {property?.propertyLocation}  {property?.city}  {property?.state}  {property?.country}  {property?.pincode}
                                                                    </td>
                                                                    <td className="border-l px-2  border-black">
                                                                        {!property?.ownerName && setPrompt(true)}
                                                                        {property?.ownerName}

                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {!property?.ownerContact && setPrompt(true)}
                                                                        {property?.ownerContact}
                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {property?.category}
                                                                    </td>
                                                                    <td className="border-l px-2  border-black">
                                                                        {property?.saleStatus}
                                                                    </td>
                                                                    <td className="border-l px-2 border-black">
                                                                        {+ property?.bookingPricing?.closedPrice2 || + property?.bookingPricing?.closedPrice1}  Rs.

                                                                    </td>
                                                                    <td className="border-l px-2  text-gray-900 text-sm border-black">
                                                                        {property?.status === "published" && <span className="bg-greenBg px-2 py-1 rounded-full">
                                                                            Approved
                                                                        </span>}
                                                                        {property?.status === "pending" && <span className="bg-primaryColor px-2 py-1 rounded-full">
                                                                            {property?.status}
                                                                        </span>}
                                                                        {property?.status === "rejected" && <span className="bg-primaryColor px-2 py-1 rounded-full">
                                                                            {property?.status}
                                                                        </span>}
                                                                    </td>
                                                                    <td className="border-l px-2  border-black">
                                                                        <div className="flex">

                                                                            <Link href={"/admin/property-overview/" + property?._id} className="text-gray-500">
                                                                                <View height="1.5rem" width="1.5rem" />
                                                                            </Link>
                                                                            <button onClick={() => propertyReject(property?._id)} className="text-red-500 mx-1">
                                                                                <CancelButton height="1.5rem" width="1.5rem" />
                                                                            </button>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                    {
                                        (allPropertyReport?.length === 0) &&
                                        <div className='flex justify-center items-center h-screen -mt-20 col-span-12' onClick={() => {
                                            setAvailedServiceOptionsShow(false)
                                            setPropertyStatusOptionsShow(false)

                                        }}>
                                            <div> No properties Available</div>
                                        </div>
                                    }

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure
                        as={"div"}
                        defaultOpen={true}
                        className="w-full"
                        id="unique-enquiry-report"
                    >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 my-5">
                                    <p className="text-sm font-bold">Unique Enquiry Report</p>
                                    {open ? (
                                        <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                                    ) : (
                                        <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                                    )}
                                </Disclosure.Button>

                                <Disclosure.Panel>
                                    <div className="m-2 my-6 flex justify-end">
                                        <div className="flex z-10 absolute">
                                            <div>
                                                <span className="border py-1 px-2 border-black">Filters:</span>
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setAvailedServiceOptionsShow(false)
                                                    setEnquiryPopertyNameFilter(true)
                                                    setEnquiryNameFilter(false)
                                                    setSellerNameFilter(false)

                                                }} className="border py-1 px-2 border-black">Property Name</span>
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setAvailedServiceOptionsShow(false)
                                                    setEnquiryPopertyNameFilter(false)
                                                    setEnquiryNameFilter(true)
                                                    setSellerNameFilter(false)


                                                }} className="border py-1 px-2 border-black">Enquiry Name </span>
                                            </div>
                                            <div>
                                                <span onClick={() => {
                                                    setFilterModalShow(!filterModalShow)
                                                    setAvailedServiceOptionsShow(false)
                                                    setEnquiryPopertyNameFilter(false)
                                                    setEnquiryNameFilter(false)
                                                    setSellerNameFilter(true)


                                                }} className="border py-1 px-2 border-black">Seller Name</span>
                                            </div>

                                            <div>

                                                <span onClick={() => {
                                                    setAvailedServiceOptionsShow(!availedServiceOptionsShow)
                                                    setFilterModalShow(false)
                                                    setPropertyStatusOptionsShow(false)
                                                }} className="border cursor-pointer py-1 px-2 border-black">Service Availed</span>
                                                {availedServiceOptionsShow &&
                                                    <span className='mx-4 my-2 shadow-md bg-gray-100 flex flex-col text-center cursor-pointer ' >
                                                        <span onClick={() => { filterEnquiry("rental") }} className=' p-2 border hover:bg-gray-300'> Rental</span>
                                                        <span onClick={() => { filterEnquiry("resale") }} className='p-2 border hover:bg-gray-300'> Resale</span>
                                                    </span>
                                                }
                                            </div>

                                        </div>
                                        <div className="absolute z-10 mt-6 ">

                                            {filterModalShow &&
                                                <div>
                                                    <span className='mx-4 my-2 shadow-md bg-yellow-600 border-gray-900 border  flex flex-col text-center cursor-pointer ' >
                                                        <input type="text" placeholder="Search..." onChange={handleChange} className="p-2  hover:bg-gray-300" />
                                                    </span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {
                                        allEnquiryReport?.length !== 0 &&
                                        <div className=" mt-20 overflow-x-auto">
                                            <table className="w-full  mx-auto overflow-hidden bg-white divide-y divide-gray-300 ">
                                                <thead className=" p-2 text-center">
                                                    <tr className="text-center border text-lg  border-black"><th className="p-3" colSpan={10}> Enquiry Details</th></tr>
                                                    <tr className="border  border-black">
                                                        <th></th>
                                                        <th colSpan={2} className="border-l p-2 border-black">
                                                            Property Related Fields

                                                        </th>
                                                        <th colSpan={3} className="border-l border-black">
                                                            Enquiry Related Fields

                                                        </th>
                                                        <th colSpan={2} className="border-l border-black">
                                                            Seller Related Fields

                                                        </th>
                                                        <th className="border-l border-black">
                                                            Service Availed

                                                        </th>

                                                    </tr>
                                                    <tr className="border border-black">
                                                        <th></th>
                                                        <th className="border-l px-2 border-black">
                                                            Property ID
                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Property Name

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Name

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Mobile

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Email

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Name

                                                        </th>
                                                        <th className="border-l px-2 border-black">
                                                            Mobile

                                                        </th>
                                                        {/* <th className="border-l px-2 border-black">
                                                Email

                                            </th> */}
                                                        <th className="border-l px-2 border-black">
                                                            Rental/Resale

                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody className="border-black border p-2 text-center">
                                                    {
                                                        allEnquiryReport?.map((enquiryPreport: any, index: any) => {
                                                            return (

                                                                <tr key={enquiryPreport?._id} className="border-black border">
                                                                    <td className="border-l p-2 border-black">
                                                                        Enquiry {index + 1}

                                                                    </td>
                                                                    <td className="border-l p-2 border-black">
                                                                        {enquiryPreport?.property?.propertyId || enquiryPreport?.property?._id}

                                                                    </td>
                                                                    <td className="border-l p-2 border-black">
                                                                        {enquiryPreport?.property?.projectName}

                                                                    </td>
                                                                    <td className="border-l p-2 border-black">
                                                                        {enquiryPreport?.name}

                                                                    </td>
                                                                    <td className="border-l p-2 border-black">
                                                                        {enquiryPreport?.mobile}

                                                                    </td>
                                                                    <td className="border-l p-2 border-black">
                                                                        {enquiryPreport?.email}

                                                                    </td>
                                                                    <td className="border-l p-2 border-black">
                                                                        {enquiryPreport?.property?.ownerName}

                                                                    </td>
                                                                    <td className="border-l p-2 border-black">
                                                                        {enquiryPreport?.property?.ownerContact}


                                                                    </td>
                                                                    {/* <td className="border-l p-2 border-black">
                                                            {enquiryPreport?.property?.email}


                                                        </td> */}
                                                                    <td className="border-l p-2 border-black">{enquiryPreport?.serviceNeeded}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                    {
                                        (allEnquiryReport?.length === 0) &&
                                        <div className='flex justify-center items-center h-screen -mt-20 col-span-12' onClick={() => {
                                            setAvailedServiceOptionsShow(false)
                                            setPropertyStatusOptionsShow(false)

                                        }}>
                                            <div> No properties Available</div>
                                        </div>
                                    }

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </>
           
        </div>

    );
};

export default DashboardReports;
