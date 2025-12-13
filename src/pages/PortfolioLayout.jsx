import React from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const PortfolioLayout = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-4/12 p-8 overflow-auto md:max-h-screen">
        <LeftSide />
      </div>
      <div className="w-full md:w-8/12 p-8 overflow-auto md:max-h-screen">
        <RightSide />
      </div>
    </div>
  );
};

export default PortfolioLayout;
