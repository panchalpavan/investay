
import React from "react";

type TProps = {
    width: string;
    height: string;
};

export const TickMark = ({ width, height }: TProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 0C5.14736 0 0 5.14736 0 11.5C0 17.8526 5.14736 23 11.5 23C17.8526 23 23 17.8526 23 11.5C23 5.14736 17.8526 0 11.5 0ZM9.72524 15.5748C9.59255 15.7075 9.40457 15.818 9.2387 15.818C9.07284 15.818 8.88486 15.7019 8.74663 15.5692L5.65048 12.4731L6.63462 11.4889L9.24423 14.0986L16.1442 7.1488L17.1118 8.14952L9.72524 15.5748Z" fill="#79F124" />
        </svg>

    );
};
