import { createSlice } from "@reduxjs/toolkit";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../utils/localstorage";

const initialState = {
  user: getFromLocalStorage("@user") || "",
  loggedin: getFromLocalStorage("loggedin") || false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser(state, action) {
      setToLocalStorage("@user", {
        ...action.payload,
      });
      setToLocalStorage("loggedin", true);
      state.user = action.payload;
      state.loggedin = true;
      return state;
    },
    logout(state, action) {
      removeFromLocalStorage("@user");
      removeFromLocalStorage("loggedin");
      state.user = "";
      state.loggedin = false;
      return state;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
