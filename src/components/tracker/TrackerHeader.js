import { PlusCircle } from "react-bootstrap-icons";
import Filter from "../Filter";
import { useDispatch, useSelector } from "react-redux";
import { userApplicationActions } from "../../store/userApplicationSlice";

const TrackerHeader = () => {
  return (
    <>
      <div className="pt-0 md:pt-20 -mt-5 md:-mt-2 p-4 gap-4 md:gap-0 flex justify-between items-center"></div>
      <Filter
        mainHeading="Status"
        list={[
          "all",
          "applied",
          "interviewing",
          "pending",
          "selected",
          "rejected",
          "declined",
        ]}
        from="tracker"
      />
    </>
  );
};

export default TrackerHeader;
