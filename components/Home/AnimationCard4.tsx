import React from "react";
import { Agents } from "../SVGComponents/Home/Agents";

const AnimationCard4 = () => {
  return (
    <div className="relative h-[240px] w-[240px] flex justify-center items-center p-1 circle-4 rotate-90 m-8 xl:m-10">
      <div className="h-full w-full rounded-full border border-dashed border-primaryColor flex justify-center items-center circle4-border z-10"></div>
      <div className="bg-white h-[220px] w-[220px] rounded-full z-10 flex justify-center items-center absolute">
        <div className="bg-vio-gradient h-[195px] w-[195px] rounded-full flex flex-col justify-center items-center -rotate-90">
          <div className="agent-animation">
            <Agents height="45" width="45" color="black" />
          </div>

          <div className="flex uppercase text-xs font-semibold mt-4 ">
            <p>dedicated agents</p>
            {/* <span className="flip4-1">d</span>
            <span className="flip4-2">e</span>
            <span className="flip4-3">d</span>
            <span className="flip4-4">i</span>
            <span className="flip4-5">c</span>
            <span className="flip4-6">a</span>
            <span className="flip4-7">t</span>
            <span className="flip4-8">e</span>
            <span className="flip4-9">d&nbsp;</span>
            <span className="flip4-10">a</span>
            <span className="flip4-11">g</span>
            <span className="flip4-12">e</span>
            <span className="flip4-13">n</span>
            <span className="flip4-14">t</span>
            <span className="flip4-15">s</span> */}
          </div>
          {/* para4 */}
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-500 mt-2">

Handpicked relationship managers to assist you 
            </p>
            {/* <p className="text-xs font-semibold text-slate-500">every stage</p> */}
          </div>
        </div>
      </div>

      <div className="overflow-hidden quarter-left-circle bg-transparent absolute left-0 top-0 w-[120px] h-[120px] rounded-[120px_0_0_0] ">
        <div className="circle4-quarter-left-rectangle bg-primaryColor absolute bottom-0 h-[120px] w-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden quarter-right-circle bg-transparent absolute right-0 top-0 w-[120px] h-[120px] rounded-[0_120px_0_0] ">
        <div className="circle4-quarter-right-rectangle bg-primaryColor w-[120px] h-[120px] absolute -left-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden bottom-semicircle bg-transparent absolute left-0 bottom-0 h-[120px] w-[240px] rounded-[0_0_120px_120px] ">
        <div className="circle4-rectangle bg-primaryColor w-[240px] h-[120px] absolute origin-top" />
      </div>
    </div>
  );
};

export default AnimationCard4;
