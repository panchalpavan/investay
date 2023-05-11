import { ArrowLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Resale_Reservation_Form from "../../components/SsrWrapper/Resale_Reservation_Form";
import { useRouter } from "next/router";
import React from "react";
import HeaderTitle from "../../components/Layout/HeaderTitle";
const ResaleReservationForm = () => {
  const router = useRouter();
  return (
    <>
      <HeaderTitle pageName={"Resale Reservation Form"} />
      <Resale_Reservation_Form />
    </>
  );
};

export default ResaleReservationForm;
ResaleReservationForm.public1 = (page: React.ReactElement) => {
  return { page };
};
