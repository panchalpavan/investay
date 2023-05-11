import { useRouter } from "next/router";
import React from "react";
import HeaderTitle from "../../components/Layout/HeaderTitle";
import Service_Agreement_Form from "../../components/SsrWrapper/Service_Agreement_Form";
const ServiceAgreementForm = () => {
  const router = useRouter();
  return (
    <>
      <HeaderTitle pageName={"Service Agreement Form"} />
      <Service_Agreement_Form />
    </>
  );
};

export default ServiceAgreementForm;
ServiceAgreementForm.public1 = (page: React.ReactElement) => {
  return { page };
};
