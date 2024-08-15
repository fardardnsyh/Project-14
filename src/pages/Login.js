import { useState } from "react";
import WELCOME_IMG from "../assets/welcome.png";
import AuthButton from "../components/auth/AuthButton";
import AuthInput from "../components/auth/AuthInput";
import AuthLabel from "../components/auth/AuthLabel";
import AuthWrapper from "../components/auth/AuthWrapper";
import {
  isEmptyInput,
  isValidEmail,
  isValidPassword,
} from "../utils/validation";
import AuthError from "../components/auth/AuthError";
import { useDispatch, } from "react-redux";

import { useNavigate } from "react-router-dom";
import { login } from "../store/authThunks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reqError, setReqError] = useState("");
  const [errors, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let loginHandler = async () => {
    if (
      isEmptyInput(email, "email", setError) ||
      isEmptyInput(password, "password", setError)
    )
      return;
    else if (errors.email || errors.password) return;
    else {
      let user = { email, password };
      setIsLoading(true);
      setReqError("");
      dispatch(login(user, setIsLoading, setReqError, navigate));
    }
  };
  return (
    <AuthWrapper
      img={WELCOME_IMG}
      heading="Welcome Back"
      sub_heading="Login to continue"
      alt="welcomeback_img"
    >
      {" "}
      {reqError && (
        <h1 className="text-red-600 font-bold mt-1 bg-red-200 p-2 px-4 w-max rounded-md">
          {reqError}{" "}
        </h1>
      )}
      <AuthInput
        label="Email (required)"
        placeholder="Enter Email"
        type="email"
        callback={setEmail}
        setError={setError}
        validator={isValidEmail}
        validationMsg="Please enter a valid email."
        value={email}
      />
      {errors.email && <AuthError error={errors.email} />}
      <AuthInput
        label="Password (required)"
        placeholder="Enter Password"
        type="password"
        callback={setPassword}
        setError={setError}
        validator={isValidPassword}
        validationMsg="Password should be 8 character long."
        value={password}
      />
      {errors.password && <AuthError error={errors.password} />}
      <AuthLabel label_name="Forgot Password" to="/forgot-password" />
      <AuthButton
        btn_name="Login"
        callback={loginHandler}
        isLoading={isLoading}
      />
      <AuthLabel label_name="Don't have an account yet" to="/signup" />
    </AuthWrapper>
  );
};

export default Login;
