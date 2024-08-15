import { EmojiSmileFill, FunnelFill, LayersFill } from "react-bootstrap-icons";
import COM_BENFTS from "../../assets/benefits.png";
import FeatureItem from "./FeatureItem";
import FeatureWrapper from "./FeatureWrapper";

const CompaniesFeatures = () => {
  return (
    <FeatureWrapper
      heading="300+ Companies for Job Seekers"
      content=" Access career pages for top companies in a centralized talent hub,
          streamlining your job search and saving you the hassle of
          searching the web company by company."
      img={COM_BENFTS}
      align="left"
    >
      <FeatureItem
        svg={<EmojiSmileFill color="white" size="24px" />}
        heading="Comprehensive company listing"
        content=" Browse over 300 pre-vetted companies representing a diverse
          range of industries and sectors."
      />
      <FeatureItem
        svg={<FunnelFill color="white" size="24px" />}
        heading="Filter by industry"
        content="Easily filter the company list industries to find
          opportunities that match your expertise."
      />
      <FeatureItem
        svg={<LayersFill color="white" size="24px" />}
        heading="Dedicated career pages"
        content="Direct links to each company's career page where you can view
          current openings and apply directly."
      />
    </FeatureWrapper>
  );
};

export default CompaniesFeatures;
