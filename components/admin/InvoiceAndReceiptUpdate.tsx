import React, { useState } from 'react'
import { invoiceStatus } from '../../utilities/personalInfo';
import InvoiceUpdate from '../Modal/Admin/InvoiceUpdate';
import Cancel from '../SVGComponents/profile/Cancel';

const InvoiceAndReceiptUpdate = ({ userDataToEdit, modalToggle }: any) => {
    const [showInvoiceModal, setShowInvoiceModal] = useState(false)
    const receiptAndInvoiceUpdate = () => {
        modalToggle(false)

        console.log("sdfghjkl;", userDataToEdit);

    }

    return (
        <>
            {
                !showInvoiceModal &&
                <div className='z-10'>
                    <div onClick={() => modalToggle(false)} className='flex justify-end cursor-pointer '><Cancel width="30" height="30" /></div>
                    <>
                        <div className="text-lg text-center my-5 font-bold">Invoice Details</div>
                        <div className="relative overflow-x-auto mt-5 w-full">
                            <table className="w-full text-sm text-center text-black">
                                <thead className="text-xs  uppercase  bg-gray-200">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2 "
                                        >
                                            Invoice No.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Invoice Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Description
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Sale Value
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2 "
                                        >
                                            Service Fees(%)
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            CGST(9%)
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            SGST(9%)
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Amount WIth Tax
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody className="font-normal">
                                    <tr className="bg-white  ">
                                        <th
                                            scope="row"
                                            className="px-2 py-4 font-normal   whitespace-nowrap border-black border-2 "
                                        >
                                            ABC123
                                        </th>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            Pending/Paid
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            View/Download
                                        </td>
                                        <td onClick={() => setShowInvoiceModal(true)} className="px-6 py-4 border-black border-2  text-black">
                                            Update
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </>
                    <>
                        <div className="text-lg text-center my-5 font-bold">Receipt Details</div>

                        <div className="relative overflow-x-auto mb-5 w-full">
                            <table className="w-full text-sm  text-black text-center">
                                <thead className="text-xs  uppercase  bg-gray-200">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2 "
                                        >
                                            Invoice No.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Invoice Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Amount
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Against Invoice No.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2 "
                                        >
                                            Mode Of Payments
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Transaction No.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Drawee bank
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-2 py-3 border-black border-2"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody className="font-normal text-center">
                                    <tr className="bg-white  ">
                                        <th
                                            scope="row"
                                            className="px-2 py-4 font-normal   whitespace-nowrap border-black border-2 "
                                        >
                                            XYZ123
                                        </th>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            ABC123
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            {/* 142105001951 */}
                                        </td>

                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            Success/Pending
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            View/Download
                                        </td>
                                        <td className="px-6 py-4 border-black border-2  text-black">
                                            Update
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </>
                </div>
            }
            {
                showInvoiceModal && <InvoiceUpdate />
            }
        </>
    )
}

export default InvoiceAndReceiptUpdate