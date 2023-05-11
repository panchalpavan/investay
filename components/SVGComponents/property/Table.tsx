import React from "react";

type TProps = {
  width: string;
  height: string;
  color: string;
};
export const Table = ({ width, height, color }: TProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 33 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.25 0.375H32.75V5.25H29.5L31.125 19.875H27.0625L26.1525 11.75H6.8475L5.9375 19.875H1.875L3.5 5.25H0.25V0.375ZM25.4375 5.25H7.5625L7.22125 8.5H25.7787L25.4375 5.25Z"
          fill={color}
        />
      </svg>
    </>
  );
};
