const FeatureWrapper = ({ children, heading, content, img, align, pt }) => {
  return (
    <div className={`pb-20  ${pt && pt}`}>
      <div className="w-11/12 m-auto flex flex-col md:flex-row">
        <div className={`md:w-1/2 ${align === "right" && "order-last"}`}>
          <img
            alt="feature-img"
            src={img}
            className={`m-auto ${
              align === "right" ? "md:mr-0" : "md:ml-0"
            } w-96 h-96`}
          />
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <h1 className="text-4xl font-bold text-indigo-600">{heading}</h1>
          <p className="m-auto mt-6 text-xl">{content}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeatureWrapper;
