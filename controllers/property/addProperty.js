// Controller for adding a property. Requires login
import multer from "multer";
import S3 from 'aws-sdk/clients/s3'
const Location = require("../../models/Location");
const Property = require("../../models/Property");
const User = require("../../models/User");

const s3 = new S3({
  apiVersion: '2006-03-01',
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESSKEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRETKEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  signatureVersion: 'v4'
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
      cb(null, "");
    } else {
      cb(null, "public/uploads/");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

console.log("HERE")
const addProperty = async (req, res) => {
  upload.any()(req, res, async (err) => {
  console.log('REQ METHOD', req.method, req.body, req.files) 
  if (err instanceof multer.MulterError) {
      return res.status(400).send("File upload error: " + err.message);
    } else if (err) {
      console.log("ERR", err)
      return res.status(500).send(err);
    } else {
      if (req.method === "POST") {
        let success = false;
        try {
          const userId = req.user.id;
          let userDetails = await User.findOne({ _id: userId });
          const ownerName = userDetails && `${userDetails.firstName} ${userDetails.lastName}`
          const ownerContact = userDetails && userDetails.mobile
          const { propertyLocation, amenities, bookingPricing } = req.body;
          
          const amenity = JSON.parse(amenities);
          const booking = JSON.parse(bookingPricing);

          await Location.create({ name: propertyLocation });

          let onlineRegistrationForm = ""
          let resaleForm = ""
          let rentalForm = ""
          let rentalAgreement = ""
          let propertyInspectionReport = ""
          let mou = ""



          const registrationForms = req.files.filter(file => file.fieldname === 'onlineRegistrationForm');
          if (registrationForms.length > 0) {
            if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
              const s3Params = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME,
                Key: registrationForms[0].filename,
                Expires: 60,
                ContentType: registrationForms[0].type && registrationForms[0].name.endsWith('.pdf') ? 'application/pdf' : 'image/*'
              }

              const uploadURL = await s3.getSignedUrl(('putObject', s3Params))
              console.log('UPLOAD URL', uploadURL)
              resaleForm = uploadURL;
            } else {
              resaleForm = registrationForms[0].filename;

            }
          }

          const resaleForms = req.files.filter(file => file.fieldname === 'resaleForm');
          if (resaleForms.length > 0) {
            if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
              const s3Params = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME,
                Key: resaleForms[0].filename,
                Expires: 60,
                ContentType: resaleForms[0].type && resaleForms[0].name.endsWith('.pdf') ? 'application/pdf' : 'image/*'
              }

              const uploadURL = await s3.getSignedUrl(('putObject', s3Params))
              console.log('UPLOAD URL', uploadURL)
              resaleForm = uploadURL;
            } else {
              resaleForm = resaleForms[0].filename;

            }
          }

          const rentalForms = req.files.filter(file => file.fieldname === 'rentalForm');
          if (rentalForms.length > 0) {
            if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
              const s3Params = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME,
                Key: rentalForms[0].filename,
                Expires: 60,
                ContentType: rentalForms[0].type && rentalForms[0].name.endsWith('.pdf') ? 'application/pdf' : 'image/*'
              }

              const uploadURL = await s3.getSignedUrl(('putObject', s3Params))
              console.log('UPLOAD URL', uploadURL)
              rentalForm = uploadURL;
            } else {
              rentalForm = rentalForms[0].filename;

            }
          }

          const rentalAgreements = req.files.filter(file => file.fieldname === 'rentalAgreement');
          if (rentalAgreements.length > 0) {
            if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
              const s3Params = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME,
                Key: rentalAgreements[0].filename,
                Expires: 60,
                ContentType: rentalAgreements[0].type && rentalAgreements[0].name.endsWith('.pdf') ? 'application/pdf' : 'image/*'
              }

              const uploadURL = await s3.getSignedUrl(('putObject', s3Params))
              console.log('UPLOAD URL', uploadURL)
              rentalAgreement = uploadURL;
            } else {
              rentalAgreement = rentalAgreements[0].filename;

            }
          }

          const propertyInspectionReports = req.files.filter(file => file.fieldname === 'propertyInspectionReport');
          if (propertyInspectionReports.length > 0) {
            if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
              const s3Params = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME,
                Key: propertyInspectionReports[0].filename,
                Expires: 60,
                ContentType: propertyInspectionReports[0].type && propertyInspectionReports[0].name.endsWith('.pdf') ? 'application/pdf' : 'image/*'
              }

              const uploadURL = await s3.getSignedUrl(('putObject', s3Params))
              console.log('UPLOAD URL', uploadURL)
              propertyInspectionReport = uploadURL;
            } else {
              propertyInspectionReport = propertyInspectionReports[0].filename;

            }
          }


          const mous = req.files.filter(file => file.fieldname === 'mou');
          if (mous.length > 0) {
            if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
              const s3Params = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME,
                Key: mous[0].filename,
                Expires: 60,
                ContentType: mous[0].type && mous[0].name.endsWith('.pdf') ? 'application/pdf' : 'image/*'
              }

              const uploadURL = await s3.getSignedUrl(('putObject', s3Params))
              console.log('UPLOAD URL', uploadURL)
              mou = uploadURL;
            } else {
              mou = mous[0].filename;
            }
          }

          const galleries = req.files.filter(file => file.fieldname === 'gallery');

          if (galleries.length > 0) {
            galleries.map(async (val) => {
              if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
                const s3Params = {
                  Bucket: process.env.NEXT_PUBLIC_AWS_BUCKETNAME,
                  Key: val.filename,
                  Expires: 60,
                  ContentType: 'image/*'
                }
  
                const uploadURL = await s3.getSignedUrl(('putObject', s3Params))
                console.log('UPLOAD URL', uploadURL)
                return newVal = {
                  ...val,
                  filename: uploadURL
                }
              }
            })
          }

          await Property.create({
            ...req.body,
            postedBy: userId,
            owner: userId,
            ownerName: ownerName,
            ownerContact: ownerContact,
            amenities: amenity,
            bookingPricing: booking,
            gallery: galleries,
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
