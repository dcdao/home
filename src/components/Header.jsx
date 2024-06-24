const Header = () => {
  return (
    <header className="flex items-center justify-between py-[30px] relative">
      {/* <h1 className="text-[20px] font-[700]">unfold</h1> */}
      <a href="/">
        <img src="/images/DCDAO.png" alt="" className="w-[100px] h-[100px]" />
      </a>
      <div className="w-[196px] h-[196px] bg-[yellow] rounded-full pt-[130px] text-[20px] text-center cursor-pointer hover:bg-[#64fcfc] absolute top-[-100px] right-[50px] transition-all delay-75">
        LETS CHART
      </div>
    </header>
  );
};

export default Header;
