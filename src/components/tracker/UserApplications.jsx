import Filter from "../Filter";
import Card from "../Card";

import { PlusCircle } from "react-bootstrap-icons";
import NoData from "./NoData";
import NO_APPLICATION1 from "../../assets/no_application1.png";
import { useSelector } from "react-redux";
import CompanyCardSkeleton from "../company/CompanyCardSkeleton";
import { useState } from "react";

const UserApplications = ({ isLoading }) => {
  const userApplicationState = useSelector(
    (state) => state.userApplicationSlice
  );
  return (
    <>
      <div className="overflow-y-scroll h-full m-auto px-4 w-full pb-8">
        {userApplicationState.isLoading ? (
          <>
            {Array(5)
              .fill(0)
              .map((e, i) => (
                <CompanyCardSkeleton key={i} />
              ))}
          </>
        ) : userApplicationState.applications.length ? (
          userApplicationState.applications.map((application) => (
            <Card
              data={application}
              from="tracker"
              selectedId={userApplicationState.selectedApplication?._id}
            />
          ))
        ) : (
          <NoData
            img={NO_APPLICATION1}
            heading="You have currently no applications to show"
            action_text="Application"
          />
        )}
      </div>
    </>
  );
};

export default UserApplications;
