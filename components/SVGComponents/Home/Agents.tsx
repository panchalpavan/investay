import React from "react";

type TProps = {
  height: string;
  width: string;
  color: string;
};

export const Agents = ({ width, height, color }: TProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.875 12.375C34.875 9.09295 33.5712 5.94532 31.2504 3.62455C28.9297 1.30379 25.7821 0 22.5 0C19.2179 0 16.0703 1.30379 13.7496 3.62455C11.4288 5.94532 10.125 9.09295 10.125 12.375C10.125 15.6571 11.4288 18.8047 13.7496 21.1254C16.0703 23.4462 19.2179 24.75 22.5 24.75C25.7821 24.75 28.9297 23.4462 31.2504 21.1254C33.5712 18.8047 34.875 15.6571 34.875 12.375ZM14.625 12.375C14.625 11.3408 14.8287 10.3168 15.2244 9.36137C15.6202 8.40593 16.2003 7.5378 16.9315 6.80653C17.6628 6.07527 18.5309 5.4952 19.4864 5.09945C20.4418 4.70369 21.4658 4.5 22.5 4.5C23.5342 4.5 24.5582 4.70369 25.5136 5.09945C26.4691 5.4952 27.3372 6.07527 28.0685 6.80653C28.7997 7.5378 29.3798 8.40593 29.7756 9.36137C30.1713 10.3168 30.375 11.3408 30.375 12.375C30.375 14.4636 29.5453 16.4666 28.0685 17.9435C26.5916 19.4203 24.5886 20.25 22.5 20.25C20.4114 20.25 18.4084 19.4203 16.9315 17.9435C15.4547 16.4666 14.625 14.4636 14.625 12.375ZM6.75 29.25H25.5735C24.8355 30.645 24.2865 32.157 23.9625 33.75H6.75C6.15326 33.75 5.58097 33.9871 5.15901 34.409C4.73705 34.831 4.5 35.4033 4.5 36V38.25C4.5 43.92 9.4455 50.013 18.432 51.435C16.983 52.425 15.777 53.7435 14.9175 55.278C5.4225 52.7085 0 45.3915 0 38.25V36C0 34.2098 0.711159 32.4929 1.97703 31.227C3.2429 29.9612 4.95979 29.25 6.75 29.25ZM30.9555 29.25C33.2235 26.505 36.657 24.75 40.5 24.75C43.1949 24.7453 45.8174 25.6224 47.9672 27.2473C50.1171 28.8723 51.6763 31.156 52.407 33.75C53.0583 36.0652 53.0216 38.52 52.3014 40.8147C51.5811 43.1095 50.2085 45.1449 48.351 46.6727C46.4935 48.2005 44.2314 49.1546 41.8408 49.4185C39.4503 49.6824 37.0346 49.2448 34.8885 48.159C33.2362 47.318 31.7939 46.1166 30.6683 44.6433C29.5427 43.1701 28.7625 41.4628 28.3853 39.6475C28.0082 37.8322 28.0438 35.9554 28.4894 34.1558C28.9351 32.3561 29.7794 30.6795 30.96 29.25H30.9555ZM33.3855 33.75C32.9423 34.6849 32.6876 35.6979 32.6358 36.7312C32.5841 37.7646 32.7365 38.798 33.0841 39.7724C33.4318 40.7469 33.968 41.6433 34.6621 42.4105C35.3562 43.1778 36.1946 43.8008 37.1295 44.244C38.0644 44.6872 39.0774 44.9419 40.1107 44.9937C41.1441 45.0454 42.1774 44.893 43.1519 44.5454C44.1264 44.1977 45.0228 43.6615 45.79 42.9674C46.5573 42.2733 47.1803 41.4349 47.6235 40.5C48.5186 38.6113 48.6268 36.4444 47.9242 34.476C47.2217 32.5076 45.7659 30.8989 43.8773 30.0038C41.9886 29.1086 39.8217 29.0005 37.8533 29.703C35.8848 30.4056 34.2761 31.8613 33.381 33.75H33.3855ZM66.0825 55.278C65.2254 53.7427 64.022 52.4284 62.568 51.4395C71.55 50.013 76.5 43.9155 76.5 38.25V36C76.5 35.4033 76.2629 34.831 75.841 34.409C75.419 33.9871 74.8467 33.75 74.25 33.75H57.0375C56.7196 32.181 56.1786 30.6656 55.431 29.25H74.25C76.0402 29.25 77.7571 29.9612 79.023 31.227C80.2888 32.4929 81 34.2098 81 36V38.25C81 45.3915 75.573 52.704 66.0825 55.278ZM60.6915 55.6695C59.4633 54.5913 57.8843 53.9978 56.25 54H24.75C23.8629 53.9976 22.9841 54.1706 22.1641 54.509C21.3441 54.8474 20.599 55.3445 19.9717 55.9717C19.3445 56.599 18.8474 57.3441 18.509 58.1641C18.1706 58.9841 17.9976 59.8629 18 60.75V63C18 71.8695 26.37 81 40.5 81C54.63 81 63 71.8695 63 63V60.75C63 58.725 62.109 56.907 60.6915 55.665V55.6695ZM22.5 60.75C22.5 60.1533 22.7371 59.581 23.159 59.159C23.581 58.7371 24.1533 58.5 24.75 58.5H56.25C56.8467 58.5 57.419 58.7371 57.841 59.159C58.263 59.581 58.5 60.1533 58.5 60.75V63C58.5 69.471 52.056 76.5 40.5 76.5C28.944 76.5 22.5 69.471 22.5 63V60.75ZM58.5 0C61.7821 0 64.9297 1.30379 67.2504 3.62455C69.5712 5.94532 70.875 9.09295 70.875 12.375C70.875 15.6571 69.5712 18.8047 67.2504 21.1254C64.9297 23.4462 61.7821 24.75 58.5 24.75C55.2179 24.75 52.0703 23.4462 49.7496 21.1254C47.4288 18.8047 46.125 15.6571 46.125 12.375C46.125 9.09295 47.4288 5.94532 49.7496 3.62455C52.0703 1.30379 55.2179 0 58.5 0ZM58.5 4.5C56.4114 4.5 54.4084 5.32969 52.9315 6.80653C51.4547 8.28338 50.625 10.2864 50.625 12.375C50.625 14.4636 51.4547 16.4666 52.9315 17.9435C54.4084 19.4203 56.4114 20.25 58.5 20.25C60.5886 20.25 62.5916 19.4203 64.0685 17.9435C65.5453 16.4666 66.375 14.4636 66.375 12.375C66.375 10.2864 65.5453 8.28338 64.0685 6.80653C62.5916 5.32969 60.5886 4.5 58.5 4.5Z"
        fill={color}
      />
    </svg>
  );
};
