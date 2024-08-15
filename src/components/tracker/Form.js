import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrackerInput from "./TrackerInput";
import {
  addApplication,
  updateApplication,
} from "../../store/userApplicationThunks";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { isAddApplicationBtnDisabled } from "../../utils/validation";

const Form = () => {
  const [application, setApplication] = useState({
    company_name: "",
    role: "",
    applied_on: "",
    status: "",
    note: "",
    compensation: "",
  });
  const userApplicationState = useSelector(
    (state) => state.userApplicationSlice
  );

  const authState = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const selectedApplication = userApplicationState.selectedApplication;
  const trackerLeftContainerState =
    userApplicationState.trackerLeftContainerState;
  const clearState = () => {
    setApplication({
      company_name: "",
      role: "",
      applied_on: "",
      status: "",
      note: "",
      compensation: "",
    });
  };

  useEffect(() => {
    if (trackerLeftContainerState == "edit") {
      setApplication(selectedApplication);
    } else {
      clearState();
    }
  }, [trackerLeftContainerState]);

  const callback = (name, val) => {
    setApplication((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const onUpdateApplicationHandler = () => {
    setIsLoading(true);
    dispatch(
      updateApplication(
        authState.user._id,
        selectedApplication._id,
        application,
        toast,
        navigate,
        authState.user.token,
        setIsLoading
      )
    );
  };

  const onAddApplicationHandler = () => {
    setIsLoading(true);
    dispatch(
      addApplication(
        authState.user._id,
        application,
        toast,
        navigate,
        authState.user.token,
        setIsLoading
      )
    );
  };
  return (
    <>
      <TrackerInput
        placeholder="company name"
        type="text"
        value={application.company_name}
        callback={(company_name) => callback("company_name", company_name)}
      />
      <TrackerInput
        placeholder="role applied"
        type="text"
        value={application.role}
        callback={(role) => callback("role", role)}
      />

      <TrackerInput
        placeholder="Date"
        type="date"
        value={application.applied_on}
        callback={(applied_on) => callback("applied_on", applied_on)}
      />

      <select
        className="outline-none w-full border rounded-md p-3 mt-6 bg-white focus:ring focus:ring-indigo-600 focus:text-indigo-600 focus:font-semibold"
        onChange={(e) => callback("status", e.target.value)}
        value={application.status || null}
      >
        <option value="Status" disabled selected>
          Status
        </option>
        <option value="applied">applied</option>
        <option value="interviewing">interviewing</option>
        <option value="pending">pending</option>
        <option value="selected">selected</option>
        <option value="rejected">rejected</option>
        <option value="declined">declined</option>
      </select>
      <TrackerInput
        placeholder="compenstation per month"
        type="number"
        value={application.compensation}
        callback={(compensation) => callback("compensation", compensation)}
      />
      <textarea
        className="mt-6 border w-full p-2 focus:outline-none rounded-md focus:ring focus:ring-indigo-600 focus:text-indigo-600 focus:font-semibold"
        placeholder="notes"
        onChange={(e) => callback("note", e.target.value)}
        value={application.note}
      />
      {trackerLeftContainerState == "edit" ? (
        <button
          disabled={isLoading}
          className="w-full  disabled:bg-indigo-400 disabled:cursor-not-allowed mt-6 rounded-md p-3 bg-indigo-600 text-white font-bold focus:ring focus:ring-indigo-300 outline-none"
          onClick={onUpdateApplicationHandler}
        >
          {isLoading ? "Updating..." : "Save Changes"}
        </button>
      ) : (
        <button
          disabled={isAddApplicationBtnDisabled(application) || isLoading}
          className="w-full mt-6 rounded-md p-3 bg-indigo-600 text-white font-bold disabled:bg-indigo-400 disabled:cursor-not-allowed  focus:ring focus:ring-indigo-300 outline-none"
          onClick={onAddApplicationHandler}
        >
          {isLoading ? "Adding..." : "Add"}
        </button>
      )}
    </>
  );
};

export default Form;
