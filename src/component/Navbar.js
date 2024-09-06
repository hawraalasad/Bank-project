import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { logout } from "../api/auth";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    logout();
    setUser(false);
    <Navigate to={"/"} />;
  };

  return (
    <nav className="bg-black flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <>
                {user ? (
                  <>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                        fontSize: isActive ? "20px" : "20px",
                      })}
                      className=" flex text-gray-300  px-3 py-2 rounded-3xl text-sm font-medium h-[50px] w-[120px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear "
                      to="/home2"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                        fontSize: isActive ? "15px" : "15px",
                      })}
                      className=" flex text-gray-300  px-3 py-2 rounded-3xl text-sm font-medium h-[50px] w-[120px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear "
                      to="/transaction"
                    >
                      Transactions
                    </NavLink>
                    <NavLink
                      to="/profile"
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                        fontSize: isActive ? "20px" : "20px",
                      })}
                      className=" flex text-gray-300  px-3 py-2 rounded-3xl text-sm font-medium h-[50px] w-[120px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear "
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to="/users"
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                        fontSize: isActive ? "20px" : "20px",
                      })}
                      className=" flex text-gray-300  px-3 py-2 rounded-3xl text-sm font-medium h-[50px] w-[120px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear "
                    >
                      Users
                    </NavLink>
                    <NavLink
                      to="/login"
                      onClick={handleLogout}
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                        fontSize: isActive ? "20px" : "20px",
                      })}
                      className=" flex text-gray-300  px-3 py-2 rounded-3xl text-sm font-medium h-[50px] w-[120px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear "
                    >
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                        fontSize: isActive ? "23px" : "23px",
                      })}
                      className=" flex text-gray-300  px-3 py-2 rounded-3xl text-sm font-medium h-[50px] w-[120px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear "
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                        fontSize: isActive ? "23px" : "23px",
                      })}
                      className=" flex text-gray-300  px-3 py-2 rounded-3xl text-sm font-medium h-[50px] w-[120px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear "
                      to="/login"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "white" : "black",
                        background: isActive ? "#5e564e" : "#a79b8e",
                        fontSize: isActive ? "23px" : "23px",
                      })}
                      className=" flex text-gray-300  px-3 py-2 rounded-3xl text-sm font-medium h-[50px] w-[120px] text-center justify-center items-center hover:rounded-xl transition-all duration-100 ease-linear "
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
