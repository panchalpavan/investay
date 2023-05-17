import dynamic from "next/dynamic";

const Rental_Reservation_Form = dynamic(
  () => import("../papers/Rental_Reservation_Form"),
  { ssr: false }
);
export default Rental_Reservation_Form;
