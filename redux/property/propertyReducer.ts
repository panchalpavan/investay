import { createSlice } from "@reduxjs/toolkit";

let initialState: any = {
  properties: null,
  locations: null,
  property: null,
};

export const getPropertiesReducer = createSlice({
  name: "getProperties",
  initialState,
  reducers: {
    set_getProperties: (state, action) => {
      // console.log("get properties action----", action.payload);
      state = { ...state, properties: action.payload };
      return state;
    },
    setLocations: (state, action) => {
      // console.log("get properties action----", action.payload);
      state = { ...state, locations: action.payload };
      return state;
    },
    setProperty: (state, action) => {
      // console.log("set property----", action.payload);
      state = { ...state, property: action.payload };
      return state;
    },
  },
});

export const { set_getProperties, setLocations, setProperty } =
  getPropertiesReducer.actions;
export default getPropertiesReducer.reducer;
