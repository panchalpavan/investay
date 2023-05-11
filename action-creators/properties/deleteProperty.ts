import axios from "axios";
export const deleteProperty = async ({propertyId}: any) => {
  console.log(propertyId)
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.DATA_API_URL;
        
  console.log(url)
  // const { data } = await axios.delete(
  //   `${url}/api/property/deleteProperty/${propertyId?.propertyId}`
  // );
  const { data } = await axios.delete(`${url}/api/property/updateProperty`,  { data: { propertyId } });
  
  return data;
};
