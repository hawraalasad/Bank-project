import React, { useState } from "react";
import { transfer } from "../api/auth";
import { useMutation } from "@tanstack/react-query";

const ProfileModal = () => {
  const [amount, setAmount] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  const { mutate } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transfer(amount),
  });

  return (
    <div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[1000] top-0 left-0 w-[100%] h-[] ">
      {/* This div is for the Modal card */}
      <div className="text-white bg-black p-[20px] rounded-md ">
        <h1>Transfer to a Wizard</h1>
        <form onSubmit={handleFormSubmit}>
          <label>Amount:</label>
          <input
            className="text-black"
            type="number"
            required
            placeholder="enter amount"
          />
          <input type="submit" value="Transfer"></input>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
