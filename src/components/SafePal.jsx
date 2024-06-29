import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const SafePal = () => {
  const images = [
    { src: "/images/NFT/NFT_1.png", alt: "NFT 1" },
    { src: "/images/NFT/NFT_2.png", alt: "NFT 2" },
    { src: "/images/NFT/NFT_3.png", alt: "NFT 3" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const newIndex = Math.floor(scrollTop / windowHeight / 0.3);
    setActiveIndex(newIndex % 3);
  };

  console.log(activeIndex);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black rounded-[20px] lg:rounded-[50px] sm:min-h-[742px] sm:px-[20px] lg:px-[50px] py-[20px] flex flex-col items-center sm:items-start">
      <h2 className="text-white text-[30px] lg:text-[120px] font-bold flex-shrink-0">
        SafePal
      </h2>
      <p className="text-white text-[16px] lg:text-[30px] font-[600] flex-shrink-0">
        Making your crypto experience safe and fun.
      </p>
      <div className="relative flex flex-col items-center justify-center flex-grow w-full">
        {/* <button
          onClick={handlePrev}
          className="absolute left-0 hidden p-2 bg-white rounded-full lg:p-4 lg:block"
        >
          {"<"}
        </button> */}
        <div
          ref={carouselRef}
          className="flex flex-col items-center justify-center flex-grow w-full overflow-hidden sm:flex-row"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="sm:p-[10px] lg:p-[30px] flex-shrink-0 w-[calc(100vw-20px)] flex flex-col items-center justify-center sm:w-full sm:max-w-[30vw]"
            >
              <animated.img
                style={useSpring({
                  width: index === activeIndex ? "90%" : "60%",
                })}
                src={image.src}
                alt={image.alt}
                className={`h-[300px] lg:h-[500px] object-contain cursor-pointer`}
                onClick={() => handleImageClick(index)}
              />

              <div
                className="flex flex-col items-center justify-center mt-4 duration-200 lg:flex-row"
                style={{ opacity: index === activeIndex ? 1 : 0 }}
              >
                {/* <div className="flex items-center gap-[5px] lg:gap-[10px] justify-center flex-shrink-0">
                    <button className="bg-[#FB3B94] text-[#fff] rounded-[15px] lg:rounded-[30px] px-[10px] lg:px-[15px] py-[5px] lg:py-[8px] font-[500] hover:scale-[1.1] duration-300 hidden lg:block">
                      Test
                    </button>
                    <button className="bg-[#FB3B94] text-[#fff] rounded-[15px] lg:rounded-[30px] px-[10px] lg:px-[15px] py-[5px] lg:py-[8px] font-[500] hover:scale-[1.1] duration-300 hidden lg:block">
                      Test
                    </button>
                  </div> */}
                <button className="bg-[white] rounded-[15px] lg:rounded-[30px] px-[20px] lg:px-[40px] py-[5px] lg:py-[8px] font-[500] hover:scale-[1.1] duration-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <button
          onClick={handleNext}
          className="absolute right-0 hidden p-2 bg-white rounded-full lg:p-4 lg:block"
        >
          {">"}
        </button> */}
      </div>
    </div>
  );
};

export default SafePal;
