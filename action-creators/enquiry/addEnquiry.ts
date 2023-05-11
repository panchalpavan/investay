import axios from "axios";

export const addEnquiry = async ({name,email,countryCode,mobile,role,serviceNeeded,source,query,otp, propertyId}:any)=> {
  const url =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
    : process.env.DATA_API_URL;

  const { data } = await axios.post(`${url}/api/enquiry/addEnquiry?id=${propertyId}`, {otp,name,email,countryCode,mobile,role,serviceNeeded,source,query});
  return data;
}