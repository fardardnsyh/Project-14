const TrackerInput = ({ placeholder, type, callback, value }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className="w-full border rounded-md p-3 mt-6 bg-white focus:ring focus:ring-indigo-600 focus:text-indigo-600 focus:font-semibold outline-none"
        min={type == "date" ? "2024-01-01" : 0}
        maxlength={type == "text" && 25}
        onChange={(e) => callback(e.target.value)}
        value={value}
      />
    </>
  );
};

export default TrackerInput;
