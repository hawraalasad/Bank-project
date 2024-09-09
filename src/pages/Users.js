import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUsers } from "../api/auth";
import ProfileModal from "./TransferModal";
import { useParams } from "react-router";

const User = ({}) => {
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  const [username, setUsername] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const onClose = () => setIsVisible(false);
  const onOpen = (username) => {
    setIsVisible(true);
    setUsername(username);
  };
  return (
    <div className="bg-black min-h-screen h-screen flex items-center justify-center absolute inset-0 hp-font z-[-1]">
      <div className="max-w-[95%] overflow-scroll w-full px-6 py-8 bg-black rounded-md shadow-md max-h-[80%]">
        <h2 className="text-6xl text-white font-semibold mb-6  ">Wizards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users?.map((user) => (
            <div
              key={user.id}
              className="bg-black p-6 rounded-3xl 
               flex flex-col items-center justify-center border-solid border-white border-2 text-2xl"
            >
              <img
                src={
                  "https://react-bank-project.eapi.joincoded.com/" + user.image
                }
                alt="User"
                className="w-24 h-24 rounded mb-4"
              />
              <div className="text-center">
                <h3 className="text-5xl  text-[#906319] mb-2  ">
                  {user.username}
                </h3>
                <p className="text-gray-300">{user.email}</p>
                <h1 className="text-[#f7e1ae]">
                  Balance: {user.balance.toLocaleString()} Galleons
                </h1>
                <button
                  onClick={() => onOpen(user.username)}
                  className="hover:bg-white rounded-2xl w-[150px] text-3xl h-[36px] bg-[#a79b8d] m-5 "
                >
                  Transfer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isVisible && (
        <ProfileModal
          isVisible={isVisible}
          onClose={onClose}
          username={username}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default User;
