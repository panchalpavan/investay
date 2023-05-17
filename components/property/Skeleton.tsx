import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="col-span-4  h-full shadow-md rounded-lg bg-white animate-pulse duration-200 overflow-hidden ">
        <div className="w-full h-[10rem] bg-gray-200"></div>
        <div className="px-4">
          <div className="w-[70%] bg-gray-200 h-[2rem] mt-2"></div>
          <div className="w-[60%] bg-gray-200 h-[0.8rem] mt-1"></div>
          <div className="flex  gap-2  items-end">
            <div className="w-[25%] bg-gray-200 h-[1.5rem] mt-2"></div>
            <div className="w-[55%] bg-gray-200 h-[0.8rem]"></div>
          </div>
          <div className="flex justify-between mt-5 gap-2">
            <div className="w-full flex flex-col gap-2">
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between w-full ">
          <div className="w-[10rem] h-10 bg-gray-200 rounded-b-lg rounded-r-lg"></div>
          <div className="w-[10rem] h-10 bg-gray-200 rounded-b-lg rounded-l-lg"></div>
        </div>
      </div>

      <div className="col-span-4  h-full shadow-md rounded-lg bg-white animate-pulse duration-200 overflow-hidden ">
        <div className="w-full h-[10rem] bg-gray-200"></div>
        <div className="px-4">
          <div className="w-[70%] bg-gray-200 h-[2rem] mt-2"></div>
          <div className="w-[60%] bg-gray-200 h-[0.8rem] mt-1"></div>
          <div className="flex  gap-2  items-end">
            <div className="w-[25%] bg-gray-200 h-[1.5rem] mt-2"></div>
            <div className="w-[55%] bg-gray-200 h-[0.8rem]"></div>
          </div>
          <div className="flex justify-between mt-5 gap-2">
            <div className="w-full flex flex-col gap-2">
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
              <div className="bg-gray-200 h-[0.8rem] w-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between w-full ">
          <div className="w-[10rem] h-10 bg-gray-200 rounded-b-lg rounded-r-lg"></div>
          <div className="w-[10rem] h-10 bg-gray-200 rounded-b-lg rounded-l-lg"></div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
