// eslint-disable-next-line react/prop-types
export default function LeftPart({ index }) {
  return (
    <div
      className="w-[100%] h-[300vh] flex-shrink-0 flex flex-col bg-[#f3f3f3] duration-700"
      style={{ transform: `translateY(-${index * 100}vh)` }}
    >
      <div className="w-full h-[100vh] flex-shrink-0 p-[3vw] pt-[6vw] flex flex-col items-center justify-center gap-[2vw]">
        <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div>
        <h1 className="text-black text-[3vw] font-bold">
          Darwinia Community DAO
        </h1>
        <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div>
      </div>
      <div className="w-full h-[100vh] flex-shrink-0 p-[3vw] pt-[6vw] flex flex-col justify-center items-center gap-[2vw]">
        <h2 className="text-black text-[1.6vw] font-medium text-center max-w-[39vw]">
          DC DAO is a community for holding and sharing NFTs. Join us to make
          every thing easier.
        </h2>
        <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div>
        <button className="w-[9vw] h-[3vw] text-[1.2vw] font-bold border-[5px] border-solid border-black hover:bg-black hover:text-white duration-300">
          Join Us
        </button>
      </div>
      <div className="w-full h-[100vh] flex-shrink-0 p-[3vw] flex items-center flex-col justify-center gap-[2vw]">
        <div className="flex items-center justify-center gap-[2vw]">
          <a href="https://twitter.com/DarwiniaNetwork" target="_blank">
            <img
              src="/icons/X.svg"
              alt="X"
              className="w-[4vw] h-[4vw] rounded-full shadow-[0_0_20px_0_rgba(0,0,0,0.4)]"
            />
          </a>
          <a href="https://t.me/DarwiniaNetwork" target="_blank">
            <img
              src="/icons/Telegram.svg"
              alt="Telegram"
              className="w-[4vw] h-[4vw] rounded-full shadow-[0_0_20px_0_rgba(0,0,0,0.4)]"
            />
          </a>
          <a href="https://github.com/darwinia-network" target="_blank">
            <img
              src="/icons/Github.svg"
              alt="Github"
              className="w-[4vw] h-[4vw] rounded-full shadow-[0_0_20px_0_rgba(0,0,0,0.4)]"
            />
          </a>
        </div>
        <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div>
        <h3 className="text-[1.6vw] text-black font-medium">
          2024 powered by DCDAO
        </h3>
      </div>
    </div>
  );
}
