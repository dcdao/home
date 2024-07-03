const CuttingEdge = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[20px] lg:h-[954px]">
      <div className="lg:min-w-[426px] bg-[#FB3B94] lg:flex items-end rounded-[50px] h-full p-[50px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[30px] lg:text-[40px] font-bold text-white mb-0">
            Darwinia Network
          </h3>
          <p className="text-white font-[500]">
            You’re the reason we’re here, full stop. We value collaboration
            above ego and tackle the extra mile to achieve your vision with a
            can-do attitude.
          </p>
          <a className="w-[100px] h-[40px] bg-white text-center cursor-pointer leading-[40px] rounded-full font-bold text-[18px] hover:w-[130px] duration-300">
            Visit
          </a>
        </div>
      </div>
      <div className="h-full">
        <div className="bg-white w-full items-end lg:flex rounded-[50px] lg:h-[49%] p-[50px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-[30px] lg:text-[40px] font-bold text-black">
              MSGPort
            </h3>
            <p className="30px  font-[500]">
              Proactive about adopting the latest technologies, we deliver
              forward-thinking brand solutions that evolve to serve future
              needs.
            </p>
            <a className="w-[100px] h-[40px] text-white text-center cursor-pointer leading-[40px] bg-black rounded-full font-bold text-[18px] hover:w-[130px] duration-300">
              Visit
            </a>
          </div>
        </div>
        <div className="w-full lg:flex lg:h-[49%] mt-[20px] gap-[20px]">
          <div className="bg-[#000] items-end flex rounded-[50px] p-[50px] lg:w-[50%] mb-[20px] lg:mb-0">
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[30px] lg:text-[40px] font-bold text-white">
                Hide Nothing
              </h3>
              <p className="30px mt-[20px] text-white font-[500]">
                You’re the reason we’re here, full stop. We value collaboration
                above ego and tackle the extra mile to achieve your vision with
                a can-do attitude.
              </p>
              <a className="w-[100px] h-[40px]  text-center cursor-pointer leading-[40px] bg-white rounded-full font-bold text-[18px] hover:w-[130px] duration-300">
                Visit
              </a>
            </div>
          </div>
          <div className="bg-[#FB3B94] items-end flex rounded-[50px] p-[50px] lg:w-[50%]">
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[30px] lg:text-[40px] font-bold text-white">
                Fresh Angles
              </h3>
              <p className="30px mt-[20px] text-white font-[600]">
                Explore. Adapt. Stay curious. Our team lives by these values,
                designing to inspire and create a better, more interesting
                world.
              </p>
              <a className="w-[100px] h-[40px]  text-center cursor-pointer leading-[40px] bg-white rounded-full font-bold text-[18px] hover:w-[130px] duration-300">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuttingEdge;
