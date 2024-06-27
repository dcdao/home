import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const SafePal = () => {
  const images = [
    { src: "/images/NFT/NFT_1.png", alt: "NFT 1" },
    { src: "/images/NFT/NFT_2.png", alt: "NFT 2" },
    { src: "/images/NFT/NFT_3.png", alt: "NFT 3" },
    { src: "/images/NFT/NFT_4.png", alt: "NFT 4" },
    { src: "/images/NFT/NFT_5.png", alt: "NFT 5" },
    { src: "/images/NFT/NFT_6.png", alt: "NFT 6" },
    { src: "/images/NFT/NFT_7.png", alt: "NFT 7" },
    { src: "/images/NFT/NFT_8.png", alt: "NFT 8" },
    { src: "/images/NFT/NFT_9.png", alt: "NFT 9" },
    { src: "/images/NFT/NFT_10.png", alt: "NFT 10" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    scrollToIndex(index);
  };

  const scrollToIndex = (index) => {
    const scrollLeft = index * 340; // Adjust based on your image width and padding
    carouselRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const newIndex = Math.round((scrollTop + windowHeight / 2) / windowHeight);
    setActiveIndex(newIndex % images.length);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="bg-black rounded-[20px] lg:rounded-[50px] min-h-[742px] px-[20px] lg:px-[50px] py-[20px]">
      <h2 className="text-white text-[40px] lg:text-[120px] font-bold">
        SafePal
      </h2>
      <p className="text-white text-[20px] lg:text-[30px] font-[600]">
        Making your crypto experience safe and fun.
      </p>
      <div className="relative flex items-center justify-center w-full">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-white rounded-full p-2 lg:p-4 hidden lg:block"
        >
          {"<"}
        </button>
        <div
          ref={carouselRef}
          className="flex items-center justify-start w-full overflow-x-scroll custom-scrollbar"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="p-[10px] lg:p-[30px] flex-shrink-0"
              style={{ width: "100%", maxWidth: "340px" }} // Adjust based on your image width and padding
            >
              <animated.img
                style={useSpring({
                  width: index === activeIndex ? "90%" : "80%",
                  maxWidth: index === activeIndex ? "400px" : "300px",
                })}
                src={image.src}
                alt={image.alt}
                className={`h-[300px] lg:h-[500px] object-contain cursor-pointer`}
                onClick={() => handleImageClick(index)}
              />
              {index === activeIndex && (
                <div className="flex items-center justify-between mt-4 flex-col lg:flex-row">
                  <div className="flex items-center gap-[5px] lg:gap-[10px] justify-center">
                    <button className="bg-[#FB3B94] text-[#fff] rounded-[15px] lg:rounded-[30px] px-[10px] lg:px-[15px] py-[5px] lg:py-[8px] font-[500] hover:scale-[1.1] duration-300 hidden lg:block">
                      Test
                    </button>
                    <button className="bg-[#FB3B94] text-[#fff] rounded-[15px] lg:rounded-[30px] px-[10px] lg:px-[15px] py-[5px] lg:py-[8px] font-[500] hover:scale-[1.1] duration-300 hidden lg:block">
                      Test
                    </button>
                  </div>
                  <button className="bg-[white] rounded-[15px] lg:rounded-[30px] px-[20px] lg:px-[40px] py-[5px] lg:py-[8px] font-[500] hover:scale-[1.1] duration-300">
                    View
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 bg-white rounded-full p-2 lg:p-4 hidden lg:block"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default SafePal;
