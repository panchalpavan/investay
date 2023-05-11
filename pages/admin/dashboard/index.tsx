import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { getProperties } from '../../../action-creators/properties/allProperties';
import { updateCounter } from '../../../action-creators/visitorsCount/siteVisitorsCount';
import DashboardOverview from '../../../components/admin/DashboardOverview';
import HeaderTitle from '../../../components/Layout/HeaderTitle';
import LoadingSpinner from '../../../components/LoadingSpinner';

const dashboard = () => {
  const router = useRouter();
  const [allProperties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visitorsCount, setVisitorsCount] = useState(false);
  const fetchAllProperties = async () => {
    setLoading(true)
    try {
      const response = await getProperties();
      console.log('DASHBOARD res', response)
      if (response.success) {
        setLoading(false)
        setProperties(response?.properties)

      }
    } catch (error: any) {
      console.log(error);
      setLoading(false)
    }
  };
  const getVisitorsCount = async () => {
    setLoading(true)

    try {
      if (sessionStorage.getItem("visit") === null) {
        const response = await updateCounter("new-user");
        setVisitorsCount(response?.count)

      } else {
        const response = await updateCounter("existing-user");
        setVisitorsCount(response?.count)
      }
      sessionStorage.setItem("visit", "new");
      setLoading(false)

    } catch (error: any) {
      console.log(error);
      setLoading(false)
    }
  };
  useEffect(() => {
    if (router.isReady) {
      fetchAllProperties();
      getVisitorsCount()

    }
  }, [router.isReady])
  return (
    <>
      <HeaderTitle pageName={"Admin Dashboard"} />
      {loading && <LoadingSpinner /> }
      <DashboardOverview allProperties={allProperties} visitorsCount={visitorsCount} />
    </>
  )
}

export default dashboard;

dashboard.admin = (page: React.ReactElement) => {
  return { page };
};
