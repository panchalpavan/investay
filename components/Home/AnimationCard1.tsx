import React from "react";
import { Headset } from "../SVGComponents/Home/Headset";

const AnimationCard1 = () => {
  return (
    <div className="relative h-[240px] w-[240px] rotate-0 flex justify-center items-center p-1 circle-1 m-8 xl:m-10">
      <div className="h-full w-full rounded-full border border-dashed border-primaryColor flex justify-center items-center circle1-border z-10"></div>
      <div className="bg-white h-[220px] w-[220px] rounded-full z-10 flex justify-center items-center absolute">
        <div className="bg-vio-gradient h-[195px] w-[195px] rounded-full flex flex-col justify-center items-center">
          <div className="headset-animation">
            <Headset height="45" width="45" color="black" />
          </div>

          <div className="flex uppercase text-xs font-semibold mt-4 ">
            <p>hassle-free</p>
            {/* <span className="flip1-1">h</span>
            <span className="flip1-2">a</span>
            <span className="flip1-3">s</span>
            <span className="flip1-4">s</span>
            <span className="flip1-5">l</span>
            <span className="flip1-6">e</span>
            <span className="flip1-7">-</span>
            <span className="flip1-8">f</span>
            <span className="flip1-9">r</span>
            <span className="flip1-10">e</span>
            <span className="flip1-11">e</span> */}
          </div>
          <div className="flex uppercase text-xs font-semibold">
            <p>experience</p>
            {/* <span className="flip1-12">e</span>
            <span className="flip1-13">x</span>
            <span className="flip1-14">p</span>
            <span className="flip1-15">e</span>
            <span className="flip1-16">r</span>
            <span className="flip1-17">i</span>
            <span className="flip1-18">e</span>
            <span className="flip1-19">n</span>
            <span className="flip1-20">c</span>
            <span className="flip1-21">e</span> */}
          </div>
          {/* para1 */}
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-500 mt-2">
              End-to-end assistance
            </p>
            <p className="text-xs font-semibold text-slate-500">
              every stage of selling/
            </p>
            <p className="text-xs font-semibold text-slate-500">
              purchase/renting
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden quarter-left-circle bg-transparent absolute left-0 top-0 w-[120px] h-[120px] rounded-[120px_0_0_0] ">
        <div className="circle1-quarter-left-rectangle bg-primaryColor absolute bottom-0 h-[120px] w-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden quarter-right-circle bg-transparent absolute right-0 top-0 w-[120px] h-[120px] rounded-[0_120px_0_0] ">
        <div className="circle1-quarter-right-rectangle bg-primaryColor w-[120px] h-[120px] absolute -left-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden bottom-semicircle bg-transparent absolute left-0 bottom-0 h-[120px] w-[240px] rounded-[0_0_120px_120px] ">
        <div className="circle1-rectangle bg-primaryColor w-[240px] h-[120px] absolute origin-top" />
      </div>
    </div>
  );
};

export default AnimationCard1;
