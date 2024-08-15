import { Link } from "react-router-dom";

const AuthLabel = ({ label_name, to }) => {
  return (
    <div className="mt-6">
      <h1 className="text-sm">
        {label_name}?{" "}
        <Link to={to}>
          <span className="text-indigo-600 underline">click here</span>
        </Link>
      </h1>
    </div>
  );
};

export default AuthLabel;
