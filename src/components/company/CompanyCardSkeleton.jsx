const CompanyCardSkeleton = () => {
  return (
    <div className="border w-full p-4 rounded-md mt-4 bg-white">
      <div className="animate-pulse flex items-center justify-between">
        <div className="w-12 h-12 rounded-md border bg-gray-300 flex-shrink-0"></div>
        <div className="p-3 md:p-3 md:px-16 rounded-full bg-gray-300"></div>
        <div className="flex gap-8">
          <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCardSkeleton;
