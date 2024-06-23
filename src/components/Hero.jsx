import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <h1 className="text-[220px] font-[400]">
        A collective that builds, designs, and explores.
      </h1>
      <video
        src="/code.mp4"
        loop
        autoPlay
        muted
        className="absolute right-[-40px] top-[260px] w-[500px] h-[300px]"
      ></video>
    </div>
  );
};

export default Hero;
