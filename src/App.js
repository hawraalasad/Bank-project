import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.js";

import UserContext from "./context/UserContext";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
//import { register } from "../api/auth";
import { checkToken, getToken } from "./api/storage.js";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono  ">
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
