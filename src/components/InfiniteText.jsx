import React from "react";

const InfiniteText = () => {
  return (
    <div className="py-[2.5rem] my-[100px]">
      <div className="flex overflow-hidden">
        <div className="flex animate-loop-scroll">
          <h4 className="text-white text-[160px] max-w-none object-contain w-[120rem] font-bold">
            We make things Better
          </h4>
        </div>
        <div className="flex animate-loop-scroll" aria-hidden="true">
          <h4 className="text-white text-[160px] max-w-none object-contain w-[120rem]">
            We make things Better
          </h4>
        </div>
      </div>
    </div>
  );
};

export default InfiniteText;
