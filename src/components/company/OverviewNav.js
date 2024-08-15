import { ArrowLeft, ArrowRight, List, ListNested } from "react-bootstrap-icons";
import { companyActions } from "../../store/companiesSlice";
import { useDispatch, useSelector } from "react-redux";

const OverviewNav = () => {
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.companySlice);
  let currentIndex = companyState.companies.findIndex(
    (company) => company._id === companyState.selectedCompany._id
  );

  const onClickHandler = (index) => {
    dispatch(companyActions.setSelectedCompany(companyState.companies[index]));
  };
  return (
    <div className="md:hidden border w-full p-4 flex items-center justify-between fixed bottom-0 bg-white">
      <div
        className="md:hidden flex items-center justify-between gap-3 cursor-pointer "
        onClick={() =>
          dispatch(companyActions.setIsCompanyContainerVisible(true))
        }
      >
        <ListNested />
        <h1 className="text-sm font-semibold text-gray-700">View List</h1>
      </div>
      <div className="flex gap-6 items-center">
        <button
          disabled={currentIndex < 1}
          className="p-2 rounded-md bg-indigo-600 text-white disabled:bg-indigo-400 disabled:cursor-not-allowed"
          onClick={() => onClickHandler(currentIndex - 1)}
        >
          <ArrowLeft />
        </button>
        <h1>{currentIndex + 1} of {companyState.companies.length}</h1>
        <button
          disabled={currentIndex + 1 == companyState.companies.length}
          className="p-2 rounded-md bg-indigo-600 text-white disabled:bg-indigo-400 disabled:cursor-not-allowed"
          onClick={() => onClickHandler(currentIndex + 1)}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default OverviewNav;
