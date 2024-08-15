import { useDispatch, useSelector } from "react-redux";
import ApplicationView from "./ApplicationView";
import Form from "./Form";
import NoData from "./NoData";
import NodataImg from "../../assets/no_application2.png";
import BackNav from "./BackNav";

const SingleApplication = () => {
  const userApplicationState = useSelector(
    (state) => state.userApplicationSlice
  );
  const selectedApplication = userApplicationState.selectedApplication;
  const trackerLeftContainerState =
    userApplicationState.trackerLeftContainerState;

  const newApplication = "new";
  const editApplication = "edit";

  return (
    <>
      <div className="w-[95%] rounded-md overflow-y-scroll border pb-8 pt-2 px-6 bg-white m-auto mt-5 md:mt-0">
        <BackNav />
        {trackerLeftContainerState == editApplication ||
        trackerLeftContainerState == newApplication ? (
          <Form />
        ) : (
          <>
            {selectedApplication?._id ? (
              <ApplicationView />
            ) : (
              <NoData
                img={NodataImg}
                heading="select an application from right"
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SingleApplication;
