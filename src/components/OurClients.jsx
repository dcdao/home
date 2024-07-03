import { useRef } from "react";
import { useIsVisible } from "../hook/useIsVisible";
import { useSpring, animated } from "react-spring";

const OurClients = () => {
  const componentRef = useRef();
  const isVisible = useIsVisible(componentRef);

  const animations = [
    {
      type: "div",
      styles: {
        top: isVisible ? "-70%" : "50%",
        left: isVisible ? "5%" : "50%",
        config: { duration: 700 },
      },
      className:
        "lg:w-[26vw] lg:h-[150px] bg-black text-white lg:absolute p-[20px] rounded-[50px] lg:rotate-12 flex items-center hover:scale-[1.1] duration-300",
      text: "“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        top: isVisible ? "-70%" : "50%",
        left: isVisible ? "40%" : "50%",
        config: { duration: 700 },
      },
      src: "/images/NFT/NFT_5.png",
      className:
        "w-[150px] h-[150px] lg:absolute p-[20px] rounded-full lg:-rotate-12 hidden lg:block hover:scale-[1.1] duration-300",
    },
    {
      type: "div",
      styles: {
        top: isVisible ? "-70%" : "50%",
        right: isVisible ? "13%" : "50%",
        config: { duration: 700 },
      },
      className:
        "lg:w-[26vw] lg:h-[150px] bg-black text-white lg:absolute p-[20px] rounded-[50px] lg:-rotate-12 flex items-center hover:scale-[1.1] duration-300",
      text: "“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        top: isVisible ? "-10%" : "50%",
        left: isVisible ? "0" : "50%",
        config: { duration: 700 },
      },
      src: "/images/DCDAO.png",
      alt: "",
      className:
        "lg:absolute w-[9.76vw] h-[9.76vw] hidden lg:block lg:-rotate-12 hover:scale-[1.1] duration-300",
    },
    {
      type: "img",
      styles: {
        top: isVisible ? "-10%" : "50%",
        right: isVisible ? "0" : "50%",
        config: { duration: 700 },
      },
      src: "/images/DCDAO.png",
      alt: "",
      className:
        "lg:absolute w-[9.76vw] h-[9.76vw] hidden lg:block lg:rotate-12 hover:scale-[1.1] duration-300",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "-60%" : "50%",
        left: isVisible ? "0" : "50%",
        config: { duration: 700 },
      },
      className:
        "lg:w-[26vw] lg:h-[150px] bg-black text-white lg:absolute p-[20px] rounded-[50px] lg:rotate-12 flex items-center hover:scale-[1.1] duration-300",
      text: "“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        bottom: isVisible ? "-55%" : "50%",
        left: isVisible ? "35%" : "50%",
        config: { duration: 700 },
      },
      src: "/images/NFT/NFT_4.png",
      className:
        "w-[150px] h-[150px] lg:absolute p-[20px] rounded-full lg:-rotate-12 hidden lg:block hover:scale-[1.1] duration-300",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "-90%" : "50%",
        right: isVisible ? "20%" : "50%",
        config: { duration: 700 },
      },
      className:
        "lg:w-[26vw] lg:h-[150px] bg-black text-white lg:absolute p-[20px] rounded-[50px] lg:-rotate-12 flex items-center hover:scale-[1.1] duration-300",
      text: "T“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        bottom: isVisible ? "-80%" : "50%",
        right: isVisible ? "0" : "50%",
        config: { duration: 700 },
      },
      src: "/images/NFT/NFT_6.png",
      className:
        "w-[150px] h-[150px] lg:absolute p-[20px] rounded-full lg:-rotate-12 hidden lg:block hover:scale-[1.1] duration-300",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "0" : "50%",
        right: isVisible ? "0" : "50%",
        config: { duration: 700 },
      },
      className:
        "lg:w-[21vw] lg:h-[150px] bg-black text-white lg:absolute p-[20px] rounded-[50px] lg:rotate-12 flex items-center hover:scale-[1.1] duration-300",
      text: "“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
  ];

  const animatedElements = animations.map((animation, index) => {
    if (animation.type === "div") {
      return (
        <animated.div
          key={index}
          style={useSpring(animation.styles)}
          className={animation.className}
        >
          {animation.text && <h3>{animation.text}</h3>}
        </animated.div>
      );
    } else if (animation.type === "img") {
      return (
        <animated.img
          key={index}
          style={useSpring(animation.styles)}
          src={animation.src}
          alt={animation.alt}
          className={animation.className}
        />
      );
    }
    return null;
  });

  return (
    <div
      className="flex items-center justify-center mt-[32%] lg:mb-[600px] flex-col relative transition-all delay-75 gap-[30px]"
      ref={componentRef}
    >
      {animatedElements}
      <h2 className="text-[30px] lg:text-[90px] text-center lg:w-[938px] font-[600] lg:leading-[120px]">
        Our Clients Can’t Say Enough About Us.
      </h2>
      <a className="bg-[#FB3B94] block text-white text-[24px] w-[20vw] h-[60px] leading-[60px] rounded-[30px] text-center cursor-pointer animate-loop-shake">
        Darwinia Community
      </a>
    </div>
  );
};

export default OurClients;
