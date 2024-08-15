import { BoxArrowRight, PencilSquare } from "react-bootstrap-icons";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { formatToShortDate } from "../utils/dateFormatter";
import { setToLocalStorage } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/authSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.authSlice);
  let memberSince = formatToShortDate(user?.createdAt || "03-22-2002");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="md:py-24  w-full">
          <div className="flex items-center justify-between border-b-2 px-4 md:pb-3">
            <h1 className="text-xl md:text-2xl font-bold">Profile</h1>
            <button
              className="flex text-red-600 items-center gap-4  p-3 px-6"
              onClick={onLogoutHandler}
            >
              <BoxArrowRight size="24px" />
              <h4 className="text-lg font-bold">Logout</h4>
            </button>
          </div>
          <div className="p-6">
            <h3>Name</h3>
            <h1 className="text-xl md:text-3xl mt-4 font-bold capitalize">
              {user?.name || ""}
            </h1>
            <h3 className="text-lg mt-2">{user?.email || ""}</h3>
            <h4 className="text-sm mt-4">
              Opportunex member since : {memberSince}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
