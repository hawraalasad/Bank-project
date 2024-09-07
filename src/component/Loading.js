import React from "react";
import "../App.css";
import "../css/hp.css";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40">
    <svg className="animate-spin h-12 w-12 border-4 border-t-4 border-white border-solid rounded-full"></svg>
  </div>
);

export default LoadingSpinner;
