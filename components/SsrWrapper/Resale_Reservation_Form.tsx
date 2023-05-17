import dynamic from "next/dynamic";

const Resale_Reservation_Form = dynamic(
  () => import("../papers/Resale_Reservation_Form"),
  { ssr: false }
);
export default Resale_Reservation_Form;
