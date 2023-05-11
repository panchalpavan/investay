import React from "react";
import { BellNotify } from "../SVGComponents/Home/Bell-notify";

const AnimationCard3 = () => {
  return (
    <div className="relative h-[240px] w-[240px] flex justify-center items-center p-1 circle-3 rotate-[270deg] m-8 xl:m-10">
      <div className="h-full w-full rounded-full border border-dashed border-primaryColor flex justify-center items-center circle3-border z-10"></div>
      <div className="bg-white h-[220px] w-[220px] rounded-full z-10 flex justify-center items-center absolute">
        <div className="bg-vio-gradient h-[195px] w-[195px] rounded-full flex flex-col justify-center items-center -rotate-[270deg]">
          <div className="ring-animation">
            <BellNotify height="45" width="45" color="black" />
          </div>
          <div className="flex uppercase text-xs font-semibold mt-4 ">
            <p>regular updates</p>
            {/* <span className="flip3-1">r</span>
            <span className="flip3-2">e</span>
            <span className="flip3-3">g</span>
            <span className="flip3-4">u</span>
            <span className="flip3-5">l</span>
            <span className="flip3-6">a</span>
            <span className="flip3-7">r&nbsp;</span>
            <span className="flip3-8">u</span>
            <span className="flip3-9">p</span>
            <span className="flip3-10">d</span>
            <span className="flip3-11">a</span>
            <span className="flip3-12">t</span>
            <span className="flip3-13">e</span>
            <span className="flip3-14">s</span> */}
          </div>
          <div className="flex uppercase text-xs font-semibold"></div>
          {/* para3 */}
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-500 mt-2">
              Timely notifications at
            </p>
            <p className="text-xs font-semibold text-slate-500">every stage</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden quarter-left-circle bg-transparent absolute left-0 top-0 w-[120px] h-[120px] rounded-[120px_0_0_0] ">
        <div className="circle3-quarter-left-rectangle bg-primaryColor absolute bottom-0 h-[120px] w-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden quarter-right-circle bg-transparent absolute right-0 top-0 w-[120px] h-[120px] rounded-[0_120px_0_0] ">
        <div className="circle3-quarter-right-rectangle bg-primaryColor w-[120px] h-[120px] absolute -left-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden bottom-semicircle bg-transparent absolute left-0 bottom-0 h-[120px] w-[240px] rounded-[0_0_120px_120px] ">
        <div className="circle3-rectangle bg-primaryColor w-[240px] h-[120px] absolute origin-top" />
      </div>
    </div>
  );
};

export default AnimationCard3;
