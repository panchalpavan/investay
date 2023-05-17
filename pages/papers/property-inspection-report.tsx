import { ArrowLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import HeaderTitle from "../../components/Layout/HeaderTitle";
import Property_Inspection_Report from "../../components/SsrWrapper/Property_Inspection_Report";

const PropertyInspectionReport = () => {
  const router = useRouter();
  return (
    <>
      <HeaderTitle pageName={"Property Inspection Report"} />
      <Property_Inspection_Report />
    </>
  );
};

export default PropertyInspectionReport;
PropertyInspectionReport.public1 = (page: React.ReactElement) => {
  return { page };
};
