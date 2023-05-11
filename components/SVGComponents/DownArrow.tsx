import React from "react";
type TProps = {
    className: string;
};

export const DownArrow = ({ className }: TProps) => {
    return (
        <>
            <svg width="14" height="9" className={className} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9L0.0717985 1.30506e-06L13.9282 9.36994e-08L7 9Z" fill="#3BA32C" />
            </svg>
        </>
    );
};
