import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { companyActions } from "../store/companiesSlice";
import { fetchCompanies } from "../store/companiesThunks";
import { useNavigate } from "react-router-dom";
import { formatToShortDate } from "../utils/dateFormatter";
import { userApplicationActions } from "../store/userApplicationSlice";

const Filter = ({ list, from }) => {
  const [isDrop, setIsDrop] = useState(false);
  const companyState = useSelector((state) => state.companySlice);
  const userApplicationState = useSelector(
    (state) => state.userApplicationSlice
  );

  const authState = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date();

  const onFilterHandler = (item) => {
    setIsDrop(false);
    if (from == "company") {
      dispatch(
        fetchCompanies(
          authState.user._id,
          item,
          authState.user.token,
          companyState.currentPageNo,
          navigate
        )
      );
    } else {
      dispatch(userApplicationActions.filterBy(item));
    }
  };

  const isDisabled = () => {
    if (from == "company") {
      return (
        companyState.isLoading || companyState.error || !authState.loggedin
      );
    } else {
      return false;
    }
  };

  const isChecked = (item) => {
    if (from == "company" && companyState.filterBy == item) return true;
    else if (from == "tracker" && userApplicationState.filterby == item)
      return true;
    else return false;
  };
  return (
    <div
      className={`${
        !companyState.isCompanyContainerVisble && "hidden"
      } flex-col md:flex md:flex-row `}
    >
      <div className="w-full md:w-2/5 lg:w-1/3 p-4  flex justify-between border border-r-0 border-l-0 relative">
        <h1 className="text-gray-700 font-semibold">
          Filter by{" "}
          <span className="capitalize font-semibold bg-indigo-200 py-1 px-4 text-indigo-600 rounded-md">
            {from == "company"
              ? companyState.filterBy
              : userApplicationState.filterby}
          </span>
        </h1>
        <button
          disabled={isDisabled()}
          className="text-gray-700 disabled:cursor-not-allowed"
          onClick={() => setIsDrop(!isDrop)}
        >
          <ChevronDown size="20" />
        </button>
        {isDrop && (
          <div className="absolute top-14 z-10 h-fit bg-white w-full border left-0 flex flex-wrap p-4 rounded-md gap-4">
            {list.map((item) => (
              <>
                <label className="flex">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-full transition duration-150 ease-in-out cursor-pointer"
                    checked={isChecked(item)}
                    onChange={() => onFilterHandler(item)}
                  />
                  <span className="ml-2 text-gray-700">{item}</span>
                </label>
              </>
            ))}
          </div>
        )}
      </div>
      <div className="hidden border border-r-0 w-full md:w-3/5 lg:w-[67%] md:flex justify-between py-4 md:py-0 px-6 items-center border-t-0 md:border-t">
        <div>
          <h1 className="font-semibold bg-indigo-200 px-4 py-1 text-indigo-600">
            Reset
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="text-gray-700 font-semibold">
            {formatToShortDate(date)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Filter;
