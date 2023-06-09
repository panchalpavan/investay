// Controller for adding a property. Requires login
import multer from "multer";
const Location = require("../../models/Location");
const Property = require("../../models/Property");
const User = require("../../models/User");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const addProperty = (req, res) => {
  // there will be no uploads for production, you can use upload.none() here
  upload.any()(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send("File upload error: " + err.message);
    } else if (err) {
      return res.status(500).send("Internal server error");
    } else {
      if (req.method === "POST") {
        let success = false;
        try {
          const userId = req.user.id;
          let userDetails = await User.findOne({ id: userId });
          const ownerName = userDetails && `${userDetails.firstName} ${userDetails.lastName}`
          const ownerContact = userDetails && userDetails.mobile
          const { propertyLocation, amenities, bookingPricing, property, society, user_images } = req.body;
          
          const amenity = JSON.parse(amenities);
          const booking = JSON.parse(bookingPricing);

          const prpty = JSON.parse(property)
          const scyt = JSON.parse(society)
          const user_image = JSON.parse(user_images)

          await Location.create({ name: propertyLocation });

          let onlineRegistrationForm = ""
          let resaleForm = ""
          let rentalForm = ""
          let rentalAgreement = ""
          let propertyInspectionReport = ""
          let mou = ""

          // uploading documents
          if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
            onlineRegistrationForm = req.body.onlineRegistrationForm
            resaleForm = req.body.resaleForm
            rentalForm = req.body.rentalForm
            rentalAgreement = req.body.rentalAgreement
            propertyInspectionReport = req.body.propertyInspectionReport
            mou = req.body.mou

          } else if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
              const registrationForms = req.files.filter(file => file.fieldname === 'onlineRegistrationForm');
              if (registrationForms.length > 0) {
                onlineRegistrationForm = registrationForms[0].filename;
              }
    
              const resaleForms = req.files.filter(file => file.fieldname === 'resaleForm');
              if (resaleForms.length > 0) {
                resaleForm = resaleForms[0].filename;
              }
    
              const rentalForms = req.files.filter(file => file.fieldname === 'rentalForm');
              if (rentalForms.length > 0) {
                rentalForm = rentalForms[0].filename;
              }
    
              const rentalAgreements = req.files.filter(file => file.fieldname === 'rentalAgreement');
              if (rentalAgreements.length > 0) {
                rentalAgreement = rentalAgreements[0].filename;
              }
    
              const propertyInspectionReports = req.files.filter(file => file.fieldname === 'propertyInspectionReport');
              if (propertyInspectionReports.length > 0) {
                propertyInspectionReport = propertyInspectionReports[0].filename;
              }
    
              const mous = req.files.filter(file => file.fieldname === 'mou');
              if (mous.length > 0) {
                mou = mous[0].filename;
              }
          }

          await Property.create({
            ...req.body,
            postedBy: userId,
            owner: userId,
            ownerName: ownerName,
            ownerContact: ownerContact,
            amenities: amenity,
            bookingPricing: booking,
            gallery: {
              property: {...prpty},
              society: {...scyt},
              user_images: user_image
            },
            documents: {
              onlineRegistrationForm: onlineRegistrationForm,
              resaleForm: resaleForm,
              rentalForm: rentalForm,
              rentalAgreement: rentalAgreement,
              propertyInspectionReport: propertyInspectionReport,
              mou: mou
            }
          });

          const properties = await Property.find();
          const locations = await Location.find();

          success = true;
          return res.status(200).json({ success, properties, locations });
        } catch (error) {
          console.log(error.message);
          return res.status(500).json({ success, error: error.message });
        }
      } else {
        return res.status(405).json({ error: "Method not allowed!" });
      }
    }
  });
};

module.exports = addProperty;
