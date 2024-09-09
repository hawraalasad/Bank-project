import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import gringotts from "../assets/media/Untitled design (11).png";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { checkToken } from "../api/storage";
import welcome from "../assets/mp3/Welcome.mp3";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const { mutate: registerMutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(checkToken());
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    registerMutate();
  };
  console.log(userInfo);

  if (user) return <Navigate to={"/"} />;
  return (
    <div className="bg-black text-white h-[100vh] hp-font ">
      <div>
        <div className="flex justify-center text-9xl ">
          <h1>Register for a new vault</h1>
        </div>

        <div className="w-[50%] m-[20%] mt-[0%] flex ">
          <img src={gringotts} alt="gringotts bank " />

          {/* this next div is for the login funtionality */}
          <div className="flex justify-center items-center w-[50%] m-[20%]">
            <form>
              <div className="text-3xl">
                <div className="flex flex-col justify-center items-start m-2 ">
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

                <div className="flex flex-col justify-center items-start m-2">
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

                <div className="m-2">
                  <label htmlFor="image">Profile Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    required
                    className="rounded"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="rounded-xl bg-[#a79b8e] w-[300px] h-[60px] text-white mt-4 mr-4  text-3xl"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
