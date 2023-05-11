import React from "react";
type TProps = {
  className: string;
};

export const RightArrow = ({ className }: TProps) => {
  return (
    <>
      <svg
        className={className}
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="0.47168"
          y="0.743805"
          width="16.0814"
          height="16.0814"
          fill="url(#pattern0)"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_10_509" transform="scale(0.0416667)" />
          </pattern>
          <image
            id="image0_10_509"
            width="24"
            height="24"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaJJREFUSEu1ls1LwzAYxpeNVvxCCmu7w84e9ODf48mvv2YiyOphMj8vinf16FEEEU96VBTL6FpoRUVxnatPxhzWJW1au0BJoXmfX/I+b5ISVVUnHMf5zOVyPp7MG9E07QGqI0EQGL7v157RsqQQrGCbELLSE31Fv9Vut9dd1zWzAJFyuTzaarUuIDb3S5Cm6wjg1WazefMfEKHBxWJxOp/PX+F1kiF2DlAFoOM0oC6ANl3X5+HDYYTINb5Vbds+QP8lCusDaAAM30O3GBN8jxUZkiTVTdP8iAOFABw/eBo2PtRkWTYAcnmDQgABP1g6b1jRbqFQWGs0Gk9/BwwABP1ggZiVxwQk8IOXmX7lcQGoqnFU1SUUZuKM5OafkNOhAjDBk6gU7WNmCylmHyDmjJYy3ZxMAM6nJVoZCcW7JuNEqFiWdfsTOwAolUqznU6H5n5MECBepgmNTb7RcFSI5P0O6dtIfFQI5D39YReR91BFCHoSGkY4eWdWRFrADjbEci/4BX0dV2Y1sysTxj5CVOpd+puZX/qKokx5nvcOyFB+W74Bwo/MBLVKDz8AAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </>
  );
};
