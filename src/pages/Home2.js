import React from "react";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import coins from "../assets/media/Username.png";
import { deposit } from "../api/auth";
import ProfileModal from "./ProfileModal";

const Home2 = () => {
  const { data: myself } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });

  return (
    <div className="bg-black h-[100vh] flex justify-center items-center">
      {/* card div */}
      <div className="border-solid border-white h-[56%] border-4 w-[70%] rounded-xl flex flex-row">
        {/* div for text */}
        <div className="flex flex-col items-center p-[20px] gap-4 justify-center w-[50%] h-[100%]">
          <h1 className="text-white">Your available balance:</h1>
          <h1 className="text-white">{myself?.balance} Galleons</h1>
          <button className="text-white border-white border-solid border-2 p-3 rounded w-[100px]">
            Deposit
          </button>
          <button className="text-white border-white border-solid border-2 p-3 rounded w-[100px]">
            Withdraw
          </button>
        </div>
        {/* div for image */}
        <div className="flex flex-col items-center p-[20px] gap-4 justify-center w-[50%] h-[100%]">
          <img src={coins} />
        </div>
      </div>
    </div>
  );
};

export default Home2;
