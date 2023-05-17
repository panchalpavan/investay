import { createSlice } from "@reduxjs/toolkit";

let initialState: any = {
  sideBarValue: "My Profile",
};

export const adminSideBar = createSlice({
  name: "getProperties",
  initialState,
  reducers: {
    set_admin_sidebar: (state, action) => {
      state = { ...state, sideBarValue: action.payload };
      return state;
    },
  },
});

export const { set_admin_sidebar } = adminSideBar.actions;
export default adminSideBar.reducer;
