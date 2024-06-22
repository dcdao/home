import React, { useState, useEffect } from "react";

const Friends = () => {
  const [topPosition1, setTopPosition1] = useState(0);
  const [topPosition2, setTopPosition2] = useState(-30);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Downscroll
        setTopPosition1((prevPosition) => prevPosition - 2);
        setTopPosition2((prevPosition) => prevPosition + 2);
      } else {
        // Upscroll
        setTopPosition1((prevPosition) => prevPosition + 2);
        setTopPosition2((prevPosition) => prevPosition - 2);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white rounded-[50px] min-h-[742px] px-[50px] flex items-center justify-between mt-[100px]">
      <div>
        <h2 className="text-[120px] font-[400]">Friends</h2>
        <h2 className="text-[120px] font-[400]">& Partners</h2>
      </div>
      <div className="bg-black w-[558px] h-[700px] rounded-[50px] relative overflow-hidden">
        <ul
          className="absolute -rotate-12 left-[60px]"
          style={{ top: `${topPosition1}px` }}
        >
          {Array.from({ length: 16 }, (_, i) => (
            <li key={i} className="text-white text-[40px] mb-[40px]">
              Hello World
            </li>
          ))}
        </ul>
        <ul
          className="absolute right-[0] -rotate-12"
          style={{ top: `${topPosition2}px` }}
        >
          {Array.from({ length: 16 }, (_, i) => (
            <li key={i} className="text-white text-[40px] mb-[40px]">
              Hello World
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
