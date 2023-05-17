import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const DashboardOverview = ({ allProperties, visitorsCount }: any) => {
    const noOfReSaleProperties = allProperties?.filter((property: any) => {
        return property?.category === "resale"
    });
    const noOfReSaleSoldProperties = noOfReSaleProperties?.filter((property: any) => {
        return property?.saleStatus === "sold"
    });
    const noOfRentalProperties = allProperties?.filter((property: any) => {
        return property?.category === "rental"
    });

    const noOfRentalSoldProperties = noOfRentalProperties?.filter((property: any) => {
        return property?.saleStatus === "sold"
    });

    const sumOfRevenue = noOfReSaleSoldProperties?.length !== 0 && noOfReSaleSoldProperties?.reduce(function (previousValue: any, currentValue: any) {
        return +previousValue?.bookingPricing?.closedPrice2 + +currentValue?.bookingPricing?.closedPrice2;
    });
    // console.log(sum);


    return (
        <Disclosure
            as={"div"}
            defaultOpen={true}
            className="w-full"
            id="overview"
        >
            {({ open }) => (
                <>
                    <Disclosure.Button className="w-full flex justify-between items-end bg-gray-100 p-2 mb-5">
                        <p className="text-sm font-bold">Overview</p>
                        {open ? (
                            <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                        ) : (
                            <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                        )}
                    </Disclosure.Button>

                    <Disclosure.Panel>

                        <div className="grid md:grid-cols-2 grid-cols-3 border border-black">
                            <div className=" border-black p-2 md:col-span-1 col-span-2">
                                No. of visitors to website
                            </div>
                            <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                {visitorsCount}

                            </div>
                        </div>
                        <div className="flex flex-col my-3">
                            <div className="grid md:grid-cols-2 grid-cols-3 border-x border-t border-black">
                                <div className=" border-black p-2 md:col-span-1 col-span-2">
                                    Total no. of Resale Properties
                                </div>
                                <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                    {noOfReSaleProperties?.length}

                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-3 border border-black">
                                <div className=" border-black p-2 md:col-span-1 col-span-2">
                                    Total no. of Rental Properties
                                </div>
                                <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                    {noOfRentalProperties?.length}

                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-3 bg-gray-200  border-x border-b border-black">
                                <div className=" border-black p-2 md:col-span-1 col-span-2">
                                    Total no. of Transactions
                                </div>
                                <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                    {allProperties.length}

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col my-3">
                            <div className="grid md:grid-cols-2 grid-cols-3 border-x border-t border-black">
                                <div className=" border-black p-2 md:col-span-1 col-span-2">
                                    No. of Resale Properties Sold
                                </div>
                                <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                    {noOfReSaleSoldProperties?.length}

                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-3 border border-black">
                                <div className=" border-black p-2 md:col-span-1 col-span-2">
                                    No. of Rental Properties Sold
                                </div>
                                <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                    {noOfRentalSoldProperties?.length}

                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-3 bg-gray-200  border-x border-b border-black">
                                <div className=" border-black p-2 md:col-span-1 col-span-2">
                                    Total No. of Transactions
                                </div>
                                <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                    {+noOfReSaleSoldProperties?.length + +noOfRentalSoldProperties?.length}

                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col my-3">
                            <div className="grid md:grid-cols-2 grid-cols-3 border-x border-t border-black">
                                <div className=" border-black p-2 md:col-span-1 col-span-2">
                                    Sum of Revenue (Resale)
                                </div>
                                <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                   {+sumOfRevenue || 0 }  Rs.

                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-3 border border-black">
                                <div className=" border-black p-2 md:col-span-1 col-span-2">
                                    Commission Earned (Resale)
                                </div>
                                <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                    {0}

                                </div>
                            </div>

                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-3 my-3 border border-black">
                            <div className=" border-black p-2 md:col-span-1 col-span-2">
                                Commission Earned (Rental)
                            </div>
                            <div className="border-l p-2 border-black md:col-span-1 col-span-1">
                                {0}

                            </div>
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default DashboardOverview;
