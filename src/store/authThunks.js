import axios from "axios";
import { authActions } from "./authSlice";
import { SERVER_DOWN_MSG } from "./constants";
import { fetchCompanies } from "./companiesThunks";

export const createAccount =
  (user, setIsLoading, setReqError, toast) => async (dispatch) => {
    try {
      await axios.post("/user/signup", user);
      setIsLoading(false);
      toast.success("Account successfully created. Please login to continue.");
    } catch (error) {
      setIsLoading(false);
      const { response } = error;
      if (response) {
        setReqError(response.data.error.message);
      } else {
        setReqError(SERVER_DOWN_MSG);
      }
    }
  };

export const login =
  (user, setIsLoading, setReqError, navigate) => async (dispatch) => {
    try {
      const { data } = await axios.post("/user/signin", user);
      setIsLoading(false);
      dispatch(authActions.setUser(data.data));
      navigate("/tracker");
    } catch (error) {
      setIsLoading(false);
      const { response } = error;
      if (response) {
        setReqError(response.data.error.message);
      } else {
        setReqError(SERVER_DOWN_MSG);
      }
    }
  };

export const addCompanyToWatchlist =
  (
    token,
    userId,
    companyId,
    filterBy,
    pageno,
    toast,
    setIsLoading,
    setActiveCompanyId
  ) =>
  async (dispatch) => {
    try {
      setIsLoading(true);
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.patch("/user/watchlist/add", { userId, companyId }, options);
      await dispatch(fetchCompanies(userId, filterBy, token, pageno));
      toast.success("sucessfully added company to your watchlist");
    } catch (error) {
      const { response } = error;
      if (response) {
        toast.error(response.data.error.message);
      } else {
        toast.error(SERVER_DOWN_MSG);
      }
    } finally {
      setActiveCompanyId(null);
      setIsLoading(false);
    }
  };

export const removeCompanyFromWatchlist =
  (
    token,
    userId,
    companyId,
    filterBy,
    pageno,
    toast,
    setIsLoading,
    setActiveCompanyId
  ) =>
  async (dispatch) => {
    try {
      setIsLoading(true);
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.patch(
        "/user/watchlist/remove",
        { userId, companyId },
        options
      );
      await dispatch(fetchCompanies(userId, filterBy, token, pageno));
      toast.success("sucessfully removed company from your watchlist");
    } catch (error) {
      const { response } = error;
      if (response) {
        toast.error(response.data.error.message);
      } else {
        toast.error(SERVER_DOWN_MSG);
      }
    } finally {
      if (setActiveCompanyId) setActiveCompanyId(null);
      setIsLoading(false);
    }
  };
