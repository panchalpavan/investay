import React from "react";
import { Error } from "../../Utilities/Error";
import { TickMark } from "../../Utilities/TickMark";

const InspectionBuilding = () => {
  const buildingInspections: any = {
    "Apperance of building": true, "Insurance": true,
    "Structural soundness": true, "Policy on pets": true, "Cracks in the walls & floors": true, "Medical facility / conveyance store": true,
    "Leaks in the roofs or walls": true, " Pest Inspection": true, "Roof condition": true, "Propety Tax": true, "Exposed perimeters on": true, "Electricity bills meter": true,
    "Gluttering": true, "Water bills/meter": true, "Plumbing": false, "Noise from neighbours": true, "Root damage from tress": true, "Noise from traffic": true,
    "Water tightness in garage": true, "Railway / Airfact Noise": true, "Water source(borewell/city board line)": true, "Neighbouring facilities": false, "Maintenence": true,
    "Gyesers/solar water heater": true, "Security & CCTV survelience": true, "Housekeeping Staff panels": true, "Safety overload switches": true,
    "Visitors parking": true, "Deposits": true, "Easy access to the property": true, "Housing Society": true
  }
  return (
    <>
      <span className="text-lg font-bold border-b-4 mx-12 my-10 p-1 border-b-primaryColor "> Building Inspection </span>
      <div className="grid md:grid-cols-2 grid-cols-1 m-10 text-left">
        {
          Object.keys(buildingInspections)?.map((buildingInspection: any, index: any) => {
            return (
              <div key={index} className="m-1 p-1 capitalize flex">
                {
                  buildingInspections[buildingInspection] ?
                    <span>
                      <TickMark width="1.6rem" height="1.6rem"  />
                    </span> :
                    <span>
                      <Error width="1.5rem" height="1.5rem" />
                    </span>
                }

                <span className="mx-2 my-1">
                  {buildingInspection}
                </span>
              </div>
            )
          })
        }


      </div>
    </>
  )


    ;
};

export default InspectionBuilding;
