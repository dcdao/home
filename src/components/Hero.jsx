const Hero = () => {
  return (
    <div className="relative bg-[url('/images/hero.png')] h-[100vh] bg-center bg-no-repeat bg-cover p-[2vw] flex items-center justify-between">
      <h1 className="text-[160px] font-[600] leading-[200px] text-[#fff]">
        Darwinia <br /> Community
        <br /> DAO
      </h1>
      <div className="flex flex-col items-center justify-center w-[40vw] flex-shrink-0 gap-[10px] ">
        <button className="w-[240px] h-[40px] rounded-[20px] text-[#000] bg-[#fff] font-[600] hover:scale-[1.05] duration-300">
          More
        </button>

        <button className="w-[240px] h-[40px] rounded-[20px] text-[#fff] bg-[#000] font-[600] hover:scale-[1.05] duration-300">
          Join
        </button>
      </div>
      {/* <video
        src="/code.mp4"
        loop
        autoPlay
        muted
        className="absolute right-[-40px] top-[260px] w-[500px] h-[300px]"
      ></video> */}
    </div>
  );
};

export default Hero;
