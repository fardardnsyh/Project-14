import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
  selectedCompany: {},
  searchedCompanies: [],
  isLoading: true,
  totalCompanies: 0,
  currentPageNo: 1,
  filterBy: "all",
  isCompanyContainerVisble: true,
  error: false,
};

const companySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {
    setCompanies(state, action) {
      state.companies = action.payload.companies;
      state.selectedCompany = { ...action.payload.companies[0] };
      state.totalCompanies = action.payload.totalCompaniesCount;
      state.error = false;
      state.isLoading = false;
      return state;
    },
    setSearchedCompanies(state, action) {
      state.searchedCompanies = action.payload;
      return state;
    },
    setSelectedCompany(state, action) {
      let isExist = state.companies.some(
        (company) => company._id === action.payload._id
      );
      if (!isExist) state.companies.unshift(action.payload);
      state.selectedCompany = { ...action.payload };
      return state;
    },
    setFilterBy(state, action) {
      state.filterBy = action.payload;
      state.isLoading = true;
      return state;
    },
    prevPage(state) {
      state.currentPageNo -= 1;
      state.isLoading = true;
      return state;
    },
    nextPage(state) {
      state.currentPageNo += 1;
      state.isLoading = true;
      return state;
    },
    setCurrentPageNo(state, action) {
      state.currentPageNo = action.payload;
    },
    setIsCompanyContainerVisible(state, action) {
      state.isCompanyContainerVisble = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
      return state;
    },
  },
});

export const companyActions = companySlice.actions;
export default companySlice.reducer;
