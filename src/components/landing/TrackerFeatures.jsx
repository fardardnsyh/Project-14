import FeatureItem from "./FeatureItem";
import FeatureWrapper from "./FeatureWrapper";
import {
  FunnelFill,
  InfoCircleFill,
  SearchHeartFill,
} from "react-bootstrap-icons";

import JOB_APP from "../../assets/job_app.png";

const TrackerFeatures = () => {
  return (
    <FeatureWrapper
      heading="Built-In Job Application Tracker"
      content="Organize key details for each role you apply to, manage status
      updates. Filters, search tools and status updates keep you
      informed of your progress for each application."
      img={JOB_APP}
      align="right"
      pt="md:pt-28"
    >
      <FeatureItem
        svg={<InfoCircleFill color="white" size="24px" />}
        heading="Job details"
        content="Record role, date applied, company, job link, status, contacts
      and notes."
      />

      <FeatureItem
        svg={<FunnelFill color="white" size="24px" />}
        heading="Status filtering"
        content="Sort applications by status (applied, scheduled, interviewing,
        pending, selected declined)."
      />

      <FeatureItem
        svg={<SearchHeartFill color="white" size="24px" />}
        heading="Keyword search"
        content="Locate relevant applications quickly."
      />
    </FeatureWrapper>
  );
};

export default TrackerFeatures;
