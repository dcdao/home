// eslint-disable-next-line react/prop-types
export default function Header({ setIndex }) {
  return (
    <div className="flex items-center flex-shrink-0 justify-between px-[30px] lg:px-0 lg:justify-center lg:absolute top-0 right-0 left-0 lg:m-auto w-[100vw] lg:w-[50vw] h-[80px] lg:h-[6vw] gap-[30px] lg:gap-[3vw] z-20 bg-[#0A0A0A] shadow-[0_0_40px_20px_rgba(255,255,255,0.1)] lg:shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] lg:bg-[rgba(255,255,255,0.98)]">
      <img
        className="lg:hidden w-[60px] h-[60px] object-contain"
        src="/images/DCDAO.png"
        alt="Logo"
      />
      <p
        className="block text-[16px] lg:text-[1.2vw] font-bold text-white lg:text-black cursor-pointer lg:hover:text-[#ff0084] duration-300 after:block lg:after:content-[''] after:bg-[#FF0084] after:w-full after:h-[2px] after:scale-x-0 hover:after:scale-x-[1] after:duration-300"
        onClick={() => {
          setIndex(0);
        }}
      >
        Join
      </p>
      <p
        className="hidden lg:block text-[16px] lg:text-[1.2vw] font-bold text-white lg:text-black cursor-pointer lg:hover:text-[#ff0084] duration-300 after:block lg:after:content-[''] after:bg-[#FF0084] after:w-full after:h-[2px] after:scale-x-0 hover:after:scale-x-[1] after:duration-300"
        onClick={() => {
          setIndex(1);
        }}
      >
        Github
      </p>
      <p
        className="hidden lg:block text-[16px] lg:text-[1.2vw] font-bold text-white lg:text-black cursor-pointer lg:hover:text-[#ff0084] duration-300 after:block lg:after:content-[''] after:bg-[#FF0084] after:w-full after:h-[2px] after:scale-x-0 hover:after:scale-x-[1] after:duration-300"
        onClick={() => {
          setIndex(2);
        }}
      >
        Telegram
      </p>
    </div>
  );
}
