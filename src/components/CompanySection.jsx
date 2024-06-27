import React, { useEffect, useState } from "react";

const CompanySection = () => {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Downscroll
        setRotation((prevRotation) => prevRotation + 10);
      } else {
        // Upscroll
        setRotation((prevRotation) => prevRotation - 10);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center justify-center lg:justify-between flex-col lg:flex-row my-[100px] gap-[40px] lg:gap-[200px]">
      <div className="text-[40px] font-[500] relative text-center lg:text-left flex items-center justify-center lg:block flex-col gap-[20px] lg:gap-0">
        Mint, keep, share and transfer your favorite NFTs with our new community
        <img
          src="/images/NFT/NFT_1.png"
          className="lg:absolute lg:text-[0] lg:top-[0] bottom-0 lg:my-auto lg:right-[-40%] transition-all w-[150px] h-[150px] rounded-[50%]"
          style={{ transform: `rotateZ(${rotation}deg)` }}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[40vw] flex-shrink-0 gap-[10px] ">
        <button className="w-[240px] h-[40px] rounded-[20px] text-[#FB3B94] bg-[#fff] font-[600] hover:scale-[1.05] duration-300">
          More
        </button>

        <button className="w-[240px] h-[40px] rounded-[20px] text-[#fff] bg-[#FB3B94] font-[600] hover:scale-[1.05] duration-300">
          Join
        </button>
      </div>
    </div>
  );
};

export default CompanySection;
