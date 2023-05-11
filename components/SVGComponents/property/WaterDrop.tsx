import React from "react";

type TProps = {
  width: string;
  height: string;
  color: string;
};

export const WaterDrop = ({ width, height, color }: TProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0003 24.6667C8.52497 24.6667 6.151 23.6833 4.40066 21.933C2.65032 20.1827 1.66699 17.8087 1.66699 15.3333C1.66699 11.2477 4.82866 7.97984 7.60883 4.98501L11.0003 1.33334L14.3918 4.98501C17.172 7.98101 20.3337 11.2488 20.3337 15.3333C20.3337 17.8087 19.3503 20.1827 17.6 21.933C15.8496 23.6833 13.4757 24.6667 11.0003 24.6667V24.6667Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
