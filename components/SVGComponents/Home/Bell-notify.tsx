import React from "react";

type TProps = {
  height: string;
  width: string;
  color: string;
};

export const BellNotify = ({ color, width, height }: TProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.1141 68.9993C33.5512 68.9611 34.9303 68.338 36.0075 67.2401C37.0846 66.1422 37.7904 64.6402 38 63H26C26.2155 64.6848 26.9543 66.222 28.079 67.3256C29.2037 68.4291 30.6376 69.0239 32.1141 68.9993V68.9993Z"
        fill={color}
      />
      <path
        d="M62.2812 56.282C60.2426 54.425 58.4578 52.2962 56.9748 49.9529C55.3559 46.7182 54.3856 43.1857 54.1208 39.5627V28.8916C54.1122 27.5955 53.9991 26.3022 53.7826 25.025C52.1186 24.6852 50.5194 24.0724 49.047 23.2105C49.6082 25.0571 49.8933 26.9797 49.8926 28.9133V39.5843C50.1517 44.0039 51.3416 48.3143 53.3809 52.221C54.8404 54.5842 56.5723 56.7598 58.5393 58.7014H4.39732C6.36429 56.7598 8.09613 54.5842 9.55571 52.221C11.595 48.3143 12.7848 44.0039 13.044 39.5843V28.8916C13.0328 26.3917 13.5044 23.9141 14.4317 21.6006C15.3591 19.2872 16.7239 17.1833 18.448 15.4096C20.1722 13.6358 22.2219 12.227 24.4797 11.2638C26.7375 10.3005 29.159 9.80181 31.6057 9.79616C35.1865 9.79909 38.6869 10.8811 41.6688 12.9067C41.3401 11.6733 41.1555 10.4044 41.1191 9.12652V7.76564C38.9117 6.65612 36.5403 5.92628 34.1003 5.60552V2.88376C34.1003 2.11894 33.803 1.38545 33.2737 0.844635C32.7444 0.303825 32.0265 0 31.278 0C30.5295 0 29.8116 0.303825 29.2823 0.844635C28.7531 1.38545 28.4557 2.11894 28.4557 2.88376V5.71353C22.9923 6.50101 17.9922 9.2815 14.3784 13.5417C10.7647 17.8018 8.78137 23.254 8.79463 28.8916V39.5627C8.52985 43.1857 7.55953 46.7182 5.9406 49.9529C4.48374 52.2909 2.72759 54.4194 0.718792 56.282C0.493285 56.4844 0.312551 56.7336 0.188614 57.013C0.0646775 57.2923 0.000380106 57.5954 0 57.9021V60.8399C0 61.4128 0.222734 61.9622 0.619204 62.3673C1.01567 62.7724 1.5534 63 2.11409 63H60.8859C61.4466 63 61.9843 62.7724 62.3808 62.3673C62.7773 61.9622 63 61.4128 63 60.8399V57.9021C62.9996 57.5954 62.9353 57.2923 62.8114 57.013C62.6875 56.7336 62.5067 56.4844 62.2812 56.282V56.282Z"
        fill={color}
      />
      <path
        d="M64 11.5C64 16.7467 59.7467 21 54.5 21C49.2533 21 45 16.7467 45 11.5C45 6.25329 49.2533 2 54.5 2C59.7467 2 64 6.25329 64 11.5Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};
