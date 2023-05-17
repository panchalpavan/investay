import React from "react";
import { TickMark } from "../../Utilities/TickMark";
import { Error } from "../../Utilities/Error";

const InspectionOverview = ({ property }: any) => {
  const overviews: any = {
    "No. of Doors & Windows": true, "Inbuild wardrobes": true,
    "North": true, "Bed Frame & Bed Sheet": true, "Locks on windows & Doors - Under Repair": true, "Flooring wooden / marble / tiles": true,
    "Interior(furnished/non-furnished": true, "Bathroom #2": true, "Ceiling Height": true, "Kitchen counters/slab": true, "Door locks (Manual/digital)": true, "Dampness in bathroom": true,
    "Foyer": true, "Bathroom fittings": true, "Kitchen": true, "Air conditioning": true, "Living / lounge": true, "Gas piping /leaks": false,
    "Dining Room": true, "Stairs": true, "Bedroom #2": false, "Power points & switches": true, "Solar panels": true,
    "Gyesers/solar water heater": true, "Security & CCTV survelience": true, "Housekeeping Staff panels": true, "Safety overload switches": true,
    "Laundry": true, "Fire extinguisher": true, "Garbage Chute overload switches": true, "Lights & Electricity": true,
    "Outdoor areas": true, "Fire alarm / water sprinkler": true, "Fencing": true, "Water / pipes": true,
    "Rain water tank": true, "Fire alarm": false, "Sewage treatment plant": false,
  }

  return (
    <>
    <span className="text-lg font-bold border-b-4 mx-12 my-10 p-1 border-b-primaryColor "> Overview </span>
    <div className="grid md:grid-cols-2 grid-cols-1 m-10 text-left">
      {
        Object.keys(overviews)?.map((overview: any, index: any) => {
          return (
            <div key={index} className="m-1 p-1 capitalize flex">
              {
                overviews[overview] ?
                  <span>
                    <TickMark width="1.6rem" height="1.6rem"  />
                  </span> :

                  <span>
                    <Error width="1.5rem" height="1.5rem"  />
                  </span>
              }

              <span className="mx-2 my-1">
                {overview}

              </span>
            </div>
          )
        })
      }


    </div>
    </>
  )
};

export default InspectionOverview;
