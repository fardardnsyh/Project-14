const AuthButton = ({ btn_name, callback, isLoading }) => {
  let className = `border w-full p-3 text-white font-bold rounded-md focus:ring focus:ring-indigo-300 outline-none ${
    isLoading ? "cursor-not-allowed bg-indigo-400" : "bg-indigo-600"
  }`;
  return (
    <div className="mt-6">
      <button
        className={className}
        onClick={callback && callback}
        disabled={isLoading}
      >
        {isLoading ? "Please wait..." : btn_name}
      </button>
    </div>
  );
};

export default AuthButton;
