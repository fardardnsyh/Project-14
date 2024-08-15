import { useDispatch, useSelector } from "react-redux";
import { userApplicationActions } from "../../store/userApplicationSlice";
import { ArrowLeft } from "react-bootstrap-icons";

const BackNav = () => {
  const dispatch = useDispatch();
  const userApplicationState = useSelector(
    (state) => state.userApplicationSlice
  );
  const onBackClickHandler = () => {
    if (userApplicationState.trackerLeftContainerState == "edit") {
      dispatch(
        userApplicationActions.setPrevEditState(
          userApplicationState.selectedApplication
        )
      );
    }
    dispatch(userApplicationActions.setTrackerLeftContainerState("default"));
    dispatch(userApplicationActions.setIsApplicationContainerVisible(true));
  };

  return (
    <div
      className="md:hidden flex items-center justify-between pt-3"
      onClick={onBackClickHandler}
    >
      <div className="border p-2 rounded-full">
        <ArrowLeft size="22" />
      </div>{" "}
      <p>{userApplicationState.trackerLeftContainerState}</p>{" "}
    </div>
  );
};

export default BackNav;
