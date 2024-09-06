import React, { useState } from "react";
import { transfer } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import User from "./Users";
const ProfileModal = ({ onClose, isVisible }) => {
  const [amount, setAmount] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(Number(amount));
  };
  const handleSubmitAndClose = (e) => {
    handleFormSubmit(e);
    onClose();
  };

  const { mutate, isError, error, isSuccess, isLoading } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transfer(amount),
    onError: (err) => {
      console.error("Transfer failed:", err);
    },
    onSuccess: () => {
      console.log("Transfer successful");
      onClose();
    },
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10">
      {/* This div is for the Modal card */}
      <div className="text-white bg-black p-[20px] rounded-md flex flex-col">
        <h1>Transfer to a Wizard</h1>
        <form onSubmit={handleFormSubmit}>
          <label>Amount:</label>
          <input
            className="text-black"
            type="number"
            required
            placeholder="enter amount"
          />
          <div className="flex flex-col">
            <button
              type="submit"
              className="border-solid border-2 border-white"
            >
              Transfer
            </button>
            <button
              className="border-solid border-2 border-white"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
