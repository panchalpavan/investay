import dynamic from "next/dynamic";

const Online_Registration_Form = dynamic(
  () => import("../papers/Online_Registration_Form"),
  { ssr: false }
);
export default Online_Registration_Form;
