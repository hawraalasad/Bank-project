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

  return (
    <div key={myself?.id}>
      <div>
        <div className="flex justify-center items-center">
          <img
            src={
              "https://react-bank-project.eapi.joincoded.com/" + myself?.image
            }
            className="w-[25%]"
          />
        </div>
        <h2>{myself?.username} Profile</h2>
        <p>Username: {myself?.username}</p>
        <p>Bank Balance: ${myself?.balance}</p>
      </div>
    </div>
  );
};

export default Profile;
