import React from "react";

const LetsChat = () => {
  return (
    <div className="w-full min-h-[375px] flex items-center justify-between bg-[yellow] transition-all delay-75 cursor-pointer hover:bg-[#59f9ec] my-[100px] p-[50px] rounded-[50px] ">
      <div>
        <h2 className="text-[120px]">Lets Chat</h2>
        <p className="mt-[10px] text-[30px]">
          Want to grab a virtual coffee and talk about your project?
        </p>
      </div>
      <div className="w-[200px] h-[200px] rounded-full bg-white"></div>
    </div>
  );
};

export default LetsChat;
