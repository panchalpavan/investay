import React from "react";

type TProps = {
  width: string;
  height: string;
  color: string;
};
export const Scooter = ({ width, height, color }: TProps) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 30 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 12.9487C24.781 14.2888 26.6751 16.2169 27.9917 18.5391C29.3083 20.8613 30.001 23.4955 30 26.1769V43.6311H21.0643C20.6216 44.9086 19.8006 46.0148 18.7144 46.7973C17.6283 47.5798 16.3305 48 15 48C13.6695 48 12.3717 47.5798 11.2856 46.7973C10.1994 46.0148 9.37843 44.9086 8.93571 43.6311H9.99282e-07V26.1769C-0.000960333 23.4955 0.691712 20.8613 2.00832 18.5391C3.32492 16.2169 5.21902 14.2888 7.5 12.9487C7.1479 12.3048 6.87787 11.6179 6.69643 10.9044H9.99282e-07V6.54085H6.69857C7.17522 4.66836 8.24908 3.01003 9.75158 1.82619C11.2541 0.642339 13.1001 0 15 0C16.8999 0 18.7459 0.642339 20.2484 1.82619C21.7509 3.01003 22.8248 4.66836 23.3014 6.54085H30V10.9044H23.3014C23.1203 11.6173 22.8518 12.3042 22.5021 12.9487H22.5ZM19.3864 16.2214C18.0607 17.0281 16.5445 17.4527 15 17.4497C13.4556 17.4521 11.9396 17.0276 10.6136 16.2214C8.72839 17.083 7.12807 18.4812 6.00537 20.2475C4.88267 22.0138 4.28548 24.0729 4.28572 26.1769V39.2675H8.57143V30.5404C8.57143 28.8045 9.24872 27.1397 10.4543 25.9122C11.6599 24.6847 13.295 23.9951 15 23.9951C16.705 23.9951 18.3401 24.6847 19.5457 25.9122C20.7513 27.1397 21.4286 28.8045 21.4286 30.5404V39.2675H25.7143V26.1769C25.7145 24.0729 25.1173 22.0138 23.9946 20.2475C22.8719 18.4812 21.2716 17.083 19.3864 16.2214ZM15 28.3586C14.4317 28.3586 13.8866 28.5885 13.4848 28.9977C13.0829 29.4068 12.8571 29.9618 12.8571 30.5404V41.4493C12.8571 42.028 13.0829 42.5829 13.4848 42.9921C13.8866 43.4012 14.4317 43.6311 15 43.6311C15.5683 43.6311 16.1134 43.4012 16.5152 42.9921C16.9171 42.5829 17.1429 42.028 17.1429 41.4493V30.5404C17.1429 29.9618 16.9171 29.4068 16.5152 28.9977C16.1134 28.5885 15.5683 28.3586 15 28.3586ZM15 13.0862C16.1366 13.0862 17.2267 12.6265 18.0305 11.8081C18.8342 10.9898 19.2857 9.87992 19.2857 8.72263C19.2857 7.56534 18.8342 6.45545 18.0305 5.63713C17.2267 4.8188 16.1366 4.35907 15 4.35907C13.8634 4.35907 12.7733 4.8188 11.9695 5.63713C11.1658 6.45545 10.7143 7.56534 10.7143 8.72263C10.7143 9.87992 11.1658 10.9898 11.9695 11.8081C12.7733 12.6265 13.8634 13.0862 15 13.0862Z"
          fill={color}
        />
      </svg>
    </>
  );
};
