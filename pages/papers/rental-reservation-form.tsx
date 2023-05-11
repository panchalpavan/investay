import { ArrowLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import HeaderTitle from "../../components/Layout/HeaderTitle";
import Rental_Reservation_Form from "../../components/SsrWrapper/Rental_Reservation_Form";
const RentalReservationForm = () => {
  const router = useRouter();
  return (
    <>
      <HeaderTitle pageName={"Rental Reservation Form"} />
      <Rental_Reservation_Form />
    </>
  );
};

export default RentalReservationForm;
RentalReservationForm.public1 = (page: React.ReactElement) => {
  return { page };
};
