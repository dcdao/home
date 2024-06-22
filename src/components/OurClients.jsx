import React, { useRef } from "react";
import { useIsVisible } from "../hook/useIsVisible";
import { useSpring, animated } from "react-spring";

const OurClients = () => {
  const componentRef = useRef();
  const isVisible = useIsVisible(componentRef);

  const animations = [
    {
      type: "div",
      styles: {
        top: isVisible ? "-300px" : "400px",
        left: isVisible ? "0" : "400px",
        config: { duration: 700 },
      },
      className:
        "w-[500px] h-[150px] bg-white absolute p-[20px] rounded-[50px] rotate-12",
      text: "“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        top: isVisible ? "-300px" : "400px",
        left: isVisible ? "600px" : "400px",
        config: { duration: 700 },
      },
      src: "/images/NFT/NFT_5.png",
      className:
        "w-[150px] h-[150px] absolute p-[20px] rounded-[50px] -rotate-12",
    },
    {
      type: "div",
      styles: {
        top: isVisible ? "-300px" : "400px",
        right: isVisible ? "30px" : "400px",
        config: { duration: 700 },
      },
      className:
        "w-[500px] h-[150px] bg-white absolute p-[20px] rounded-[50px] -rotate-12",
      text: "“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        top: isVisible ? "-50px" : "400px",
        left: isVisible ? "0" : "400px",
        transform: isVisible ? "rotate(-45deg)" : "none",
        config: { duration: 700 },
      },
      src: "/images/DCDAO.png",
      alt: "",
      className: "absolute w-[150px] h-[150px]",
    },
    {
      type: "img",
      styles: {
        top: isVisible ? "-50px" : "400px",
        right: isVisible ? "0" : "400px",
        transform: isVisible ? "rotate(45deg)" : "none",
        config: { duration: 700 },
      },
      src: "/images/DCDAO.png",
      alt: "",
      className: "absolute w-[150px] h-[150px]",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "-300px" : "400px",
        left: isVisible ? "0" : "400px",
        config: { duration: 700 },
      },
      className:
        "w-[500px] h-[150px] bg-white absolute p-[20px] rounded-[50px] rotate-12",
      text: "“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        bottom: isVisible ? "-250px" : "400px",
        left: isVisible ? "650px" : "400px",
        config: { duration: 700 },
      },
      src: "/images/NFT/NFT_4.png",
      className:
        "w-[150px] h-[150px] absolute p-[20px] rounded-[50px] -rotate-12",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "-450px" : "400px",
        right: isVisible ? "150px" : "400px",
        config: { duration: 700 },
      },
      className:
        "w-[500px] h-[150px] bg-white absolute bottom-[-450px] right-[150px] p-[20px] rounded-[50px] -rotate-12",
      text: "T“In the top 1% of companies I've ever worked with when it comes to people caring about my project.”",
    },
    {
      type: "img",
      styles: {
        bottom: isVisible ? "-250px" : "400px",
        right: isVisible ? "0" : "400px",
        config: { duration: 700 },
      },
      src: "/images/NFT/NFT_6.png",
      className:
        "w-[150px] h-[150px] absolute p-[20px] rounded-[50px] -rotate-12",
    },
    {
      type: "div",
      styles: {
        bottom: isVisible ? "0" : "400px",
        right: isVisible ? "0" : "400px",
        config: { duration: 700 },
      },
      className:
        "w-[300px] h-[150px] bg-white absolute p-[20px] rounded-[50px] rotate-12",
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
      className="flex items-center justify-center my-[600px] flex-col relative transition-all delay-75"
      ref={componentRef}
    >
      {animatedElements}
      <h2 className="text-[90px] text-center w-[938px]">
        Our Clients Can’t Say Enough About Us.
      </h2>
      <p className="mt-[30px] text-[30px] w-[512px] text-center">
        Take a look for yourself. No Slack messages were harmed in the making of
        this component.
      </p>
    </div>
  );
};

export default OurClients;
