import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../components/Home";
import Tracker from "../pages/Tracker";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import ResetPassword from "../pages/ResetPassword";
import Companies from "../pages/Companies";
import CompaniesLanding from "../components/company/CompanyLanding";
import MailVerification from "../pages/MailVerification";
import AuthRoutes from "./AuthRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/companies" element={<Companies />} />
      <Route
        path="/tracker"
        element={
          <AuthRoutes>
            <Tracker />
          </AuthRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthRoutes>
            <Profile />
          </AuthRoutes>
        }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-mail" element={<MailVerification />} />
    </Routes>
  );
};

export default AppRoutes;
