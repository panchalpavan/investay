import dynamic from "next/dynamic";

const Service_Agreement_Form = dynamic(
  () => import("../papers/Service_Agreement_Form"),
  { ssr: false }
);
export default Service_Agreement_Form;
