import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { getAllUsers } from "../api/auth";
import User from "./Users";
import "../App.css";
import { useQuery } from "@tanstack/react-query";
import { me } from "../api/auth";
import sortingHat from "../assets/media/SortingHat.png";
import gl from "../assets/media/GryffindorLogo.png";
import gs from "../assets/mp3/Gryffindor.mp3";
import sl from "../assets/media/SlytherinLogo.png";
import ss from "../assets/mp3/Slytherin.mp3";
import hl from "../assets/media/HufflePuffLogo.png";
import hs from "../assets/mp3/Hufflepuff.mp3";
import rl from "../assets/media/RavenclawLogo.png";
import rs from "../assets/mp3/Ravenclaw.mp3";
import LoadingSpinner from "../component/Loading";
import LogoDisplay from "../component/LogoDisplay";

const houses = [
  {
    name: "gryffindor",
    logo: gl,
    sound: gs,
  },
  {
    name: "slytherin",
    logo: sl,
    sound: ss,
  },
  {
    name: "hufflePuff",
    logo: hl,
    sound: hs,
  },
  {
    name: "ravenclaw",
    logo: rl,
    sound: rs,
  },
];

const Profile = () => {
  const { data: myself } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const sort = () => {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    setHouse(randomHouse);
    setLoading(true);
    setShowLogo(false);
    const audio = new Audio(randomHouse.sound);
    audio.play();
    audio.onended = () => {
      setLoading(false);
      setShowLogo(true);
    };
  };
  const onClose = () => {
    setShowLogo(false);
    setHouse(null);
  };
  return (
    <div
      className="bg-black text-white min-h-screen flex justify-center items-center h-[100vh] flex-col hp-font"
      key={myself?.id}
    >
      <div className="flex">
        <img src={sortingHat} alt="sorting hat" className="size-[120px] m-2" />
        <button
          className="bg-[#a79b8d] text-black m-7 w-[300px] h-[100px] rounded-[30px] hover:rounded-xl transition-all duration-100 ease-in-out text-4xl"
          onClick={() => sort()}
        >
          Try on the Sorting Hat
        </button>
      </div>
      <div className=" py-8 border-4 border-white rounded-2xl w-[60%] h-[70%] p-6">
        <div className=" flex justify-center items-center" key={myself?.id}>
          <img
            src={
              "https://react-bank-project.eapi.joincoded.com/" + myself?.image
            }
            className="w-[40%] h-[40%] rounded-2xl mb-4"
          />
        </div>
        <div className="flex justify-center items-center flex-col text-5xl">
          <h2 className="py-2">{myself?.username} </h2>

          <p className="py-2">Balance: {myself?.balance} Galleons</p>
          <div className="flex justify-center items-center text-3xl">
            <button className="hover:bg-[#5e564e] hover:text-white px-3 py-2 rounded-3xl h-[60px] w-[140px] text-center bg-[#a79b8d] text-black m-4">
              Earn Galleons
            </button>
            <button className=" hover:bg-[#5e564e] hover:text-white px-3 py-2 rounded-3xl  h-[60px] w-[140px] text-center bg-[#a79b8d] text-black m-4 ">
              Cast A Spell
            </button>
          </div>
        </div>
      </div>
      {loading && <LoadingSpinner />}
      {showLogo && <LogoDisplay logo={house.logo} onClose={onClose} />}
    </div>
  );
};

export default Profile;
