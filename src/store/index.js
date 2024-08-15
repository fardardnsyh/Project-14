import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import companySlice from "./companiesSlice";
import userApplicationSlice from "./userApplicationSlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice,
    companySlice: companySlice,
    userApplicationSlice,
  },
});

export default store;
