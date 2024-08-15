import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import {
  ArrowUpRightCircle,
  DashCircle,
  PlusCircle,
} from "react-bootstrap-icons";

const CompanyButtons = ({
  callback,
  isLoading,
  activeCompanyId,
  companyId,
  careerpage_url,
}) => {
  const companyState = useSelector((state) => state.companySlice);

  const onClickHandler = (e) => {
    e.stopPropagation();
    callback(companyId);
  };

  return (
    <>
      {companyState.filterBy == "watchlist" ? (
        <>
          {isLoading && activeCompanyId == companyId ? (
            <Spinner />
          ) : (
            <DashCircle
              size="22"
              title="remove from watchlist"
              onClick={(e) => onClickHandler(e)}
            />
          )}
        </>
      ) : (
        <>
          {activeCompanyId == companyId && isLoading ? (
            <Spinner />
          ) : (
            <PlusCircle
              size="22"
              title="add to watchlist"
              onClick={(e) => onClickHandler(e)}
            />
          )}
        </>
      )}
      <a
        href={careerpage_url}
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        <ArrowUpRightCircle size="22" />
      </a>
    </>
  );
};

export default CompanyButtons;
