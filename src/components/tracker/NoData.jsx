const NoData = ({ img, heading }) => {
  return (
    <div className="mt-20 w-full text-gray-400  text-center text-lg">
      <img src={img} className="m-auto" />
      <h1 className="mt-8">
        {heading} <br />
      </h1>
    </div>
  );
};

export default NoData;
