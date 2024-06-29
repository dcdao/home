import React from "react";

const Subscription = () => {
  return (
    <div className="bg-white rounded-[50px] min-h-[742px] px-[50px] flex items-center justify-between flex-col lg:flex-row">
      <div>
        <img src="/images/DCDAO.png" alt="" className="lg:w-[300px] " />
        <h4 className="text-[80px] mt-[10px]">Lorem ipsum </h4>
        <h4 className="text-[80px] mt-[10px]"> dolor sit.</h4>
      </div>
      <div className="flex items-end justify-between gap-[70px]">
        <ul>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
        </ul>
        <ul>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
        </ul>
        <ul>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
          <li className="text-[30px]">hello world</li>
        </ul>
      </div>
    </div>
  );
};

export default Subscription;
