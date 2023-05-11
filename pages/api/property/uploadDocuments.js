import uploadDocuments from "../../../controllers/property/uploadDocuments";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";
import multer from "multer";
import nextConnect from "next-connect";

const upload = multer({
  storage: multer.diskStorage({
    // destination: "./public/assets/uploads",
    destination: function (req, file, cb) {
      cb(null, './public/assets/uploads/documents')
    },
    filename: function (req, file, cb) {
      // null as first argument means no error
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

const handler = nextConnect({
  onNoMatch(req, res) {
    res.status(405).json({
      error: "Method not allowed!",
    });
  },
});

const uploadMiddleware = upload.single("registrationForm");

handler.use(uploadMiddleware);

handler.patch((req, res) => {
  // console.log(req.file);
  return res.status(200).json({ success: true });
});

export default fetchUser(grantAccess("updateAny", "property", handler));

export const config = {
  api: {
    bodyParser: false,
  },
};
