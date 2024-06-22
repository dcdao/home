import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const SafePal = () => {
  const images = [
    { src: "/images/NFT/NFT_1.png", alt: "NFT 1" },
    { src: "/images/NFT/NFT_2.png", alt: "NFT 2" },
    { src: "/images/NFT/NFT_3.png", alt: "NFT 3" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-black rounded-[50px] min-h-[742px] px-[50px]">
      <h2 className="text-white text-[120px]">SafePal</h2>
      <p className="text-white text-[30px] mt-[30px]">
        Making your crypto experience safe and fun.
      </p>
      <div className="flex items-center w-full">
        {images.map((image, index) => (
          <div key={index} className="p-[30px] ">
            <animated.img
              style={useSpring({
                width: index === activeIndex ? "600px" : "300px",
              })}
              src={image.src}
              alt={image.alt}
              className={`h-[500px] object-contain cursor-pointer`}
              onClick={() => handleImageClick(index)}
            />
            {index === activeIndex && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px] justify-center">
                  <button className="bg-[gray] rounded-[30px] px-[15px] py-[8px]">
                    Test
                  </button>
                  <button className="bg-[gray] rounded-[30px] px-[15px] py-[8px]">
                    Test
                  </button>
                  <button className="bg-[gray] rounded-[30px] px-[15px] py-[8px]">
                    Test
                  </button>
                </div>
                <button className="bg-[white] rounded-[30px] px-[40px] py-[8px]">
                  View
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafePal;
