import React from "react";

type TProps = {
  width: string;
  height: string;
  color: string;
};

export const Yoga = ({ width, height, color }: TProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2132 23.0073L23.7862 26.3898C23.7862 26.3898 30.8573 27.8913 30.8573 31.4627C30.8573 34 27.7113 34 27.7113 34H19.333L15.208 31.7083"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.7867 23.0073L11.2156 26.3898C11.2156 26.3898 4.14258 27.8913 4.14258 31.4627C4.14258 34 7.28858 34 7.28858 34H11.0836L15.2086 31.7083L20.2502 28.5"
          stroke="#FDB813"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 24.6977C1 24.6977 4.92883 23.8525 7.2865 23.0073C9.64233 11.1677 16.7117 12.0128 17.5 12.0128C18.2865 12.0128 25.3577 11.1677 27.7135 23.0073C30.0712 23.8507 34 24.6977 34 24.6977M17.5 8.33333C18.4725 8.33333 19.4051 7.94703 20.0927 7.25939C20.7804 6.57176 21.1667 5.63913 21.1667 4.66667C21.1667 3.69421 20.7804 2.76158 20.0927 2.07394C19.4051 1.38631 18.4725 1 17.5 1C16.5275 1 15.5949 1.38631 14.9073 2.07394C14.2196 2.76158 13.8333 3.69421 13.8333 4.66667C13.8333 5.63913 14.2196 6.57176 14.9073 7.25939C15.5949 7.94703 16.5275 8.33333 17.5 8.33333Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
