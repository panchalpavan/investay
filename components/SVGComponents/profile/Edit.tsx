import React from 'react'

type TProps = {
    height: string;
    width: string;
    color: string;
  };
const Edit = ({ width, height, color }: TProps) => {
  return (
    <svg
     width={width}
     height={height}
     viewBox="0 0 15 15" 
     fill="none"
      xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6839 3.79871L11.2037 0.319226C11.1025 0.21802 10.9823 0.137738 10.85 0.0829645C10.7178 0.0281914 10.576 0 10.4329 0C10.2897 0 10.148 0.0281914 10.0157 0.0829645C9.88348 0.137738 9.76331 0.21802 9.6621 0.319226L0.319215 9.66012C0.116931 9.86592 0.00248265 10.1422 0 10.4307V13.9102C0 14.1993 0.114839 14.4764 0.319254 14.6808C0.52367 14.8852 0.800916 15 1.09 15H4.57023C4.85882 14.9975 5.13517 14.8831 5.34101 14.6809L14.6839 5.33996C14.8864 5.13459 15 4.85776 15 4.56933C15 4.28091 14.8864 4.00408 14.6839 3.79871ZM4.67923 14.0192C4.65048 14.0485 4.6113 14.0653 4.57023 14.0659H1.09C1.0487 14.0659 1.0091 14.0495 0.979896 14.0203C0.950693 13.9911 0.934288 13.9515 0.934288 13.9102V10.4307C0.934873 10.3897 0.951663 10.3505 0.981002 10.3218L7.94145 3.3628L11.6397 7.06024L4.67923 14.0192ZM14.0221 4.67831L12.3015 6.39859L8.60324 2.70115L10.3239 0.980873C10.3377 0.965773 10.3546 0.953717 10.3733 0.94547C10.3921 0.937222 10.4124 0.932963 10.4329 0.932963C10.4534 0.932963 10.4737 0.937222 10.4924 0.94547C10.5112 0.953717 10.528 0.965773 10.5419 0.980873L14.0221 4.46036C14.0372 4.47421 14.0493 4.49105 14.0575 4.50981C14.0658 4.52857 14.07 4.54884 14.07 4.56933C14.07 4.58983 14.0658 4.6101 14.0575 4.62886C14.0493 4.64761 14.0372 4.66446 14.0221 4.67831Z" fill={color}/>
    </svg>
    
  )
}

export default Edit