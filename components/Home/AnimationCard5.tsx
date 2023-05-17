import React from "react";
import { Wallet } from "../SVGComponents/Home/Wallet";

const AnimationCard5 = () => {
  return (
    <div className="relative h-[240px] w-[240px] flex justify-center items-center p-1 circle-5 rotate-0 m-8 xl:m-10">
      <div className="h-full w-full rounded-full border border-dashed border-primaryColor flex justify-center items-center circle5-border z-10"></div>
      <div className="bg-white h-[220px] w-[220px] rounded-full z-10 flex justify-center items-center absolute">
        <div className="bg-vio-gradient h-[195px] w-[195px] rounded-full flex flex-col justify-center items-center ">
          <div className="wallet-animation">
            <Wallet height="45" width="45" color="black" />
          </div>

          <div className="flex uppercase text-xs font-semibold mt-4 ">
            <p>Transparent Process</p>
            {/* <span className="flip5-1">t</span>
            <span className="flip5-2">r</span>
            <span className="flip5-3">a</span>
            <span className="flip5-4">n</span>
            <span className="flip5-5">s</span>
            <span className="flip5-6">p</span>
            <span className="flip5-7">a</span>
            <span className="flip5-8">r</span>
            <span className="flip5-9">e</span>
            <span className="flip5-10">n</span>
            <span className="flip5-11">t&nbsp;</span>
            <span className="flip5-12">p</span>
            <span className="flip5-13">r</span>
            <span className="flip5-14">o</span>
            <span className="flip5-15">c</span>
            <span className="flip5-16">e</span>
            <span className="flip5-17">s</span>
            <span className="flip5-18">s</span> */}
          </div>
          {/* para5 */}
          <div className="text-center">
            <p className="text-xs font-semibold text-slate-500 mt-2">
           Assured moneyback option   
            </p>
            <p className="text-xs font-semibold text-slate-500">option</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden quarter-left-circle bg-transparent absolute left-0 top-0 w-[120px] h-[120px] rounded-[120px_0_0_0] ">
        <div className="circle5-quarter-left-rectangle bg-primaryColor absolute bottom-0 h-[120px] w-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden quarter-right-circle bg-transparent absolute right-0 top-0 w-[120px] h-[120px] rounded-[0_120px_0_0] ">
        <div className="circle5-quarter-right-rectangle bg-primaryColor w-[120px] h-[120px] absolute -left-[120px] origin-bottom-right" />
      </div>

      <div className="overflow-hidden bottom-semicircle bg-transparent absolute left-0 bottom-0 h-[120px] w-[240px] rounded-[0_0_120px_120px] ">
        <div className="circle5-rectangle bg-primaryColor w-[240px] h-[120px] absolute origin-top" />
      </div>
    </div>
  );
};

export default AnimationCard5;
