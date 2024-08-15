import { useDispatch, useSelector } from "react-redux";
import { companyActions } from "../store/companiesSlice";
import { userApplicationActions } from "../store/userApplicationSlice";
import { MOBILE_DEVICE_WIDTH } from "../store/constants";
import CompanyButtons from "./company/CompanyButtons";
import TrackerButtons from "./tracker/TrackerButtons";
import { statusColors } from "../utils/statuscol";

function Card({
  data,
  from,
  callback,
  activeCompanyId,
  isLoading,
  selectedId,
}) {
  const dispatch = useDispatch();

  const onCardClickHandler = () => {
    if (window.innerWidth < MOBILE_DEVICE_WIDTH) {
      if (from == "company") {
        {
          dispatch(companyActions.setIsCompanyContainerVisible(false));
        }
      } else {
        dispatch(
          userApplicationActions.setIsApplicationContainerVisible(false)
        );
      }
    }
    if (from == "company") {
      dispatch(companyActions.setSelectedCompany(data));
    } else {
      dispatch(userApplicationActions.setSelectedApplication(data));
    }
  };

  return (
    <div
      className={`w-full mt-4 p-4 rounded-lg text-gray-700 bg-white flex justify-between items-center hover:shadow-lg duration-300 cursor-pointer ${
        selectedId == data._id
          ? "border-4 border-indigo-600 shadow-2xl"
          : "border"
      }`}
      onClick={onCardClickHandler}
      style={{ overflowWrap: "break-word" }}
    >
      <div className="flex gap-4 line-clamp-1 w-3/5  items-center">
        {from == "company" && (
          <div className="border w-12 h-12 rounded-md flex items-center">
            <img
              src={
                "https://res.cloudinary.com/dftrncekd/image/upload/" +
                data.logo_url
              }
              className="rounded-md"
            />
          </div>
        )}
        <div>
          <div className="flex items-center">
            <h1
              className={`font-semibold text-sm md:text-lg line-clamp-1 ${
                selectedId == data._id && "text-indigo-600"
              } capitalize`}
            >
              {data.name || data.company_name}
            </h1>
          </div>
          <h1 className="italic text-xs font-bold capitalize">
            {data.industry}
          </h1>
        </div>
      </div>
      {from == "tracker" && (
        <div
          className={`flex items-center 
          ${statusColors[data.status]?.bg} 
          ${statusColors[data.status]?.text} 
          px-4 py-2 rounded-full font-semibold mr-2`}
        >
          <span className="text-xs capitalize">{data.status}</span>
        </div>
      )}
      <div className="flex gap-4 items-center">
        {from == "company" ? (
          <CompanyButtons
            callback={callback}
            activeCompanyId={activeCompanyId}
            isLoading={isLoading}
            companyId={data._id}
            careerpage_url={data.careerpage_url}
          />
        ) : (
          <TrackerButtons data={data} />
        )}
      </div>
    </div>
  );
}

export default Card;
