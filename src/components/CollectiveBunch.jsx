import React from "react";

const CollectiveBunch = () => {
  return (
    <div className="flex items-center justify-between px-[100px] text-white">
      <div className="w-[716px]">
        <p className="text-[40px]">
          We’re Darwinia Community DAO. A Crypto based service with brilliant
          offers for making the CRYPTO experience fun deliverable.
        </p>
        <p className="text-[40px] mt-[40px]">
          Join Us and enjoy your Crypto journey
        </p>
        <button className="bg-white text-black text-[28px] font-[500] w-[240px] h-[60px] rounded-[30px] mt-[20px] hover:scale-[1.05] duration-300">
          Join
        </button>
      </div>
      <ul>
        <li className="text-[20px]">Dribbble</li>
        <li className="text-[20px]">Instagram</li>
        <li className="text-[20px]">X</li>
        <li className="text-[20px]">Facebook</li>
        <li className="text-[20px]">LinkedIn</li>
        <li className="mt-[40px] text-[20px]">Work</li>
        <li className="mb-[40px] text-[20px]">About</li>
        <li className="text-[20px] w-[233px]">
          Unfold HQ 5920 Pan American Blvd Suite 205, North Port, Florida, 34287
        </li>
      </ul>
    </div>
  );
};

export default CollectiveBunch;
