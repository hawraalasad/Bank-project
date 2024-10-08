import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { instance } from "../api";
import { checkToken, setToken } from "../api/storage";
import gringotts from "../assets/media/Untitled design (11).png";
import welcome from "../assets/mp3/Welcome.mp3";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(checkToken());
    },
  });
  const audio = new Audio(welcome);

  const handleFormSubmit = () => {
    handleLogin();
  };

  if (user) return <Navigate to={"/home2"} />;

  return (
    <div className="bg-black text-white h-[100vh] hp-font ">
      <div>
        <div className="flex justify-center text-9xl font-[] ">
          <h1>Unlock your vault</h1>
        </div>

        <div className="w-[50%] m-[20%] mt-[0%] flex text-3xl ">
          <img src={gringotts} alt="gringotts bank " />

          {/* this next div is for the login funtionality */}
          <div className="flex justify-center items-center w-[50%] m-[20%]">
            <form>
              <div>
                <div className="flex flex-col justify-center items-start m-4 ">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    required
                    className="rounded-xl text-black p-4%"
                  />
                </div>

                <div className="flex flex-col justify-center items-start m-4">
                  <label htmlFor="password">Password</label>
                  <input
                    className="rounded-xl text-black"
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    audio.play();
                    handleFormSubmit();
                  }}
                  type="submit"
                  className="rounded-xl bg-[#a79b8e] w-[100px] h-[30px] text-white m-4 "
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
