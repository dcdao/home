import React from "react";

const CompanySection = () => {
  return (
    <div className="flex items-center justify-between my-[100px] gap-[200px]">
      <div>
        <div className="flex items-center gap-[10px] ">
          <span>icon</span>
          <span>HQ: 7:36 AM EST</span>
          <span>Servicing Earth</span>
        </div>
        <p className="mt-[50px] text-[20px]">
          Turn bold ideas into impactful brand experiences with the handiwork
          and help of our collective bunch.
        </p>
      </div>
      <div className="text-[40px]">
        Your company is ready for big moves and we are here for it.
      </div>
    </div>
  );
};

export default CompanySection;
