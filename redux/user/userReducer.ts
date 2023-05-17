import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";

let initialState: any = {
  user: null,
  userRole:null,
  token: null,
};
if (typeof window !== "undefined") {
  if (getCookie("authorization")) {
    if (localStorage.getItem("investay_user")) {
     
      initialState = {
        ...initialState,
        user: JSON.parse(localStorage.getItem("investay_user")),
        userRole:JSON.parse(localStorage.getItem("investay_user")).role,
        token: getCookie("authorization"),
      };
    } else {
      initialState = {
        user: null,
        token: null,
        userRole: null,
      };
    }
  } else {
    if (localStorage.getItem("investay_user")) {
      localStorage.removeItem("investay_user");
    }
    initialState = {
      user: null,
      token: null,
      userRole: null,

    };
  }
}

export const getUserReducer = createSlice({
  name: "getUserData",
  initialState,
  reducers: {
    set_user: (state, action) => {
      // console.log("token: ", getCookie("authorization"));
      // console.log("get user action----", action.payload);
      state = {
        ...state,
        user: action.payload.user,
        token: getCookie("authorization"),
        userRole:action.payload.user?.role

      };
      
      return state;
    },
  },
});

export const { set_user } = getUserReducer.actions;
export default getUserReducer.reducer;
