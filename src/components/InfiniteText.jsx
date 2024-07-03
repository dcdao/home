const InfiniteText = () => {
  return (
    <div className="my-[100px]">
      <div className="flex overflow-hidden">
        <div className="flex animate-loop-scroll">
          <h4 className="text-black text-[40px] lg:text-[5vw] max-w-none object-contain w-[500px] lg:w-[60vw] font-bold">
            We make things Better
          </h4>
        </div>
        <div className="flex animate-loop-scroll" aria-hidden="true">
          <h4 className="text-black text-[20px] lg:text-[5vw] max-w-none object-contain w-[500px] lg:w-[60vw] font-bold">
            We make things Better
          </h4>
        </div>
      </div>
    </div>
  );
};

export default InfiniteText;
