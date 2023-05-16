import axios from "axios";
export const getProperties = async ({id}:any) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

  const { data } = await axios.get(`${url}/api/property?property=${id}`);
  return data;
};
