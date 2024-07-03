const Hero = () => {
  return (
    <div className="relative bg-[url('/images/hero.webp')] lg:h-[100vh] bg-center bg-no-repeat bg-cover p-[2vw] flex flex-col items-center gap-[20px] lg:gap-0 lg:justify-between lg:flex-col 2xl:flex-row">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h1 className="relative text-[40px] lg:text-[160px] font-[600] lg:leading-[200px] text-[#fff] z-10 text-center lg:text-left">
        Darwinia <br /> Community
        <br /> DAO
      </h1>

      <div className="relative flex flex-col items-center justify-center w-[30vw] flex-shrink-0 gap-[10px] z-10">
        <button className="w-[10vw] h-[10vw] rounded-full text-[#000] text-[2vw] bg-[#fff] font-bold hover:w-[15vw] duration-300">
          Join
        </button>
        <p></p>
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
