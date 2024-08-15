import AuthButton from "../components/auth/AuthButton";
import AuthInput from "../components/auth/AuthInput";
import AuthWrapper from "../components/auth/AuthWrapper";
import VERIFYMAIL_IMG from "../assets/verify_mail.png";
const MailVerification = () => {
  const onClickHandler = () => {};
  return (
    <>
      <AuthWrapper
        img={VERIFYMAIL_IMG}
        heading="Welcome to Opportunex"
        sub_heading="check your mail with the verification code."
        alt="welcome_img"
      >
        <AuthInput
          label="Verification Code (required)"
          placeholder="Enter verification code"
          type="number"
        />

        <AuthButton btn_name="Verify" />
      </AuthWrapper>
    </>
  );
};

export default MailVerification;
