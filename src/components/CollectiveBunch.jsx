const CollectiveBunch = () => {
  return (
    <div className="flex items-center justify-between flex-col lg:flex-row px-[10px] lg:px-[100px] lg:py-[80px] text-white">
      <div className="lg:w-[716px]">
        <p className="text-[20px] lg:text-[40px] text-center lg:text-left">
          We’re Darwinia Community DAO. A Crypto based service with brilliant
          offers for making the CRYPTO experience fun deliverable.
        </p>
        <p className="text-[20px] lg:text-[40px] mt-[40px] text-center lg:text-left">
          Join Us and enjoy your Crypto journey
        </p>
      </div>
      <div className="flex items-center justify-center gap-[40px] my-[30px] sm:my-[40px] w-[40vw]">
        <a href="https://twitter.com/DarwiniaNetwork" target="_blank">
          <img src="/icons/X.svg" alt="X" className="sm:w-[80px] sm:h-[80px]" />
        </a>
        <a href="https://t.me/DarwiniaNetwork" target="_blank">
          <img
            src="/icons/Telegram.svg"
            alt="Telegram"
            className="sm:w-[80px] sm:h-[80px]"
          />
        </a>
        <a href="https://github.com/darwinia-network" target="_blank">
          <img
            src="/icons/Github.svg"
            alt="Github"
            className="sm:w-[80px] sm:h-[80px]"
          />
        </a>
      </div>
    </div>
  );
};

export default CollectiveBunch;
