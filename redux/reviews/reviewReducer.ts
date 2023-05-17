import { createSlice } from "@reduxjs/toolkit";

let initialState: any = {
  reviews: null,
};

export const getReviewsReducer = createSlice({
  name: "getReviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      // console.log("get reviews action----", action.payload);
      state = { ...state, reviews: action.payload };
      return state;
    },
  },
});

export const { setReviews } = getReviewsReducer.actions;
export default getReviewsReducer.reducer;
