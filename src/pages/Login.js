import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { instance } from "../api";
import { checkToken, setToken } from "../api/storage";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    handleLogin();
  };

  if (user) return <Navigate to={"/home2"} />;

  return (
    <div className="bg-black text-white h-[100vh]  ">
      <div className="max-w-md w-full px-6 py-8 bg-black rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">
          Unlock your vault
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="username"
              name="username"
              id="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
