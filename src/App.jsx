import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

const App = () => {
  return (
    <div className="bg-gray-900 text-white max-h-screen h-screen flex overflow-hidden">
      <div className="w-4/12 p-8">
        <LeftSide />
      </div>
      <div className="w-8/12 p-8">
        <RightSide />
      </div>
    </div>
  );
};

export default App;
