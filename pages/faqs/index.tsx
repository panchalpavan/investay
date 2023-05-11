import React, { useState } from 'react'
import { Faq } from '../../components/property/Faq'
import Router from 'next/router'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
const index = () => {
    const [isRental,setIsRental ]=useState(false)
  return (
    <div className='md_link:px-20 px-4 mt-4' >

<button
          onClick={() => Router.back()}
          className="absolute left-0  ml-2 cursor-pointer"
        >
          <ArrowLeftIcon className="h-8 w-8 text-black" />
        </button>
<Faq   isRental={isRental} setIsRental={setIsRental} />
    </div>
  )
}

export default index