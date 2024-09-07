import React, { useState } from "react";
import { deposit } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import User from "./Users";
const DepositModal = ({ onClose, isVisible }) => {
  const [amount, setAmount] = useState(0);

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate(Number(amount));
  };
  const handleSubmitAndClose = (e) => {
    handleFormSubmit(e);
  };

  const { mutate, isError, error, isSuccess, isLoading } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(Number(amount)),
    onError: (err) => {
      console.error("Deposit failed:", err);
    },
    onSuccess: () => {
      console.log("Deposit successful");
      onClose();
    },
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10 text-5xl">
      {/* This div is for the Modal card */}
      <div className="text-white bg-black p-[20px] rounded-md flex flex-col">
        <h1 className="m-6">Deposit Galleons to your account</h1>

        <form onSubmit={handleSubmitAndClose}>
          <div className="flex flex-col text-5xl">
            <label className="m-2">Amount:</label>
            <input
              className="text-black p-3 rounded-2xl m-2"
              type="number"
              required
              placeholder="enter amount"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row justify-around m-4">
            <button
              className="border-solid border-2 border-white w-[200px] rounded-2xl"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border-solid border-2 border-white w-[200px] rounded-2xl "
            >
              Deposit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositModal;
