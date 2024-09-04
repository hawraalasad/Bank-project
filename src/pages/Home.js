import React from "react";
import image from "../assets/media/Untitled design (11).png";

const Home = () => {
  //console.log(user);
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-3xl flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold mb-8">Welcome to Gringotts </h1>
        <img src={image} alt="image" />
        <p className="text-2xl leading-relaxed text-left"></p>
      </div>
    </div>
  );
};

export default Home;
