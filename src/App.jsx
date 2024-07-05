import LeftPart from "./components/leftPart";
import { Lethargy } from "lethargy";
import { useWheel } from "@use-gesture/react";
import { useState } from "react";
import Header from "./components/header";
import MobileContent from "./components/mobileContent";

function App() {
  const lethargy = new Lethargy();
  const [index, setIndex] = useState(0);

  const handleNextPart = () => {
    if (index < 1) {
      setIndex(index + 1);
    }
  };

  const handlePrevPart = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    event.stopPropagation();
    if (window.innerWidth > 1024) {
      if (!last) {
        const s = lethargy.check(event);
        if (s) {
          if (!wait) {
            if (s < 0) {
              handleNextPart();
            } else if (s > 0) {
              handlePrevPart();
            }
            return true;
          }
        } else return false;
      } else {
        return false;
      }
    }
  });

  return (
    <div
      className="lg:w-[100vw] lg:h-[100vh] flex items-center justify-center relative"
      {...bind()}
    >
      <div className="flex flex-col lg:flex-row flex-shrink-0 w-[100vw] h-[100vh] bg-[#171717] items-center justify-start relative overflow-hidden lg:pl-[12vw]">
        <img
          className="hidden lg:block w-[10vw] h-[10vw] object-contain"
          src="/images/DCDAO.png"
          alt="Logo"
        />
        {/* <div className="w-[2px] h-[60vh] bg-[#FF0084] ml-[5vw]"></div> */}
        <img
          src="/images/NFT/NFT_1.png"
          className="w-[80vw] h-[80vw] lg:w-[35vw] lg:h-[35vw] object-cover absolute right-0 left-0 bottom-[-40vw] lg:top-0 lg:bottom-0 m-auto animate-loop-rotate rounded-full"
          alt="dcdao nft"
        />
        <img
          src="/images/1000bg1.png"
          className="w-[40vw] h-[40vw] object-cover absolute left-[-20vw] top-0"
          alt="dcdao nft"
        />
        <a
          href="https://darwinia.network/"
          className="hidden lg:block w-[10vw] h-[4vw] text-center cursor-pointer border-[#FF0084] text-[#ff0084] border-solid border-[4px] absolute rotate-[-90deg] left-[2vw] text-[2vw] hover:bg-white hover:border-white hover:text-black duration-300"
        >
          Darwinia
        </a>
        {window.innerWidth < 1024 && (
          <>
            <Header />
            <MobileContent />
          </>
        )}
      </div>
      <div className="hidden lg:flex flex-shrink-0 w-[100vw] lg:w-[50vw] lg:h-[100vh] overflow-y-hidden lg:shadow-[0_0_25px_0_rgba(255,255,255,0.7)] absolute right-0 z-5 ">
        <Header setIndex={setIndex} />
        <LeftPart index={index} />
        <div className="flex items-center justify-center absolute bottom-0 right-0 left-0 m-auto w-[50vw] h-[6vw] gap-[3vw] z-20 bg-[rgba(255,255,255,0.98)]">
          <div
            className="w-[5.55vw] h-[2vw] bg-center absolute bottom-[4vh] right-0 left-0 m-auto cursor-pointer duration-300 origin-center animate-loop-shake"
            onClick={index === 2 ? handlePrevPart : handleNextPart}
            style={{ transform: index === 2 ? "scaleY(-1)" : "" }}
          >
            <span className="block w-[3vw] h-[3px] bg-black absolute right-0 top-0 bottom-0 m-auto rotate-[-30deg]" />
            <span className="block w-[3vw] h-[3px] bg-black absolute left-0 top-0 bottom-0 m-auto rotate-[30deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
