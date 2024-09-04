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
    <div key={myself?.id}>
      <div>
        <div key={myself?.id}>
          <img
            src={
              "https://react-bank-project.eapi.joincoded.com/" + myself?.image
            }
          />
        </div>
        ;<h2>{myself?.username} Profile</h2>
        <img
          src={myself?.image}
          alt="profile picture"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <p>Username: {myself?.username}</p>
        <p>Bank Balance</p>
      </div>
    </div>
  );
};

export default Profile;
