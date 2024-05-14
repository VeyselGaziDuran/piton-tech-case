const SuccessMetrics = () => {
  return (
    <div className=" mt-52">
      <div className="w-full h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <div className="bg-black w-full h-60 flex justify-center items-center flex-col">
          <div className="flex flex-col">
            <span className="text-metricsYellow font-bold text-6xl">350 +</span>
            <span className="text-white font-medium text-xl pt-3">
              Clients Worldwide
            </span>
          </div>
        </div>
        <div className="bg-black w-full h-60 flex justify-center items-center flex-col">
          <div className="flex flex-col">
            <span className="text-metricsYellow font-bold text-6xl">20 +</span>
            <span className="text-white font-medium text-xl pt-3">
              Team Members
            </span>
          </div>
        </div>
        <div className="bg-black w-full h-60 flex justify-center items-center flex-col">
          <div className="flex flex-col">
            <span className="text-metricsYellow font-bold text-6xl">100 +</span>
            <span className="text-white font-medium text-xl pt-3">
              Projects Completed
            </span>
          </div>
        </div>
        <div className="bg-black w-full h-60 flex justify-center items-center flex-col">
          <div className="flex flex-col">
            <span className="text-metricsYellow font-bold text-6xl">85M +</span>
            <span className="text-white font-medium text-xl pt-3">
              Revenue Generated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessMetrics;
