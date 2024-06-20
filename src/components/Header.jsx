import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-[30px] relative">
      {/* <h1 className="text-[20px] font-[700]">unfold</h1> */}
      <img src="/images/DCDAO.png" alt="" className="w-[100px] h-[100px]" />
      <div className="w-[196px] h-[120px] bg-[yellow] rounded-b-[50%] flex items-center justify-center cursor-pointer hover:bg-[green] absolute top-0 right-[50px]">
        LETS CHART
      </div>
    </header>
  );
};

export default Header;
