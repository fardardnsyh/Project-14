const Spinner = () => {
  return (
    <svg
      className="animate-spin w-10 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#dddddd"
        strokeWidth="7"
        r="19"
        strokeDasharray="89.5353906273091 31.845130209103033"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1.0204081632653061s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};

export default Spinner;
