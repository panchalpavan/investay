import multer from "multer";

const uploadDocuments = async (req, res) => {
  if (req.method === "PATCH") {
    const userId = req.user.id;
    // Set storage engine
    // console.log(req.body);
    // const {registrationForm, resaleForm, rentalForm, propertyInspectionForm, rentalAgreement, mou} = req.body;

    // let encode_file = null;
    // let fileName = "";
    // if (req.file) {
    //   fileName = req.file.originalname;
    //   var filepath = path.join(__dirname, req.file.path);
    //   console.log(filepath);
    //   var stream = fs.readFileSync(filepath);
    //   encode_file = stream.toString("base64");
    // }

    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = uploadDocuments;
