import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProperty } from '../../../action-creators/properties/getProperty';
import PropertyOverview from '../../../components/admin/PropertyOverview';
import HeaderTitle from '../../../components/Layout/HeaderTitle';
import { Faq } from '../../../components/property/Faq';
import { setProperty } from '../../../redux/property/propertyReducer';

const propertyOverView = () => {
  const router = useRouter()
  const id = router?.query?._id;
  const dispatch = useDispatch()
  const [property,setPropertyy] = useState([])
  const [isRental, setIsRental] = useState(true);

  const fetchProperty = async (id: any) => {
    try {
      const response = await getProperty({ id });
      if (response.success) {
        if(response.property){
          setPropertyy(response.property)
        }
        dispatch(setProperty(response.property));
       
      }
    } catch (error: any) {
      router.replace("/admin/property-overview");
    }
  };
  useEffect(()=>{
    if (router.isReady) {
      fetchProperty(id);
    }
  },[router.isReady])
  
 
  return (
    <>
    <HeaderTitle pageName={"Property Overview"} />
    {
      property!==null && property?.length!==0 &&
    <PropertyOverview property={property}/>
    }
    <div className='mt-10'>
    <Faq isRental={isRental} setIsRental={setIsRental} />
    </div>
</>
  )
}

export default propertyOverView

propertyOverView.admin = (page: React.ReactElement) => {
    return { page };
  };
  