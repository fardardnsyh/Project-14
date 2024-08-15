import React from "react";
import { Navigate } from "react-router-dom";
import { getFromLocalStorage } from "../utils/localstorage";

const AuthRoutes = ({ children }) => {
  const user = getFromLocalStorage("@user");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthRoutes;
