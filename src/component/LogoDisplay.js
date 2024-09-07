import React from "react";

const LogoDisplay = ({ logo, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40 flex-col transition-all ease-linear duration-100">
      <div className="flex ml-[450px]">
        <button
          onClick={onClose}
          className="bg-white rounded-full w-6 h-2 text-black p-6 flex items-center justify-center text-4xl"
        >
          x
        </button>
      </div>
      <img src={logo} className="w-[50%] " />
    </div>
  );
};

export default LogoDisplay;
