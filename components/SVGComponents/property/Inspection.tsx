import React from "react";

type TProps = {
  style: string;
};

export const Inspection = (props: TProps) => {
  return (
    <>
      <svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.style}
      >
        <path
          d="M16.3333 38.1111H10.8889V19.0556H16.3333V38.1111ZM27.2222 38.1111H21.7778V10.8889H27.2222V38.1111ZM38.1111 38.1111H32.6667V27.2222H38.1111V38.1111ZM45 45.5H4V4H45V43.8278M43.5556 0H5.44444C2.45 0 0 2.45 0 5.44444V43.5556C0 46.55 2.45 49 5.44444 49H43.5556C46.55 49 49 46.55 49 43.5556V5.44444C49 2.45 46.55 0 43.5556 0Z"
          fill="black"
        />
      </svg>
    </>
  );
};
