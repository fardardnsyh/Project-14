import axios from "axios";
import { companyActions } from "./companiesSlice";
import { SERVER_DOWN_MSG } from "./constants";
import { authActions } from "./authSlice";

export const fetchCompanies =
  (userId, type, token, currentPageNo, navigate) => async (dispatch) => {
    try {
      dispatch(companyActions.setFilterBy(type));
      let url = `companies/filter?userId=${userId}&type=${type}&pageno=${currentPageNo}`;
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(url, token && options);
      dispatch(companyActions.setCompanies(data.data));
    } catch (error) {
      const { response } = error;
      if (response) {
        if (response.data.error.message == "jwt expired") {
          dispatch(authActions.logout());
          navigate("/login");
        }
        dispatch(companyActions.setError(response.data.error.message));
      } else {
        dispatch(companyActions.setError(SERVER_DOWN_MSG));
      }
    }
  };

export const fetchSearchedCompanies =
  (searchtext, token, userId) => async (dispatch) => {
    if (!token) return;
    try {
      let url = `companies/search?companyname=${searchtext}&userId=${userId}`;
      let options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(url, options);
      dispatch(companyActions.setSearchedCompanies(data.data));
    } catch (error) {
      const { response } = error;
      if (response) {
        if (response.data.error.message == "jwt expired") {
          dispatch(authActions.logout());
        }
        dispatch(companyActions.setError(response.data.error.message));
      } else {
        dispatch(companyActions.setError(SERVER_DOWN_MSG));
      }
    }
  };
