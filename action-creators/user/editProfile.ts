import axios from "axios";
export const editProfile = async ({
  prefix,
  firstName,
  middleName,
  lastName,
  age,
  dob,
  email,
  alternateEmail,
  countryCode,
  mobile,
  alternateMobile,
  companyName,
  designation,
  gender,
  maritalStatus,
  nationality,
  address,
  city,
  state,
  pincode,
  country,
  nameInPan,
  nameInAadhar,
  pan,
  aadhar,
  nriIdName,
  nriIdDetails,
  nameinBank,
  bankName,
  branchName,
  accountNumber,
  ifsc,
  accountType,
}: any) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

  const { data } = await axios.put(`${url}/api/auth/editProfile`, {
    prefix,
    firstName,
    middleName,
    lastName,
    age,
    dob,
    email,
    alternateEmail,
    countryCode,
    mobile,
    alternateMobile,
    companyName,
    designation,
    gender,
    maritalStatus,
    nationality,
    address,
    city,
    state,
    pincode,
    country,
    nameInPan,
    nameInAadhar,
    pan,
    aadhar,
    nriIdName,
    nriIdDetails,
    nameinBank,
    bankName,
    branchName,
    accountNumber,
    ifsc,
    accountType,
  });
  return data;
};
