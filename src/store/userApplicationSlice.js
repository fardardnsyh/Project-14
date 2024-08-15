import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
  applications2: [],
  selectedApplication: {},
  isLoading: true,
  filterby: "all",
  isApplicationContainerVisible: true,
  trackerLeftContainerState: "default",
  error: false,
};

const userApplicationSlice = createSlice({
  name: "userApplication",
  initialState,
  reducers: {
    setApplications(state, action) {
      state.applications = action.payload;
      state.applications2 = action.payload;
      // state.selectedApplication = { ...action.payload[0] };
      state.error = false;
      state.isLoading = false;
      return state;
    },

    setSelectedApplication(state, action) {
      state.selectedApplication = action.payload;
      return state;
    },

    setIsApplicationContainerVisible(state, action) {
      state.isApplicationContainerVisible = action.payload;
      return state;
    },

    addApplication(state, action) {
      state.applications = [...state.applications, action.payload];
      state.applications2 = [...state.applications2, action.payload];
      return state;
    },

    deleteApplication(state, action) {
      state.applications = state.applications.filter(
        (application) => application._id !== action.payload._id
      );
      state.applications2 = state.applications2.filter(
        (application) => application._id !== action.payload._id
      );
      state.selectedApplication = state.applications[0] || {};
      return state;
    },
    setTrackerLeftContainerState(state, action) {
      state.trackerLeftContainerState = action.payload;
      return state;
    },
    filterBy(state, action) {
      state.filterby = action.payload;
      if (action.payload == "all") {
        state.applications = state.applications2;
      } else {
        state.applications = state.applications2.filter(
          (application) => application.status == action.payload
        );
      }
      return state;
    },
    updateApplication(state, action) {
      state.applications = [...state.applications, action.payload];
      state.applications2 = [...state.applications2, action.payload];
    },

    removeApplication(state, action) {
      state.applications = state.applications.filter(
        (application) => application._id !== action.payload._id
      );
      state.selectedApplication = action.payload;
      return state;
    },
    setPrevEditState(state, action) {
      state.applications = [...state.applications, action.payload];
      state.applications2 = [...state.applications2, action.payload];
    },
  },
});

export const userApplicationActions = userApplicationSlice.actions;
export default userApplicationSlice.reducer;
