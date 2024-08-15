import { useDispatch, useSelector } from "react-redux";
import { userApplicationActions } from "../../store/userApplicationSlice";
import { deleteApplication } from "../../store/userApplicationThunks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { useState } from "react";
import Spinner from "../Spinner";

const TrackerButtons = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.authSlice);
  const [isLoading, setisLoading] = useState(false);

  const onDeleteApplicationHandler = (e) => {
    setisLoading(true);
    e.stopPropagation();
    dispatch(
      deleteApplication(
        authState.user._id,
        data._id,
        data,
        toast,
        navigate,
        authState.user.token,
        setisLoading
      )
    );
  };

  const onEditApplicationHandler = (e) => {
    e.stopPropagation();
    dispatch(userApplicationActions.removeApplication(data));
    dispatch(userApplicationActions.setTrackerLeftContainerState("edit"));
    dispatch(userApplicationActions.setIsApplicationContainerVisible(false));
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Trash
          size="22"
          title="delete"
          onClick={(e) => onDeleteApplicationHandler(e)}
        />
      )}
      <PencilSquare
        size="22"
        title="edit"
        onClick={(e) => {
          onEditApplicationHandler(e);
        }}
      />
    </>
  );
};

export default TrackerButtons;
