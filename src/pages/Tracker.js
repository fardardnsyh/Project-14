import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SingleApplication from "../components/tracker/SingleApplication";
import TrackerHeader from "../components/tracker/TrackerHeader";
import UserApplications from "../components/tracker/UserApplications";
import { useEffect } from "react";
import { fetchApplications } from "../store/userApplicationThunks";
import { Plus, PlusCircle } from "react-bootstrap-icons";
import { userApplicationActions } from "../store/userApplicationSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tracker = () => {
  const userApplicationState = useSelector(
    (state) => state.userApplicationSlice
  );
  const trackerLeftContainerState =
    userApplicationState.trackerLeftContainerState;
  const defaultState = "default";
  const authState = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userApplicationState.applications.length) {
      dispatch(fetchApplications(authState.user._id, authState.user.token));
    }
    dispatch(userApplicationActions.setTrackerLeftContainerState("default"));
  }, []);

  const onAddApplicationHandler = () => {
    dispatch(userApplicationActions.setTrackerLeftContainerState("new"));
    dispatch(userApplicationActions.setSelectedApplication(null));
    dispatch(userApplicationActions.setIsApplicationContainerVisible(false));
  };

  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <div
            className={`${
              !userApplicationState.isApplicationContainerVisible && "hidden"
            } flex md:flex w-full md:w-3/5 border-r-2 flex-col relative`}
          >
            <TrackerHeader />
            <UserApplications from="tracker" />
            {trackerLeftContainerState == defaultState &&
              !userApplicationState.isLoading && (
                <button
                  className="absolute border-4 border-indigo-300 bg-indigo-200 bottom-10 right-6 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-indigo-400 font-bold"
                  onClick={onAddApplicationHandler}
                >
                  <Plus size="44" />
                </button>
              )}
          </div>

          <div
            className={`${
              userApplicationState.isApplicationContainerVisible && "hidden"
            } w-full md:w-2/5 md:block lg:w-1/3 border-r-2 overflow-y-scroll flex-1`}
          >
            <div className="w-full overflow-scroll md:pt-24">
              <SingleApplication />
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Tracker;
