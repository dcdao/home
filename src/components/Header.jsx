const Header = () => {
  return (
    <header className="flex items-center justify-between py-[30px] relative">
      {/* <h1 className="text-[20px] font-[700]">unfold</h1> */}
      <a href="/">
        <img src="/images/DCDAO.png" alt="" className="w-[100px] h-[100px]" />
      </a>
      <div className="w-[140px] h-[140px] lg:w-[196px] lg:h-[196px] bg-[#FB3B94] rounded-full pt-[40px] lg:pt-[110px] text-[40px] text-white font-bold text-center cursor-pointer hover:bg-[#000] lg:absolute top-[-100px] right-[50px] transition-all delay-75">
        Join
      </div>
    </header>
  );
};

export default Header;
