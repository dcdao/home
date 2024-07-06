export default function MobileContent() {
  return (
    <div>
      <div className="w-[100vw] h-[calc(100vh-100px)] flex-grow flex flex-col items-center bg-[#0A0A0A] justify-center gap-[10px] mt-[20px] px-[30px]">
        {/* <img src="/images/hero.webp" alt="dcdao" className="w-[40vw]" /> */}
        <h1 className="text-white text-center text-[30px] font-bold duration-300">
          Darwinia Community DAO
        </h1>{" "}
        <h2 className="text-white text-[18px] text-center opacity-50">
          DC DAO welcomes anyone striving to innovate in Web3
        </h2>
        {/* <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div> */}
        <img
          src="/images/NFT/NFT_1.png"
          className="w-[250px] h-[250px] object-cover m-auto animate-loop-rotate rounded-full my-[30px]"
          alt="dcdao nft"
        />
        <button className="w-[180px] h-[60px] text-white text-[24px] font-bold bg-[#FF0084] rounded-[30px]">
          Join Us
        </button>
        <div className="w-[80vw] h-[2px] bg-[rgba(255,255,255,0.4)] my-[2vh] flex-shrink-0"></div>
        <div className="flex items-center justify-center gap-[20px] duration-500">
          <a href="https://twitter.com/DarwiniaNetwork" target="_blank">
            <img
              src="/icons/X.svg"
              alt="X"
              className="w-[40px] h-[40px] rounded-full shadow-[0_0_30px_10px_rgba(0,0,0,0.4)]"
            />
          </a>
          <a href="https://t.me/DarwiniaNetwork" target="_blank">
            <img
              src="/icons/Telegram.svg"
              alt="Telegram"
              className="w-[40px] h-[40px] rounded-full shadow-[0_0_30px_10px_rgba(0,0,0,0.4)]"
            />
          </a>
          <a href="https://github.com/darwinia-network" target="_blank">
            <img
              src="/icons/Github.svg"
              alt="Github"
              className="w-[40px] h-[40px] rounded-full shadow-[0_0_30px_10px_rgba(0,0,0,0.4)]"
            />
          </a>
        </div>
        <h3 className="text-[18px] text-[rgba(255,255,255,0.5)] font-medium">
          Funded by{" "}
          <a href="https://darwinia.network/" className="text-[#FF0084]">
            Darwinia.Network
          </a>
        </h3>
      </div>
    </div>
  );
}
