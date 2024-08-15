const TrackerItem = ({ name, val }) => {
  return (
    <div className="mt-6 flex justify-between border rounded-md p-3">
      <h1 className="font-semibold">{name}</h1>
      <p>{val}</p>
    </div>
  );
};

export default TrackerItem;
