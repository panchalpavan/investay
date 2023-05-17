import React from "react";

type TProps = {
  height: string;
  width: string;
  color: string;
};

export const Bell = ({ height, width, color }: TProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 63 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.6292 54.5061C59.6119 52.7077 57.8458 50.646 56.3784 48.3766C54.7764 45.244 53.8162 41.823 53.5542 38.3143V27.98C53.5681 22.4689 51.569 17.1425 47.9326 13.0015C44.2962 8.86044 39.2727 6.18982 33.8061 5.4914V2.79277C33.8061 2.05208 33.5119 1.34173 32.9881 0.817983C32.4644 0.294238 31.754 0 31.0133 0C30.2726 0 29.5623 0.294238 29.0385 0.817983C28.5148 1.34173 28.2206 2.05208 28.2206 2.79277V5.53324C22.8029 6.28201 17.8402 8.96877 14.2515 13.0959C10.6629 17.223 8.69154 22.5109 8.70256 27.98V38.3143C8.44055 41.823 7.48039 45.244 5.87841 48.3766C4.4368 50.6408 2.69904 52.7022 0.711267 54.5061C0.488121 54.7021 0.309278 54.9434 0.186639 55.2139C0.0640004 55.4845 0.000376127 55.778 0 56.075V58.9201C0 59.4749 0.220402 60.007 0.612721 60.3993C1.00504 60.7917 1.53714 61.0121 2.09196 61.0121H60.2485C60.8033 61.0121 61.3354 60.7917 61.7277 60.3993C62.1201 60.007 62.3405 59.4749 62.3405 58.9201V56.075C62.3401 55.778 62.2765 55.4845 62.1538 55.2139C62.0312 54.9434 61.8523 54.7021 61.6292 54.5061ZM4.35128 56.8281C6.29766 54.9479 8.01137 52.8409 9.45567 50.5523C11.4736 46.7689 12.651 42.5945 12.9074 38.3143V27.98C12.8244 25.5283 13.2357 23.085 14.1167 20.7955C14.9976 18.506 16.3303 16.4173 18.0353 14.6536C19.7403 12.8899 21.7828 11.4873 24.0412 10.5294C26.2996 9.57152 28.7276 9.07787 31.1807 9.07787C33.6338 9.07787 36.0618 9.57152 38.3202 10.5294C40.5785 11.4873 42.621 12.8899 44.3261 14.6536C46.0311 16.4173 47.3638 18.506 48.2447 20.7955C49.1257 23.085 49.5369 25.5283 49.454 27.98V38.3143C49.7104 42.5945 50.8878 46.7689 52.9057 50.5523C54.35 52.8409 56.0637 54.9479 58.0101 56.8281H4.35128Z"
        fill={color}
      />
      <path
        d="M31.2762 67.9995C32.594 67.9691 33.8586 67.4737 34.8463 66.6008C35.834 65.7279 36.4812 64.5339 36.6734 63.2298H25.6697C25.8673 64.5693 26.5448 65.7914 27.5761 66.6688C28.6074 67.5462 29.9223 68.019 31.2762 67.9995Z"
        fill={color}
      />
    </svg>
  );
};
