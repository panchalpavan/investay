import { PlusIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { updateProperty } from '../../action-creators/properties/updateProperty'
import { deleteProperty } from '../../action-creators/properties/deleteProperty'
import { DeleteIcon } from '../SVGComponents/Admin/DeleteIcon'
import { UserCircle } from '../SVGComponents/Admin/UserCircle'
import { DownArrow } from '../SVGComponents/DownArrow'
import S3 from "aws-sdk/clients/s3";
import { Buffer } from 'buffer';

const DashboardListings = ({ allProperties }: any) => {
    const s3 = new S3({
        apiVersion: '2006-03-01',
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESSKEY,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRETKEY,
        region: process.env.NEXT_PUBLIC_AWS_REGION,
        signatureVersion: 'v4'
    });

    const router = useRouter()
    const [availedServiceOptionsShow, setAvailedServiceOptionsShow] = useState(false)
    const [propertyStatusOptionsShow, setPropertyStatusOptionsShow] = useState(false)
    const [approvalStatusOptionsShow, setApprovalStatusOptionsShow] = useState(false)
    const [properties, setProperties] = useState([]) as any
    const [imageUrls, setImageUrls] = useState([]);

    console.log("PROPERTIES", properties)

    console.log(imageUrls)

    const getImageUrl = async (gallery: any) => {

        console.log(gallery)
        if (gallery) {
          const src = await downloadFromS3(gallery?.property?.floor_plan);
          return src || "";
        } else {
          return "";
        }
      };

    if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {

        useEffect(() => {
            const downloadImages = async () => {
              const promises = properties.map(async (property: any) => {
                const url = await getImageUrl(property?.gallery);
                return url;
              });
              const urls = await Promise.all(promises);
              setImageUrls(urls);
            };
            downloadImages();
          }, [properties]);
    }

    async function downloadFromS3(attachmentId: any) {
        console.log(attachmentId);
        console.log(process.env.NEXT_PUBLIC_AWS_BUCKETNAME);
        const s3Params = {
          Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME || "",
          Key: attachmentId,
        };
      
        try {
          const file = await s3.getObject(s3Params).promise();
          const dataURI = `data:image/png;base64,${Buffer.from(file.Body).toString('base64')}`;
          console.log(dataURI);
          return dataURI;
        } catch (error) {
          return null;
        }
      }


    const getAllProperty = () => {
        setProperties(allProperties)
    }
    useEffect(() => {
        if (allProperties) {
            getAllProperty()
        }
    }, [allProperties])
    const filter = (filterBy: String) => {
        setProperties(allProperties)

        setProperties(
            allProperties?.filter((property: any) => {
                if (filterBy === "resale" || filterBy === "rental") {
                    return filterBy === property?.category
                }
                if (filterBy == "published" || filterBy == "rejected" || filterBy == "pending") {
                    return filterBy === property?.status
                }
                if (filterBy === "available" || filterBy === "sold" || filterBy === "rented") {
                    return filterBy === property?.saleStatus
                }
            })
        )
    }
    const propertyActivateStatusChange = async (propertyActivateStatus: string, propertyId: any) => {
        try {
            const response = await updateProperty({ propertyActivateStatus, propertyId });
            if (response.success) {
                toast.success("Property  Status Updated Successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                window.location.reload();

            }
        }
        catch (error: any) {
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

    const propertyDelete = async (propertyId: any) => {
        try {
            const response = await deleteProperty({ propertyId });
            if (response.success) {
                toast.success("Property Deleted Successfully", {
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
            window.location.reload();
        }
        catch (error: any) {
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

    return (
        <>
            <div className='flex justify-end'>
                <div className='flex  md:flex-row flex-col z-10 absolute'>
                    <div className=''>
                        <span className='mx-4 shadow-md p-3 flex cursor-pointer ' onClick={() => {
                            setAvailedServiceOptionsShow(!availedServiceOptionsShow)
                            setPropertyStatusOptionsShow(false)
                            setApprovalStatusOptionsShow(false)
                            getAllProperty()
                        }} >
                            <span > Availed Services</span>
                            <span className='mt-2 mx-2 '>
                                <DownArrow className='text-gray-300' />
                            </span>
                        </span>
                        {
                            availedServiceOptionsShow &&
                            <span className='mx-4 my-2 shadow-md bg-gray-100 flex flex-col text-center cursor-pointer ' >
                                <span onClick={() => { filter("rental") }} className=' p-2 border hover:bg-gray-300'> Rental</span>
                                <span onClick={() => { filter("resale") }} className='p-2 border hover:bg-gray-300'> Resale</span>
                            </span>
                        }
                    </div>
                    <div>
                        <span className='mx-4 shadow-md p-3 flex cursor-pointer' onClick={() => {
                            setPropertyStatusOptionsShow(!propertyStatusOptionsShow)
                            setAvailedServiceOptionsShow(false)
                            setApprovalStatusOptionsShow(false)
                            getAllProperty()
                        }}>
                            <span >   Property Status</span>
                            <span className='mt-2 mx-2 '>
                                <DownArrow className='text-gray-300' />
                            </span>
                        </span>
                        {
                            propertyStatusOptionsShow &&
                            <span className='mx-4 my-2 shadow-md bg-gray-100 flex flex-col text-center cursor-pointer ' >
                                <span onClick={() => { filter("available") }} className=' p-2 border hover:bg-gray-300'> Available</span>
                                <span onClick={() => { filter("sold") }} className='p-2 border hover:bg-gray-300'> Sold Out</span>
                                <span onClick={() => { filter("rented") }} className='p-2 border hover:bg-gray-300'> Rented Out</span>
                            </span>
                        }
                    </div>
                    <div >
                        <span className='mx-4  shadow-md p-3 flex cursor-pointer' onClick={() => {
                            setApprovalStatusOptionsShow(!approvalStatusOptionsShow)
                            setAvailedServiceOptionsShow(false)
                            setPropertyStatusOptionsShow(false)
                            getAllProperty()
                        }}>
                            <span> Approval Status</span>
                            <span className='mt-2 mx-2 '>
                                <DownArrow className='text-gray-300' />
                            </span>
                        </span>
                        {
                            approvalStatusOptionsShow &&
                            <span className='mx-4 my-2 shadow-md bg-gray-100 flex flex-col text-center cursor-pointer ' >
                                <span onClick={() => { filter("published") }} className=' p-2 border hover:bg-gray-300'> Approved</span>
                                <span onClick={() => { filter("pending") }} className='p-2 border hover:bg-gray-300'> Pending</span>
                                <span onClick={() => { filter("rejected") }} className='p-2 border hover:bg-gray-300'> Rejected</span>
                            </span>
                        }
                    </div>

                </div>
            </div>

            <div className="grid md:mt-20 mt-32 grid-cols-12" onClick={() => {
                setAvailedServiceOptionsShow(false)
                setPropertyStatusOptionsShow(false)
                setApprovalStatusOptionsShow(false)

            }}>
                <div className="xl:col-span-4 md:col-span-6  col-span-12 h-full p-6 mx-3 shadow-lg flex flex-col rounded-lg overflow-hidden">
                    <div className="h-48 xxs:h-[15.2rem] w-full flex justify-center ">
                        <div
                            onClick={() => {
                                router.push("/admin/add-property");
                            }}
                            className=" my-10 flex justify-center cursor-pointer items-center flex-col"
                        >
                            <PlusIcon className="w-8 h-8  " />
                            <p className="text-center">Add New Property</p>
                        </div>
                    </div>


                </div>
                {properties && properties?.map((property: any, index: any) => {
                    console.log(property)
                    return (
                        <div key={index} className={property?.propertyActivateStatus && property?.propertyActivateStatus === 'deactivated'
                        ? `xl:col-span-4 md:col-span-6  col-span-12 h-full p-6 mx-3 shadow-lg flex flex-col rounded-lg overflow-hidden`
                        : `xl:col-span-4 md:col-span-6  col-span-12 h-full p-6 mx-3 shadow-lg flex flex-col rounded-lg overflow-hidden hover:scale-110 transition duration-300`
                    }>
                            
                            <div className="h-48 xxs:h-[15.2rem] w-full relative overflow-hidden">

                                {property?.propertyActivateStatus && property?.propertyActivateStatus === 'deactivated' && (
                                        <>
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                                          <p className="text-lg">Deactivated</p>
                                        </div>
                                      </>
                                )}
                                {

                                    property?.status === "published" &&
                                    <span className="bg-greenBg text-white text-base absolute rounded-md px-6 py-2 flex justify-center items-center">
                                        Approved
                                    </span>
                                }
                                {
                                    property?.status === "pending" &&
                                    <span className="bg-primaryColor text-white text-base  absolute w-56 -mr-12 right-0 rotate-[30deg] mt-6 px-10  py-2 flex justify-center items-center">
                                        Pending
                                    </span>
                                }
                                {
                                    property?.status === "rejected" &&
                                    <span className="bg-danger text-white text-sm absolute  w-56 -mr-12 right-0 rotate-[30deg] mt-6 px-10  py-2 flex justify-center items-center">
                                        Rejected
                                    </span>
                                }
                                <div className='flex justify-center '>
                                    <div className="  text-sm absolute  w-full inset-x-0 bottom-0  px-10  flex justify-center items-center">
                                        <span onClick={() => propertyActivateStatusChange("deactivated", property?._id)} className='p-2 bg-white rounded-l-lg cursor-pointer flex flex-col '>
                                            <span className='flex justify-center'>
                                                <UserCircle className='h-6 w-6  text-[#F4B715] ' />
                                            </span>
                                            <span className='text-xs'>De-activate</span>
                                        </span>
                                        <span onClick={() => propertyActivateStatusChange("activated", property?._id)} className='p-2 bg-white  cursor-pointer  flex flex-col'>
                                            <span className='flex justify-center'>
                                                <UserCircle className='h-6 w-6  text-[#F4B715]' />
                                            </span>
                                            <span className='text-xs'>Activate</span>
                                        </span>
                                        <span onClick={() => propertyDelete(property?._id)} className='p-2 bg-white rounded-r-lg cursor-pointer  flex flex-col'>
                                            <span className='flex justify-center'>

                                                <DeleteIcon className='h-6 w-6  text-[#F4B715]' />
                                            </span>
                                            <span className='text-xs'>Delete</span>
                                        </span>
                                    </div>

                                </div>
                                
                               
                                <Link href={`/admin/property-overview/${property?._id}`}>
                                    <div className="w-full h-full flex justify-center cursor-pointer items-center rounded-t-lg bg-[#DCDCDC]">
                                        {process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? (
                                            <>
                                            {property?.gallery[0]?.filename ? (
                                                <img src={"/uploads/" + property?.gallery[0]?.filename}  alt="Property Image" className="h-full w-full object-fit" />
                                            ) : (
                                                <img src={"/assets/images/noimageicon.png"}  alt="No Image" className="h-full w-full object-fit" />
                                                
                                            )}
                                            </>
                                        ) : (
                                            <>
                                                <img src={imageUrls[index]}  alt="No Image" className="h-full w-full object-fit" />
                                            </>
                                        )}


                                    </div>
                                </Link>

                            </div>

                            <div className=" mt-1 xxs:mt-4 ">
                                <div className="px-2 lg1:px-4 mt-2 flex items-start justify-between">
                                    <div className="flex gap-x-4">
                                        <div className="space-y-2">
                                            <div className="text-xl font-bold">{property?.projectName}</div>
                                            <span className="text-sm "> {property?.propertyAddress}  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
                {
                    properties?.length === 0 &&
                    <div className='flex justify-center h-screen col-span-12' onClick={() => {
                        setAvailedServiceOptionsShow(false)
                        setPropertyStatusOptionsShow(false)
                        setApprovalStatusOptionsShow(false)

                    }}>
                        <div> No properties Available</div>
                    </div>
                }
            </div>
        </>
    )
}

export default DashboardListings