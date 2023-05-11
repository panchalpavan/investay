import axios from "axios";
export const signup = async ({
  prefix,
  firstName,
  lastName,
  email,
  countryCode,
  mobile,
  userId,
  password,
  designation,
  dob,
  companyName,
  gender,
  maritalStatus,
  age,
  nationality,
  address,
  city,
  state,
  country,
  pincode,
}: any) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_DATA_API_URL;


  console.log(url)

  const { data } = await axios.post(`${url}/api/auth/admin/register`, {
    prefix,
    firstName,
    lastName,
    email,
    countryCode,
    mobile,
    userId,
    password,
    designation,
    dob,
    companyName,
    gender,
    maritalStatus,
    age,
    nationality,
    address,
    city,
    state,
    country,
    pincode,
  });

  return data;
};
