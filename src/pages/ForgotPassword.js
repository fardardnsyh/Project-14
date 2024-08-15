import REPAIR_IMG from "../assets/repair.png";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

const ForgotPassword = () => {
  return (
    <AuthWrapper
      img={REPAIR_IMG}
      heading="Forgot Password? No Worry"
      sub_heading="We can help you reset your password securely."
      img_w="w-9/12"
      alt="repair_img"
    >
      <AuthInput
        label="Email (required)"
        placeholder="Enter Email"
        type="email"
      />

      <AuthButton btn_name="Get Reset Link" />

      <div className="mt-6">
        <h1 className="mb-4 text-lg underline"> Follow these steps:</h1>
        <li>Enter your registered email with opportunex.</li>
        <li>Click on send reset link button.</li>
        <li>Check your email for the password reset email. </li>
        <li>Click the reset password link.</li>
        <li>Choose a strong new password.</li>
        <li>Re-enter the new password to confirm.</li>
        <li>Click "Reset Password" button.</li>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
