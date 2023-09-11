import React from "react";

const Loading = () => {
  return (
    <div className="setoverlay w-[100vw] h-[100vh] fixed top-0 left-0 right-0 flex justify-center items-center">
     <div className="custom-loader"></div>
    </div>
  );
};

export default Loading;
