import LeftPart from "./components/leftPart";
import { Lethargy } from "lethargy";
import { useWheel } from "@use-gesture/react";
import { useState } from "react";
import Header from "./components/header";

function App() {
  const lethargy = new Lethargy();
  const [index, setIndex] = useState(0);

  const handleNextPart = () => {
    if (index < 2) {
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
  });
  return (
    <div
      className="w-[100vw] h-[100vh] flex items-center justify-center"
      {...bind()}
    >
      <div className="flex flex-shrink-0 w-[50vw] h-[100vh] bg-[#171717] items-center justify-start relative overflow-hidden pl-[10vw]">
        <img
          className="w-[10vw] h-[10vw] object-contain"
          src="/images/DCDAO.png"
          alt="Logo"
        />
        {/* <div className="w-[2px] h-[60vh] bg-[#FF0084] ml-[5vw]"></div> */}
        <img
          src="/images/NFT/NFT_1.png"
          className="w-[40vw] h-[40vw] object-cover absolute right-[-20vw] top-0 bottom-0 m-auto animate-loop-rotate rounded-full"
          alt="dcdao nft"
        />
        <img
          src="/images/1000bg1.png"
          className="w-[40vw] h-[40vw] object-cover absolute left-[-20vw] top-0"
          alt="dcdao nft"
        />
      </div>
      <div className="flex flex-shrink-0 w-[50vw] h-[100vh] bg-white overflow-hidden relative">
        <Header setIndex={setIndex} />
        <LeftPart index={index} />
      </div>
    </div>
  );
}

export default App;
