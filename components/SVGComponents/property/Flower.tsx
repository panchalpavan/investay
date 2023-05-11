import React from "react";

type TProps = {
  width: string;
  height: string;
  color: string;
};
export const Flower = ({ width, height, color }: TProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 33 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 20.9607C32 30.3607 25.8282 38 16.5 38C7.17182 38 1 30.3607 1 20.9607C4.11348 20.9871 7.14186 21.9879 9.66625 23.8245C12.1906 25.6612 14.0863 28.2429 15.0909 31.2127V18.1208H8.04545C6.92431 18.1208 5.84909 17.672 5.05632 16.8731C4.26355 16.0743 3.81818 14.9908 3.81818 13.861V5.34135C3.81818 5.04333 3.91123 4.75286 4.08416 4.51109C4.25708 4.26933 4.50111 4.08852 4.78168 3.99427C5.06225 3.90003 5.36513 3.89713 5.64742 3.98599C5.92971 4.07486 6.1771 4.25097 6.35455 4.48938L10.6664 10.1691L15.3164 1.6495C15.4441 1.45022 15.6194 1.28636 15.8261 1.1729C16.0329 1.05944 16.2646 1 16.5 1C16.7354 1 16.9671 1.05944 17.1739 1.1729C17.3806 1.28636 17.5559 1.45022 17.6836 1.6495L22.3336 10.1691L26.6455 4.48938C26.8229 4.25097 27.0703 4.07486 27.3526 3.98599C27.6349 3.89713 27.9378 3.90003 28.2183 3.99427C28.4989 4.08852 28.7429 4.26933 28.9158 4.51109C29.0888 4.75286 29.1818 5.04333 29.1818 5.34135V13.861C29.1818 14.9908 28.7364 16.0743 27.9437 16.8731C27.1509 17.672 26.0757 18.1208 24.9545 18.1208H17.9091V31.2127C18.9137 28.2429 20.8094 25.6612 23.3338 23.8245C25.8581 21.9879 28.8865 20.9871 32 20.9607V20.9607Z"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </>
  );
};
