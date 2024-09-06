import React from "react";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40">
    <div className="animate-spin h-12 w-12 border-4 border-t-4 border-white border-solid rounded-full"></div>
  </div>
);

export default LoadingSpinner;
