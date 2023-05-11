import React from "react";

type TProps = {
  styles: string;
};
export const Brouche = ({ styles }: TProps) => {
  return (
    <svg
      // width={width}
      // height={height}
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles}
    >
      <path
        d="M22.875 36.2188H38.125"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.875 28.5938H38.125"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.125 9.53125H47.6562C48.1618 9.53125 48.6467 9.73209 49.0042 10.0896C49.3617 10.4471 49.5625 10.9319 49.5625 11.4375V51.4688C49.5625 51.9743 49.3617 52.4592 49.0042 52.8167C48.6467 53.1742 48.1618 53.375 47.6562 53.375H13.3438C12.8382 53.375 12.3533 53.1742 11.9958 52.8167C11.6383 52.4592 11.4375 51.9743 11.4375 51.4688V11.4375C11.4375 10.9319 11.6383 10.4471 11.9958 10.0896C12.3533 9.73209 12.8382 9.53125 13.3438 9.53125H22.875"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9688 17.1562V15.25C20.9688 12.7222 21.9729 10.2978 23.7604 8.51039C25.5478 6.72293 27.9722 5.71875 30.5 5.71875C33.0278 5.71875 35.4522 6.72293 37.2396 8.51039C39.0271 10.2978 40.0312 12.7222 40.0312 15.25V17.1562H20.9688Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
