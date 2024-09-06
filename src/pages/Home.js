import React from "react";
import image from "../assets/media/Untitled design (11).png";

const Home = () => {
  //console.log(user);
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center hp-font">
      <div className="max-w-3xl flex justify-center items-center flex-col">
        <h1 className="text-9xl font-bold mb-8">Welcome to </h1>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Home;
