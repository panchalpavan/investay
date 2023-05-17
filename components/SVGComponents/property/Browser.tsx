import React from "react";

type TProps = {
  width: string;
  height: string;
  color: string;
};
export const Browser = ({ width, height, color }: TProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.6433 16.3217C31.6433 7.85951 24.7838 1 16.3217 1C7.85951 1 1 7.85951 1 16.3217C1 24.7838 7.85951 31.6433 16.3217 31.6433"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.8534 1.07666C17.8534 1.07666 22.4499 7.12872 22.4499 16.3217M14.7891 31.5668C14.7891 31.5668 10.1926 25.5147 10.1926 16.3217C10.1926 7.12872 14.7891 1.07666 14.7891 1.07666M1.96484 21.6843H16.3212M1.96484 10.9591H30.6776"
          stroke="#FDB813"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.4578 25.3875C32.2147 25.8533 32.1672 26.9856 31.3889 27.0744L27.4558 27.5203L25.6923 31.0627C25.3429 31.7659 24.2627 31.4212 24.0835 30.5509L22.1606 21.1802C22.0089 20.4447 22.6708 19.982 23.3097 20.3758L31.4578 25.3875V25.3875Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};
