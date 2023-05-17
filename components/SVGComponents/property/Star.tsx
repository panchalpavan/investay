import React, { useState } from "react";

type TProps = {
  width: string;
  height: string;
  onStarClick?: any;
  ratings: any;
  index: any;
  onStarHover?: any;
  onStarBlur?: any;
  val?: any;
};
export const Star = ({ width, height, onStarClick, ratings, index, onStarHover, onStarBlur, val}: TProps) => {
    
  return (
    <div className="cursor-pointer" onClick={onStarClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 29 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onStarClick}
        onMouseOver={onStarHover}
        onMouseLeave={onStarBlur}
      >
        <path
          d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z"
          fill={(val || ratings) >= index ? "#FDB813" : "#D9D9D9"}
        />
      </svg>
    </div>
  );
};
