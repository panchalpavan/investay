// import OnlineRegistrationForm from "../../components/papers/Online_Registration_Form";
import Online_Registration_Form from "../../components/SsrWrapper/Online_Registration_Form";
import React, { useRef, useState, Component } from "react";
// import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf'
import HeaderTitle from "../../components/Layout/HeaderTitle";
const OnlineRegistrationForm = () => {
  // const formRef = useRef(null);
  // const router = useRouter();
  // const [agree, setAgree] = useState(false);
  // const input = useRef(null);
  // const handlePdf = () => {
  //   // const input = document.getElementById('page');
  //   // html2canvas(input.current).then((canvas) => {
  //   //   const imgData = canvas.toDataURL("image/png");
  //   //   const pdf = new jsPDF("p", "mm", [297, 1100]);
  //   //   const imgProps = pdf.getImageProperties(imgData);
  //   //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //   //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight + 100);
  //   //   pdf.save("download.pdf");
  //   // });

  //   var element = input.current;
  //   html2pdf(element);

  // };

  return (
    <>
      <HeaderTitle pageName={"Online Registration Form"} />
      <Online_Registration_Form />
    </>
  );
};

export default OnlineRegistrationForm;
OnlineRegistrationForm.public1 = (page: React.ReactElement) => {
  return { page };
};
