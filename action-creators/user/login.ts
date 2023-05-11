import axios from "axios";
export const login = async ({identifier}:any) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.DATA_API_URL;

  const { data } = await axios.post(`${url}/api/auth/login`, {identifier});
  return data;
};
