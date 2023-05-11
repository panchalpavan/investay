import dynamic from "next/dynamic";
import React from "react";
import HeaderTitle from "../../../components/Layout/HeaderTitle";
const PersonalInfo = dynamic(()=> import("../../../components/profile/PersonalInfo"),{ssr: false})
const personalInfo = () => {
  return (
    <div>
      <HeaderTitle pageName={"Profile"} />
      <PersonalInfo />
    </div>
  );
};
export default personalInfo;
personalInfo.profile = (page: React.ReactElement) => {
  return { page };
};
