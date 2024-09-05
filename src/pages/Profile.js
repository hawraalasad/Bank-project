import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { getAllUsers } from "../api/auth";
import user from "./Users";
import { useQuery } from "@tanstack/react-query";
import { me } from "../api/auth";

const Profile = () => {
  const { data: myself } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });
  console.log(myself);

  return (
    <div
      className="bg-black text-white min-h-screen flex justify-center items-center h-[100vh]"
      key={myself?.id}
    >
      <div className=" py-8 border-4 border-white rounded-2xl w-[50%] h-[60%]">
        <div className=" flex justify-center items-center" key={myself?.id}>
          <img
            src={
              "https://react-bank-project.eapi.joincoded.com/" + myself?.image
            }
            className="w-[50%] h-[50%] rounded-2xl mb-4"
          />
        </div>
        <div className="">
          <h2 className="py-2">{myself?.username} Profile</h2>
          <p className="py-2">Username: {myself?.username}</p>
          <p className="py-2">Bank Balance: {myself?.balance} </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
