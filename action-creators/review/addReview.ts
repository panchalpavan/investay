import axios from "axios";

export const addReview = async ({
  name,
  role,
  likes,
  dislikes,
  overall,
  amenitiesAndFacilities,
  constructionQuality,
  greenSpaces,
  connectivity,
  rwa,
  id
}: any) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

  const { data } = await axios.post(`${url}/api/review/addReview?id=${id}`, {
    name,
    role,
    likes,
    dislikes,
    overall,
    amenitiesAndFacilities,
    constructionQuality,
    greenSpaces,
    connectivity,
    rwa,
  });
  return data;
};
