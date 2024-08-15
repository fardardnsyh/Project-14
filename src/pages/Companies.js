import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CompanyContainer from "../components/company/CompanyContainer";
import CompanyOverview from "../components/company/CompanyOverview";
import { fetchCompanies } from "../store/companiesThunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Search from "../components/company/Search";
import Pagination from "../components/Pagination";

const Companies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const companyState = useSelector((state) => state.companySlice);
  const authState = useSelector((state) => state.authSlice);

  useEffect(() => {
    if (!companyState.companies.length)
      dispatch(
        fetchCompanies(
          authState.user._id,
          "all",
          authState.user.token,
          companyState.currentPageNo,
          navigate
        )
      );
  }, []);

  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Navbar />
        <Search />
        <Filter
          mainHeading="Category"
          list={["all", "mnc", "startup", "watchlist"]}
          from="company"
        />
        <div className="flex flex-1 overflow-hidden">
          <div
            className={`${
              !companyState.isCompanyContainerVisble && "hidden"
            } flex w-full md:w-2/5 lg:w-1/3 md:flex border-r-2 relative flex-col bg-gray-50 `}
          >
            <div className="w-full overflow-scroll pb-20">
              <CompanyContainer />
            </div>
            <Pagination />
          </div>
          <div
            className={`${
              companyState.isCompanyContainerVisble && "hidden"
            }  w-full md:w-2/5 md:block lg:w-1/3 border-r-2 overflow-y-scroll flex-1 pb-28 md:pb-0`}
          >
            <div className="w-full overflow-scroll ">
              {companyState.selectedCompany._id ? (
                <CompanyOverview />
              ) : (
                <h1 className="text-center mt-12">
                  "This filter doesn't include any companies. Please consider
                  trying other filters."
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
