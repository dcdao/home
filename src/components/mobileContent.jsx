export default function MobileContent() {
  return (
    <div>
      <div className="w-full h-[70vh] flex flex-col items-center justify-start gap-[20px] mt-[20px] px-[30px]">
        {/* <img src="/images/hero.webp" alt="dcdao" className="w-[40vw]" /> */}
        <img
          className="w-[120px] h-[120px] object-contain"
          src="/images/DCDAO.png"
          alt="Logo"
        />
        <h1 className="text-white text-center text-[30px] font-bold duration-300">
          Darwinia Community DAO
        </h1>{" "}
        <h2 className="text-white text-[18px] font-medium text-center">
          DC DAO welcomes anyone striving to innovate in Web3
        </h2>
        {/* <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div> */}
        <button className="w-[180px] h-[60px] text-white text-[24px] font-bold border-[5px] border-solid border-white ">
          Join Us
        </button>
        <div className="w-[80vw] h-[2px] bg-[rgba(255,255,255,0.9)] my-[5vh]"></div>
        <div className="flex items-center justify-center gap-[20px] duration-500">
          <a href="https://twitter.com/DarwiniaNetwork" target="_blank">
            <img
              src="/icons/X.svg"
              alt="X"
              className="w-[40px] h-[40px] rounded-full"
            />
          </a>
          <a href="https://t.me/DarwiniaNetwork" target="_blank">
            <img
              src="/icons/Telegram.svg"
              alt="Telegram"
              className="w-[40px] h-[40px] rounded-full"
            />
          </a>
          <a href="https://github.com/darwinia-network" target="_blank">
            <img
              src="/icons/Github.svg"
              alt="Github"
              className="w-[40px] h-[40px] rounded-full"
            />
          </a>
        </div>
        <h3 className="text-[18px] text-white font-medium">
          Funded by{" "}
          <a href="https://darwinia.network/" className="text-[#FF0084]">
            Darwinia.Network
          </a>
        </h3>
      </div>
    </div>
  );
}
