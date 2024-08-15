import SIGNUP_IMG from "../assets/signup.png";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import AuthLabel from "../components/auth/AuthLabel";
import {
  isEmptyInput,
  isValidEmail,
  isValidPassword,
} from "../utils/validation";
import AuthError from "../components/auth/AuthError";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../store/authThunks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setError] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [reqError, setReqError] = useState("");
  const dispatch = useDispatch();

  let signupHandler = async () => {
    if (
      isEmptyInput(name, "name", setError) ||
      isEmptyInput(email, "email", setError) ||
      isEmptyInput(password, "password", setError)
    )
      return;
    else if (errors.name || errors.email || errors.password) return;
    else {
      let user = { name, email, password };
      setIsLoading(true);
      setReqError("");
      dispatch(createAccount(user, setIsLoading, setReqError, toast));
    }
  };

  return (
    <AuthWrapper
      img={SIGNUP_IMG}
      heading="Welcome to Opportunex"
      sub_heading="Sign up continue"
      alt="welcome_img"
    >
      {reqError && (
        <h1 className="text-red-600 font-bold mt-1 bg-red-200 p-2 px-4 w-max rounded-md">
          {reqError}{" "}
        </h1>
      )}
      <AuthInput
        label="Name (required)"
        placeholder="Enter Name"
        type="name"
        callback={setName}
        setError={setError}
        value={name}
        validationMsg="Name can't be empty."
      />
      {errors.name && <AuthError error={errors.name} />}
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

      <AuthButton
        btn_name="Create Account"
        callback={signupHandler}
        isLoading={isLoading}
      />
      <AuthLabel label_name="Already have an account" to="/login" />
      <ToastContainer />
    </AuthWrapper>
  );
};

export default Signup;
