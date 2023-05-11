import axios from "axios";
export const myProperties = async () => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_DATA_API_URL;

  const { data } = await axios.get(`${url}/api/property/myProperties`);
  return data;
};
