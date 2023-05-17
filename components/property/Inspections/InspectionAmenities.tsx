import React from "react";
import { TickMark } from "../../Utilities/TickMark";
import { Error } from "../../Utilities/Error";

const InspectionAmenities = ({ property }: any) => {
  return (
    <>
    <span className="text-lg font-bold border-b-4 mx-12 my-10 p-1 border-b-primaryColor "> Amenities </span>

    <div className="grid md:grid-cols-3 grid-cols-2 m-10 text-left">
      {
        Object.keys(property)?.map((amenity: any, index: any) => {
          const amenities = amenity.split(/(?=[A-Z])/);
          return (
            <div key={index} className="m-1 p-1 capitalize flex">
              {
                property[amenity] ?
                  <span>
                    <TickMark width="1.6rem" height="1.6rem" />
                  </span> :

                  <span>
                    <Error width="1.5rem" height="1.5rem"  />
                  </span>
              }

              <span className="mx-2 my-1">
                {
                  amenities?.map((value: any, index: any) => {
                    return (
                      <span key={index}>{value}&nbsp;</span>
                    )
                  })
                }
              </span>
            </div>
          )
        })
      }


    </div>
    </>
  )
};

export default InspectionAmenities;
