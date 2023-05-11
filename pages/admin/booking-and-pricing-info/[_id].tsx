import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProperty } from '../../../action-creators/properties/getProperty';
import BookingAndPricingInfo from '../../../components/admin/BookingAndPricingInfo';
import HeaderTitle from '../../../components/Layout/HeaderTitle';
import { setProperty } from '../../../redux/property/propertyReducer';

const bookingAndPricingInfo = () => {
    const router = useRouter()
    const id = router?.query?._id;
    const dispatch = useDispatch()
    const [property, setPropertyy] = useState([])
    const fetchProperty = async (id: any) => {
        try {
            const response = await getProperty({ id });
            if (response.success) {
                if (response.property) {
                    setPropertyy(response.property)
                }
                dispatch(setProperty(response.property));

            }
        } catch (error: any) {
            router.replace("/admin/property-overview");
        }
    };
    useEffect(() => {
        if (router.isReady) {
            fetchProperty(id);
        }
    }, [router.isReady])


    return (
        <>
            <HeaderTitle pageName={"Booking and Pricing Info"} />
            {
                property !== null && property?.length !== 0 &&
                <BookingAndPricingInfo property={property} />
            }
        </>
    )
}

export default bookingAndPricingInfo

bookingAndPricingInfo.admin = (page: React.ReactElement) => {
    return { page };
};
