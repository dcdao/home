const CollectiveBunch = () => {
  return (
    <div className="flex items-center justify-between flex-col lg:flex-row px-[10px] lg:px-[100px] text-white">
      <div className="lg:w-[716px]">
        <p className="text-[20px] lg:text-[40px] text-center lg:text-left">
          We’re Darwinia Community DAO. A Crypto based service with brilliant
          offers for making the CRYPTO experience fun deliverable.
        </p>
        <p className="text-[20px] lg:text-[40px] mt-[40px] text-center lg:text-left">
          Join Us and enjoy your Crypto journey
        </p>
        <button className="bg-white text-black text-[16px] my-[50px] lg:my-0 w-full lg:text-[28px] font-[500] lg:w-[240px] h-[40px] lg:h-[60px] rounded-[30px] mt-[20px] hover:scale-[1.05] duration-300">
          Join
        </button>
      </div>
      <ul className="flex flex-col items-center justify-center gap-[20px] lg:block">
        <li className="text-[20px]">Dribbble</li>
        <li className="text-[20px]">Instagram</li>
        <li className="text-[20px]">X</li>
        <li className="text-[20px]">Facebook</li>
        <li className="text-[20px]">LinkedIn</li>
        <li className="mt-[40px] text-[20px]">Work</li>
        <li className="mb-[40px] text-[20px]">About</li>
        <li className="text-[20px] lg:w-[233px] text-center lg:text-left">
          Unfold HQ 5920 Pan American Blvd Suite 205, North Port, Florida, 34287
        </li>
      </ul>
    </div>
  );
};

export default CollectiveBunch;
