import { useState, useRef, useEffect } from "react";

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

  const carouselRef = useRef(null);

  // const handleImageClick = (index) => {
  //   setActiveIndex(index);
  // };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    carouselRef.current.scrollLeft =
      scrollTop % carouselRef.current.offsetWidth;
  };

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
        <div
          ref={carouselRef}
          className="flex flex-col items-center justify-center flex-grow w-full overflow-x-auto sm:flex-row no-scrollBar"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="sm:p-[10px] lg:p-[30px] flex-shrink-0 w-[calc(100vw-20px)] flex flex-col items-center justify-center sm:w-full sm:max-w-[30vw]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`h-[300px] lg:h-[28vw] object-contain cursor-pointer`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafePal;
