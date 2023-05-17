import dynamic from "next/dynamic";

const Online_Registration_Form = dynamic(
  () => import("../papers/Property_Inspection_Report"),
  { ssr: false }
);
export default Online_Registration_Form;
