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
        "w-[26vw] h-[150px] bg-black text-white absolute p-[20px] rounded-[50px] rotate-12 flex items-center",
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
        "w-[150px] h-[150px] absolute p-[20px] rounded-[50px] -rotate-12",
    },
    {
      type: "div",
      styles: {
        top: isVisible ? "-70%" : "50%",
        right: isVisible ? "13%" : "50%",
        config: { duration: 700 },
      },
      className:
        "w-[26vw] h-[150px] bg-black text-white absolute p-[20px] rounded-[50px] -rotate-12 flex items-center",
      text: "“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        top: isVisible ? "-10%" : "50%",
        left: isVisible ? "0" : "50%",
        transform: isVisible ? "rotate(-45deg)" : "none",
        config: { duration: 700 },
      },
      src: "/images/DCDAO.png",
      alt: "",
      className: "absolute w-[9.76vw] h-[9.76vw]",
    },
    {
      type: "img",
      styles: {
        top: isVisible ? "-10%" : "50%",
        right: isVisible ? "0" : "50%",
        transform: isVisible ? "rotate(45deg)" : "none",
        config: { duration: 700 },
      },
      src: "/images/DCDAO.png",
      alt: "",
      className: "absolute w-[9.76vw] h-[9.76vw]",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "-60%" : "50%",
        left: isVisible ? "0" : "50%",
        config: { duration: 700 },
      },
      className:
        "w-[26vw] h-[150px] bg-black text-white absolute p-[20px] rounded-[50px] rotate-12 flex items-center",
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
        "w-[150px] h-[150px] absolute p-[20px] rounded-[50px] -rotate-12",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "-90%" : "50%",
        right: isVisible ? "20%" : "50%",
        config: { duration: 700 },
      },
      className:
        "w-[26vw] h-[150px] bg-black text-white absolute p-[20px] rounded-[50px] -rotate-12 flex items-center",
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
        "w-[150px] h-[150px] absolute p-[20px] rounded-[50px] -rotate-12",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "0" : "50%",
        right: isVisible ? "0" : "50%",
        config: { duration: 700 },
      },
      className:
        "w-[21vw] h-[150px] bg-black text-white absolute p-[20px] rounded-[50px] rotate-12 flex items-center",
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
      className="flex items-center justify-center mt-[50%] mb-[600px] flex-col relative transition-all delay-75"
      ref={componentRef}
    >
      {animatedElements}
      <h2 className="text-[90px] text-center w-[938px] font-[600] leading-[120px]">
        Our Clients Can’t Say Enough About Us.
      </h2>
      <p className="mt-[30px] text-[30px] w-[512px] text-center font-[500]">
        Take a look for yourself. No Slack messages were harmed in the making of
        this component.
      </p>
    </div>
  );
};

export default OurClients;
