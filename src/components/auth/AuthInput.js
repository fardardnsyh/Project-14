import { validateInputs } from "../../utils/validation";

const AuthInput = (props) => {
  const {
    label,
    placeholder,
    type,
    callback,
    setError,
    validator,
    validationMsg,
    value,
  } = props;

  let onChangeHandler = (e) => {
    let userInput = e.target.value;
    callback(userInput);
  };

  let onBlurHandler = () =>
    validateInputs(value, type, validator, validationMsg, setError);
  return (
    <div className="mt-6">
      <h1>{label}</h1>
      <input
        type={type}
        placeholder={placeholder}
        className="border p-3 w-full rounded-md mt-1 focus:ring focus:ring-indigo-600 focus:text-indigo-600 focus:font-semibold outline-none"
        onChange={(e) => onChangeHandler(e)}
        onBlur={onBlurHandler}
        value={value}
      />
    </div>
  );
};

export default AuthInput;
