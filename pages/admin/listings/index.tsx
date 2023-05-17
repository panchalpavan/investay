import React, { useEffect, useState } from 'react'
import { getAllproperties } from '../../../action-creators/properties/property';
import DashboardListings from '../../../components/admin/DashboardListings';
import HeaderTitle from '../../../components/Layout/HeaderTitle';
import LoadingSpinner from '../../../components/LoadingSpinner';

const listings = () => {
  const [allProperties, setAllProperties] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getAllproperties()
      .then((response: any) => {
        setAllProperties(response?.properties)
        setLoading(false)

      })
  }, [])
  return (
    <>
      <HeaderTitle pageName={"Admin Listings"} />
      {loading && <LoadingSpinner />}
      {!loading && <DashboardListings allProperties={allProperties} />}
    </>
  )
}

export default listings;

listings.admin = (page: React.ReactElement) => {
  return { page };
};
