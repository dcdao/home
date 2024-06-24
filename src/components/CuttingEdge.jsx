import React from "react";

const CuttingEdge = () => {
  return (
    <div className="flex items-center gap-[20px] h-[954px]">
      <div className="min-w-[426px] bg-[#FB3B94] flex items-end rounded-[50px] h-full p-[50px]">
        <div>
          <h3 className="text-[40px] font-bold text-white">You First</h3>
          <p className="30px mt-[20px] text-white font-[500]">
            You’re the reason we’re here, full stop. We value collaboration
            above ego and tackle the extra mile to achieve your vision with a
            can-do attitude.
          </p>
        </div>
      </div>
      <div className="h-full">
        <div className="bg-white w-full items-end flex rounded-[50px] h-[49%] p-[50px]">
          <div>
            <h3 className="text-[40px] font-bold text-black">Cutting Edge</h3>
            <p className="30px mt-[20px] font-[500]">
              Proactive about adopting the latest technologies, we deliver
              forward-thinking brand solutions that evolve to serve future
              needs.
            </p>
          </div>
        </div>
        <div className="w-full flex h-[49%] mt-[20px] gap-[20px]">
          <div className="bg-[#000] items-end flex rounded-[50px] p-[50px] w-[50%]">
            <div>
              <h3 className="text-[40px] font-bold text-white">Hide Nothing</h3>
              <p className="30px mt-[20px] text-white font-[500]">
                You’re the reason we’re here, full stop. We value collaboration
                above ego and tackle the extra mile to achieve your vision with
                a can-do attitude.
              </p>
            </div>
          </div>
          <div className="bg-[#FB3B94] items-end flex rounded-[50px] p-[50px] w-[50%]">
            <div>
              <h3 className="text-[40px] font-bold text-white">Fresh Angles</h3>
              <p className="30px mt-[20px] text-white font-[600]">
                Explore. Adapt. Stay curious. Our team lives by these values,
                designing to inspire and create a better, more interesting
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuttingEdge;
