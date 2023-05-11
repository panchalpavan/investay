import axios from "axios";
export const addProperty = async (formData: any) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.DATA_API_URL;
      const config = {
        headers: { 'content-type': 'multipart/form-data' }
        }
        
  const { data } = await axios.post(
    `${url}/api/property/addProperty?details=${true}`,
    formData,config
  );
  return data;
};
