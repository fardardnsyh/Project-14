const FeatureItem = ({ svg, heading, content }) => {
  return (
    <div className="flex items-start mt-8 gap-4">
      <div
        className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 "
        bis_skin_checked="1"
      >
        {svg}
      </div>
      <div bis_skin_checked="1">
        <h4 className="text-xl font-bold">{heading}</h4>
        <p className="mt-1">{content}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
