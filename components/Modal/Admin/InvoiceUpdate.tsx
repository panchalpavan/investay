import React, { useState } from 'react'
import { invoiceStatus } from '../../../utilities/personalInfo';
import Cancel from '../../SVGComponents/profile/Cancel';

const InvoiceUpdate = () => {
    const [invoice, setInvoice] = useState({
        serviceFees: "",
        saleValue: "",
        description: "",
        cgst: "",
        sgst: "",
        amount: "",
        status: "",
    });


    const handleChange = () => {
        console.log("sedrtyguhijok");

    }
    const receiptAndInvoiceUpdate = () => {
        console.log("receiptAndInvoiceUpdate");
     

    }
    return (
        <div className='flex justify-center my-10'> 

             <div className="relative overflow-x-auto mt-5 w-1/2 shadow-lg p-6">
            <div className='grid grid-cols-12 gap-x-5'>

                <div className="md:col-span-6  col-span-12 my-2">
                    <p className="text-xs  text-secondaryLightColor">
                        Sale Value:
                    </p>
                    <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                        <input
                            type="text"
                            name="saleValue"
                            value={invoice?.saleValue}
                            className="w-full  border-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="md:col-span-6  col-span-12 my-2">
                    <p className="text-xs  text-secondaryLightColor">
                        Service Fees:
                    </p>
                    <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                        <input
                            type="text"
                            name="serviceFees"
                            value={invoice?.serviceFees}
                            className="w-full  border-none focus:outline-none"
                        />
                    </div>
                </div>
            
                <div className="md:col-span-6  col-span-12 my-2">
                    <p className="text-xs  text-secondaryLightColor">
                        CGST:
                    </p>
                    <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                        <input
                            type="text"
                            name="cgst"
                            value={invoice?.cgst}
                            className="w-full  border-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="md:col-span-6  col-span-12 my-2">
                    <p className="text-xs  text-secondaryLightColor">
                        SGST:
                    </p>
                    <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                        <input
                            type="text"
                            name="sgst"
                            value={invoice?.sgst}
                            className="w-full  border-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="md:col-span-6  col-span-12 my-2">
                    <p className="text-xs  text-secondaryLightColor">
                        Amount with Tax:
                    </p>
                    <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                        <input
                            type="text"
                            name="amount"
                            value={invoice?.amount}

                            className="w-full  border-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="md:col-span-6  col-span-12 my-2">
                    <p className="text-xs  text-secondaryLightColor">
                        Status:
                    </p>
                    <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                        <select
                            name="status"
                            id="status"
                            className="outline-none bg-transparent w-full  p-0.5"
                        >
                            {
                                invoiceStatus.map((invoice, index) => {
                                    return (
                                        <option key={index} value={invoice.value}> {invoice.name}</option>

                                    )
                                })
                            }

                        </select>
                    </div>
                </div>
                <div className=" col-span-12 my-2">
                    <p className="text-xs  text-secondaryLightColor">
                        Description
                    </p>
                    <div className="border border-secondaryLightColor  py-1 px-2 flex items-center mt-1">
                        <textarea
                            rows={4}
                             cols={50}
                            name="description"
                            value={invoice?.description}
                            onChange={handleChange}

                            className="w-full  border-none focus:outline-none"
                        />
                        
                    </div>
                </div>

            </div>
            <div className="w-full flex justify-center">
                <button
                    
                    className="px-5 py-2 mx-2 text-black  bg-red-600  mt-10 "
                >
                    Cancel
                </button>
                <button
                    onClick={() => receiptAndInvoiceUpdate()}
                    className="px-5 py-2 text-black mx-2 bg-primaryColor  mt-10 "
                >
                    Update
                </button>
            </div>

        </div></div>
    )
}

export default InvoiceUpdate