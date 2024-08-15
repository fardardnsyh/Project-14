import axios from "axios";
import { userApplicationActions } from "./userApplicationSlice";
import { authActions } from "./authSlice";
import { SERVER_DOWN_MSG } from "./constants";

export const fetchApplications =
  (userId, token, navigate) => async (dispatch) => {
    try {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`applications/${userId}`, options);
      dispatch(userApplicationActions.setApplications(data.data));
    } catch (error) {
      const { response } = error;
      if (response) {
        if (response.data.error.message == "jwt expired") {
          dispatch(authActions.logout());
          navigate("/login");
        }
      }
    }
  };

export const addApplication =
  (userId, application, toast, navigate, token, setIsLoading) =>
  async (dispatch) => {
    try {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `applications/${userId}`,
        {
          application,
        },
        options
      );
      dispatch(userApplicationActions.setSelectedApplication(data.data));
      dispatch(userApplicationActions.addApplication(data.data));
      dispatch(userApplicationActions.setTrackerLeftContainerState("default"));
      dispatch(userApplicationActions.setIsApplicationContainerVisible(false));
      toast.success("application added susscessfully!");
    } catch (error) {
      const { response } = error;
      if (response) {
        if (response.data.error.message == "jwt expired") {
          dispatch(authActions.logout());
          navigate("/login");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

export const updateApplication =
  (userId, applicationId, application, toast, navigate, token, setIsLoading) =>
  async (dispatch) => {
    try {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put(
        `applications/${userId}/${applicationId}`,
        {
          application,
        },
        options
      );
      dispatch(userApplicationActions.updateApplication(application));
      dispatch(userApplicationActions.setSelectedApplication(application));
      dispatch(userApplicationActions.setIsApplicationContainerVisible(false));
      dispatch(userApplicationActions.setTrackerLeftContainerState("default"));
      toast.success("application updated susscessfully!");
    } catch (error) {
      const { response } = error;
      if (response) {
        if (response.data.error.message == "jwt expired") {
          dispatch(authActions.logout());
          navigate("/login");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

export const deleteApplication =
  (userId, applicationId, application, toast, navigate, token, setisLoading) =>
  async (dispatch) => {
    try {
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(
        `applications/${userId}/${applicationId}`,
        options
      );
      dispatch(userApplicationActions.deleteApplication(application));
      toast.success("application deleted susscessfully!");
    } catch (error) {
      const { response } = error;
      if (response) {
        if (response.data.error.message == "jwt expired") {
          dispatch(authActions.logout());
          navigate("/login");
        }
      }
    } finally {
      setisLoading(false);
    }
  };
