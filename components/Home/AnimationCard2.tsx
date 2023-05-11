import React from "react";
import { Bell } from "../SVGComponents/Home/Bell";

const AnimationCard2 = () => {
  return (
    <div className="relative h-[240px] w-[240px] flex justify-center items-center p-1 circle-2 rotate-180 m-8 xl:m-10">
      <div className="h-full w-full rounded-full border border-dashed border-primaryColor flex justify-center items-center circle2-border z-10"></div>
      <div className="bg-white h-[220px] w-[220px] rounded-full z-10 flex justify-center items-center absolute">
        <div className="bg-vio-gradient h-[195px] w-[195px] rounded-full flex flex-col justify-center items-center -rotate-180">
          <div className="bell-animation">
            <Bell height="45" width="45" color="black" />
          </div>
          <div className="flex uppercase text-xs font-semibold mt-4 ">
            <p>subscription model</p>
            {/* <span className="flip2-1">s</span>
            <span className="flip2-2">u</span>
            <span className="flip2-3">b</span>
            <span className="flip2-4">s</span>
            <span className="flip2-5">c</span>
            <span className="flip2-6">r</span>
            <span className="flip2-7">i</span>
            <span className="flip2-8">p</span>
            <span className="flip2-9">t</span>
            <span className="flip2-10">i</span>
            <span className="flip2-11">o</span>
            <span className="flip2-12">n&nbsp;</span>
            <span className="flip2-13">m</span>
            <span className="flip2-14">o</span>
            <span className="flip2-15">d</span>
            <span className="flip2-16">e</span>
            <span className="flip2-17">l</span> */}
          </div>
          {/* <div className="flex uppercase text-xs font-semibold"></div> */}
          {/* para2 */}
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-500 mt-2">
              Ensures only serious
            </p>
            <p className="text-xs font-semibold text-slate-500">enquiries</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden quarter-left-circle bg-transparent absolute left-0 top-0 w-[120px] h-[120px] rounded-[120px_0_0_0] ">
        <div className="circle2-quarter-left-rectangle bg-primaryColor absolute bottom-0 h-[120px] w-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden quarter-right-circle bg-transparent absolute right-0 top-0 w-[120px] h-[120px] rounded-[0_120px_0_0] ">
        <div className="circle2-quarter-right-rectangle bg-primaryColor w-[120px] h-[120px] absolute -left-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden bottom-semicircle bg-transparent absolute left-0 bottom-0 h-[120px] w-[240px] rounded-[0_0_120px_120px] ">
        <div className="circle2-rectangle bg-primaryColor w-[240px] h-[120px] absolute origin-top" />
      </div>
    </div>
  );
};

export default AnimationCard2;
