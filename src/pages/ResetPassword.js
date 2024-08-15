import Authwrapper from "../components/auth/AuthWrapper";
import RESET_IMG from "../assets/reset.png";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

const ResetPassword = () => {
  return (
    <Authwrapper
      img={RESET_IMG}
      heading="Update Your Password"
      sub_heading="Reset password to get continue"
      alt="repair_img"

    >
      <AuthInput
        label="New Password (required)"
        placeholder="Enter New Password"
        type="password"
      />
      <AuthInput
        label="Re-Enter Password (required)"
        placeholder="Confirm New Password"
        type="password"
      />
      <AuthButton btn_name="Reset Password" />
    </Authwrapper>
  );
};

export default ResetPassword;
