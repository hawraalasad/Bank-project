import React, { useState } from "react";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import coins from "../assets/media/Username.png";
import { deposit } from "../api/auth";
import ProfileModal from "./TransferModal";
import DepositModal from "./DepositModal";
import "../css/hp.css";

const Home2 = () => {
  const { data: myself } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });
  const [isVisible, setIsVisible] = useState(false);
  const onClose = () => setIsVisible(false);
  const onOpen = () => setIsVisible(true);
  return (
    <div className="bg-black min-h-screen h-screen flex items-center justify-center absolute inset-0 hp-font z-[-1]">
      {/* card div */}
      <div className="border-solid border-white h-[56%] border-4 w-[70%] rounded-xl flex flex-row">
        {/* div for text */}
        <div className="flex flex-col items-center p-[20px] gap-4 justify-center w-[50%] h-[100%]">
          <h1 className="text-[#5e564e] text-6xl ">Your available balance:</h1>
          <h1 className="text-[#906319] text-5xl ">
            {myself?.balance} Galleons
          </h1>
          <div className="flex flex-row gap-6 m-4">
            <button
              className="text-white border-white border-solid border-2 p-3 rounded-xl w-[120px] text-4xl "
              onClick={onOpen}
            >
              Deposit
            </button>
            <button className="text-white border-white border-solid border-2 p-3 rounded-xl w-[120px] text-4xl">
              Withdraw
            </button>
          </div>
        </div>
        {/* div for image */}
        <div className="flex flex-col items-center p-[20px] gap-4 justify-center w-[50%] h-[100%]">
          <img src={coins} />
        </div>
      </div>
      {isVisible && <DepositModal isVisible={isVisible} onClose={onClose} />}
    </div>
  );
};

export default Home2;
