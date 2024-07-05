// eslint-disable-next-line react/prop-types
export default function LeftPart({ index }) {
  //   const style1 = useTrail(4, {
  //     from: { transform: "translateY(300%)", opacity: 0 },
  //     to: {
  //       transform: index === 0 ? "translateY(0%)" : "translateY(300%)",
  //       opacity: index === 0 ? 1 : 0,
  //     },
  //     delay: index === 0 ? 500 : 200,
  //   });
  return (
    <div
      className="w-[100%] h-[200vh] flex-shrink-0 flex flex-col bg-[rgba(255,255,255)] duration-700"
      style={{ transform: `translateY(-${index * 100}vh)` }}
    >
      <div className="w-full h-[100vh] flex-shrink-0 p-[3vw] pt-[6vw] flex flex-col items-center justify-center gap-[2vw]">
        <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div>
        {/* <img src="/images/hero.webp" alt="dcdao" className="w-[40vw]" /> */}
        <h1
          className="text-black text-[3vw] font-bold duration-300"
          style={{
            transform: index === 0 ? "translateY(0)" : "translateY(100%)",
            opacity: index === 0 ? 1 : 0,
            transitionDelay: index === 0 ? "0.3s" : "0.3s",
          }}
        >
          Darwinia Community DAO
        </h1>{" "}
        <h2
          style={{
            transform: index === 0 ? "translateY(0)" : "translateY(200%)",
            opacity: index === 0 ? 1 : 0,
            transitionDelay: index === 0 ? "0.4s" : "0.3s",
          }}
          className="text-black text-[1.5vw] font-medium text-center max-w-[39vw] duration-500"
        >
          DC DAO welcomes anyone striving to innovate in Web3
          <span className="text-[#FF0084] font-bold text-[2vw] leading-[10px]">
            .
          </span>
          <br />
          Join us now
          <span className="text-[#FF0084] font-bold text-[2vw] leading-[10px]">
            .
          </span>
        </h2>
        {/* <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div> */}
        <button
          style={{
            transform: index === 0 ? "translateY(0)" : "translateY(200%)",
            opacity: index === 0 ? 1 : 0,
            transitionDelay: index === 0 ? "0.5s" : "0.3s",
          }}
          className="w-[9vw] h-[3vw] text-[1.2vw] font-bold border-[5px] border-solid border-black hover:border-[#FF0084] hover:bg-[#FF0084] hover:text-white duration-300"
        >
          Join Us
        </button>
        <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div>
      </div>
      {/* <div className="w-full h-[100vh] flex-shrink-0 p-[3vw] pt-[6vw] flex flex-col justify-center items-center gap-[2vw]"></div> */}
      <div className="w-full h-[100vh] flex-shrink-0 p-[3vw] flex items-center flex-col justify-center gap-[2vw]">
        <div className="flex flex-col items-center">
          <h2
            style={{
              transform: index === 1 ? "translateY(0)" : "translateY(200%)",
              opacity: index === 1 ? 1 : 0,
              transitionDelay: index === 1 ? "0.3s" : "0.3s",
            }}
            className="text-[1.6vw] text-black font-bold duration-500"
          >
            Contact Us{" "}
            <span className="text-[#FF0084] font-bold text-[2vw] leading-[10px]">
              :
            </span>
          </h2>
          <h3
            style={{
              transform: index === 1 ? "translateY(0)" : "translateY(200%)",
              opacity: index === 1 ? 1 : 0,
              transitionDelay: index === 1 ? "0.4s" : "0.3s",
            }}
            className="text-[1.2vw] text-black font-medium duration-500"
          >
            Be a part of our community by following us.
          </h3>
        </div>
        <div
          style={{
            transform: index === 1 ? "translateY(0)" : "translateY(200%)",
            opacity: index === 1 ? 1 : 0,
            transitionDelay: index === 1 ? "0.5s" : "0.3s",
          }}
          className="flex items-center justify-center gap-[2vw] duration-500"
        >
          <a href="https://twitter.com/DarwiniaNetwork" target="_blank">
            <img
              src="/icons/X.svg"
              alt="X"
              className="w-[4vw] h-[4vw] rounded-full shadow-[0_0_20px_0_rgba(0,0,0,0.4)] hover:scale-[1.1] duration-500"
            />
          </a>
          <a href="https://t.me/DarwiniaNetwork" target="_blank">
            <img
              src="/icons/Telegram.svg"
              alt="Telegram"
              className="w-[4vw] h-[4vw] rounded-full shadow-[0_0_20px_0_rgba(0,0,0,0.4)] hover:scale-[1.1] duration-500"
            />
          </a>
          <a href="https://github.com/darwinia-network" target="_blank">
            <img
              src="/icons/Github.svg"
              alt="Github"
              className="w-[4vw] h-[4vw] rounded-full shadow-[0_0_20px_0_rgba(0,0,0,0.4)] hover:scale-[1.1] duration-500"
            />
          </a>
        </div>
        <div className="w-[40vw] h-[2px] bg-[rgba(0,0,0,0.4)]"></div>
        <h3
          style={{
            transform: index === 1 ? "translateY(0)" : "translateY(200%)",
            opacity: index === 1 ? 1 : 0,
            transitionDelay: index === 1 ? "0.6s" : "0.3s",
          }}
          className="text-[1vw] text-black font-medium duration-500"
        >
          Funded by{" "}
          <a href="https://darwinia.network/" className="text-[#FF0084]">
            Darwinia.Network
          </a>
        </h3>
      </div>
    </div>
  );
}
