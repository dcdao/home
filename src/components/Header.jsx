const Header = () => {
  return (
    <header className="flex items-center justify-between py-[30px] relative">
      {/* <h1 className="text-[20px] font-[700]">unfold</h1> */}
      <a href="/">
        <img src="/images/DCDAO.png" alt="" className="w-[100px] h-[100px]" />
      </a>
      <div className="flex items-end justify-center w-[140px] h-[140px] lg:w-[196px] lg:h-[300px] bg-[#FB3B94] rounded-[98px] pb-[30px] text-[40px] text-white font-bold text-center cursor-pointer hover:bg-[#000] hover:translate-y-[50px] lg:absolute top-[-200px] right-[50px] transition-all duration-300">
        <p>Join</p>
      </div>
    </header>
  );
};

export default Header;
