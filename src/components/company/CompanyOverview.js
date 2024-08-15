import {
  BoxArrowUpRight,
  DashCircle,
  Heart,
  PlusCircle,
} from "react-bootstrap-icons";
import AboutCompany from "./AboutCompany";
import CompanyHeader from "./CompanyHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { popConfigs } from "../../configs/popconfig";
import OverviewNav from "./OverviewNav";

const CompanyOverview = () => {
  window.scroll(0, 0);

  const companyState = useSelector((state) => state.companySlice);
  const authState = useSelector((state) => state.authSlice);
  const { careerpage_url } = companyState.selectedCompany;

  let onPopUp = () => {
    let width = window.height;
    let height = window.width;
    let left = 0;
    let top = 0;
    let options = popConfigs(width, height, left, top);
    window.open(careerpage_url, "Popup", options);
  };

  return (
    <>
      {!authState.loggedin && (
        <div className="bg-yellow-200 text-yellow-700 font-bold p-4 text-center m-auto text-sm md:text-base">
          "Hey pal, you're not logged in yet. Unlock more companies by{" "}
          <span className="underline">
            <Link to="/signup">creating an account</Link>
          </span>{" "}
          or{" "}
          <span className="underline">
            <Link to="/login">logging</Link>"
          </span>
        </div>
      )}
      <OverviewNav />
      <CompanyHeader />
      <div className="w-11/12 m-auto flex gap-4 flex-wrap">
        <button
          onClick={onPopUp}
          className="bg-indigo-600 px-4 py-2 text-white rounded-md flex gap-4 items-center text-sm md:text-lg"
        >
          Pop Openings
          <BoxArrowUpRight />
        </button>
      </div>
      <AboutCompany />
    </>
  );
};

export default CompanyOverview;
