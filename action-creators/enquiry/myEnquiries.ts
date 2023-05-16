import axios from "axios";

export const myEnquiries = async ()=> {
  const url =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
    : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

  const { data } = await axios.get(`${url}/api/enquiry/myEnquiries`);
  return data;
}