import React from "react";
import "../App.css";
import "../css/hp.css";
import sorting from "../assets/media/SortingHat.png";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black bg-opacity-97 flex items-center justify-center z-40">
    <img
      className=" animate-pulse h-[450px]  "
      viewBox="0 0 24 24"
      src={sorting}
    ></img>
  </div>
);

export default LoadingSpinner;
