import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { getAllUsers } from "../api/auth";
import user from "./Users";
const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState({
    username: "",
    profilePicture: "",
    bankBalance: 0,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication - replace with real authentication logic
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setUserProfile({
        username: "user",
        profilePicture: "https://via.placeholder.com/150", // Placeholder image
        bankBalance: 1000, // Mock balance
      });
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setUserProfile({
      username: "",
      profilePicture: "",
      bankBalance: 0,
    });
  };

  return (
    <div>
      {/* {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      ) : ( */}
      <div>
        <h2>User Profile</h2>
        <img
          src={userProfile.profilePicture}
          alt={`${userProfile.username}'s profile`}
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <p>Username: {userProfile.username}</p>
        <p>Bank Balance: ${userProfile.bankBalance}</p>
        {/* <button onClick={handleLogout}>Log Out</button> */}
      </div>
    </div>
  );
};

export default Profile;
