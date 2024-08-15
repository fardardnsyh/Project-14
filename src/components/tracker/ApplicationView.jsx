import { useSelector } from "react-redux";

import { formatToShortDate } from "../../utils/dateFormatter";
import TrackerItem from "./TrackerItem";

const ApplicationView = () => {
  const userApplicationState = useSelector(
    (state) => state.userApplicationSlice
  );
  const selectedApplication = userApplicationState.selectedApplication;
  return (
    <>
      <TrackerItem name="Company Name" val={selectedApplication.company_name} />
      <TrackerItem name="Role Applied" val={selectedApplication.role} />
      <TrackerItem
        name="Date Applied"
        val={formatToShortDate(selectedApplication.applied_on) || ""}
      />
      <TrackerItem name="Status" val={selectedApplication.status} />
      <TrackerItem
        name="Salary/Compenstation"
        val={selectedApplication.compensation}
      />
      <div className=" bg-white border rounded-md p-3 mt-6">
        <h3 className="font-bold underline"> Notes </h3>
        <p>{selectedApplication.note}</p>
      </div>
    </>
  );
};

export default ApplicationView;
