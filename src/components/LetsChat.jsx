const LetsChat = () => {
  return (
    <div className="w-full min-h-[375px] flex items-center justify-between flex-col lg:flex-row bg-white transition-all delay-75 duration-200 cursor-pointer hover:bg-[#FB3B94] mt-[50px] lg:my-[100px] p-[50px] rounded-[50px] gap-[20px] lg:gap-0 ">
      <div>
        <h2 className="text-[40px] lg:text-[120px] font-[600]">
          Lets Start Now
        </h2>
        <p className="text-[20px] lg:mt-[10px] lg:text-[30px] font-[500]">
          Join the community by connecting to your wallet
        </p>
      </div>
      <button className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full bg-black text-white text-[40px] font-[600] hover:scale-[1.05] duration-300">
        Start
      </button>
    </div>
  );
};

export default LetsChat;
