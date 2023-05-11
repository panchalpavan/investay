import axios from "axios"

export const sendOtp = async ({email,mobile}:any)=> {
    const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_DATA_API_URL;

      console.log(url)
      console.log(process.env.NEXT_PUBLIC_NODE_ENV )
      console.log(process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL)
      console.log(process.env.NEXT_PUBLIC_DATA_API_URL)
    const {data} = await axios.post(`${url}/api/downloads/sendOtp`,{email,mobile});
    return data;
    
}