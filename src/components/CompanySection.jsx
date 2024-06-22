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
    <div className="flex items-center justify-between my-[100px] gap-[200px]">
      <div>
        <div className="flex items-center gap-[10px] ">
          <span>icon</span>
          <span>HQ: 7:36 AM EST</span>
          <span>Servicing Earth</span>
        </div>
        <p className="mt-[50px] text-[20px]">
          Turn bold ideas into impactful brand experiences with the handiwork
          and help of our collective bunch.
        </p>
      </div>
      <div className="text-[40px] relative">
        Your company is ready for big moves and we are here for it.
        <img
          src="/images/star.png"
          className="absolute text-[0] top-[0] left-[-50px] transition-all delay-75 w-[30px] h-[30px]"
          style={{ transform: `rotateZ(${rotation}deg)` }}
        />
      </div>
    </div>
  );
};

export default CompanySection;
