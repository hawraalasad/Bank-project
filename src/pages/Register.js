import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import gringotts from "../assets/media/Untitled design (11).png";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});

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
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    registerMutate();
    console.log(userInfo);
  };

  return (
    <div className="bg-black text-white h-[100vh]  ">
      <div>
        <div className="flex justify-center text-6xl font-[] ">
          <h1>Register for a new vault</h1>
        </div>

        <div className="w-[50%] m-[20%] mt-[0%] flex ">
          <img src={gringotts} alt="gringotts bank " />

          {/* this next div is for the login funtionality */}
          <div className="flex justify-center items-center w-[50%] m-[20%]">
            <form>
              <div>
                <div className="flex flex-col justify-center items-start ">
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    required
                    className="rounded-xl text-black p-4%"
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label htmlFor="email">Code</label>
                  <input
                    className="rounded-xl text-black"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
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
                <div>
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
              <div className="flex justify-center">
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="rounded-xl bg-[#a79b8e] w-[100px] h-[30px] text-white "
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
