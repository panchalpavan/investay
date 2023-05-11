import React from "react";

const InspectionRemark = () => {
  return(
    <div className="m-5">
       <span className="text-lg font-bold border-b-4 mx-12 my-10 p-1 border-b-primaryColor "> Remark </span>

    <div className="h-44 m-3 shadow-lg">
      <textarea rows={4} cols={50}  className="h-44 shadow-lg p-3 w-full border-none" >
        </textarea>
     

    </div>
    </div>
  );
};

export default InspectionRemark;
