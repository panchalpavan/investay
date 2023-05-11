import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { allEnquiries } from '../../../action-creators/enquiry/allEnquiries';
import { getProperties } from '../../../action-creators/properties/allProperties';
import {  getAllUsers } from '../../../action-creators/user/allUsers';
import DashboardReports from '../../../components/admin/DashboardReports';
import InvoiceAndReceiptUpdate from '../../../components/admin/InvoiceAndReceiptUpdate';
import SelectDropDown from '../../../components/Layout/admin/SelectDropDown';
import HeaderTitle from '../../../components/Layout/HeaderTitle';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { reportsPaths } from '../../../utilities/AdminNavLinks';

const reports = () => {
  const router = useRouter();
  const [allEnquiryReports, setAllEnquiryReports] = useState([]);
  const [allPropertyReports, setAllPropertyReports] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [invoiceAndReceiptModalShow, setInvoiceAndReceiptModalShow] = useState(false)
  const [userDataToEdit, setUserDataToEdit] = useState([])
  const modalToggle = (toggle:any,user:any) =>{
    setUserDataToEdit(user)
    setInvoiceAndReceiptModalShow(toggle)
    
  }

  const fetchEnquiryReports = async () => {

    try {
      const response = await allEnquiries();
      if (response.success) {
        setAllEnquiryReports(response?.enquiries)
        setLoading(false)

      }
    } catch (error: any) {
      console.log(error);
      setLoading(false)

    }
  };
  const fetchAllPropertyReports = async () => {

    try {
      const response = await getProperties();
      if (response.success) {
        setAllPropertyReports(response?.properties)

      }
    } catch (error: any) {
      console.log(error);

    }
  };
  const fetchAllUsers = async () => {

    try {
      const response = await getAllUsers();
      if (response.success) {
        setAllUsers(response?.users)
      }
    } catch (error: any) {
      console.log(error);

    }
  };
  useEffect(() => {
    setLoading(true)
    if (router.isReady) {
      fetchAllUsers();
      fetchAllPropertyReports();
      fetchEnquiryReports();
    }
  }, [router.isReady])
  
  return (
    <>
      <HeaderTitle pageName={"Admin Reports"} />
      {loading && <LoadingSpinner /> }
      { router.route === "/admin/reports" && !invoiceAndReceiptModalShow && <SelectDropDown paths={reportsPaths} />}
      { !invoiceAndReceiptModalShow &&
      <DashboardReports allEnquiryReports={allEnquiryReports} allPropertyReports={allPropertyReports} allUsers={allUsers} modalToggle={modalToggle} />
      }
      { invoiceAndReceiptModalShow && <InvoiceAndReceiptUpdate userDataToEdit={userDataToEdit} modalToggle={modalToggle}/>}
    </>
  )
}

export default reports;

reports.admin = (page: React.ReactElement) => {
  return { page };
};
