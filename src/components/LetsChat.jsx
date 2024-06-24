const LetsChat = () => {
  return (
    <div className="w-full min-h-[375px] flex items-center justify-between bg-white transition-all delay-75 duration-200 cursor-pointer hover:bg-[#FB3B94] my-[100px] p-[50px] rounded-[50px] ">
      <div>
        <h2 className="text-[120px] font-[600]">Lets Start Now</h2>
        <p className="mt-[10px] text-[30px] font-[500]">
          Join the community by connecting to your wallet
        </p>
      </div>
      <button className="w-[200px] h-[200px] rounded-full bg-black text-white text-[40px] font-[600] hover:scale-[1.05] duration-300">
        Start
      </button>
    </div>
  );
};

export default LetsChat;
