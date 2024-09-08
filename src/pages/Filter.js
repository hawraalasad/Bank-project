import React from "react";

const Filter = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10 text-5xl">
      <div className="text-white bg-black p-[20px] rounded-md flex flex-col">
        <h2>Filter according to operation</h2>
        <select className="bg-black text-white m-8 border-solid border-2 border-white rounded-3xl p-6 ">
          <option value="Transfer" className="hover:bg-white">
            Transfer
          </option>

          <option value="Withdraw">Withdraw</option>

          <option value="Deposit">Deposit</option>
        </select>
        <div className="flex justify-around items-center">
          <button
            className="rounded-xl bg-[#a79b8e]  text-white  text-3xl pr-7 pt-3 pb-3 pl-7"
            onClick={() => onClose()}
          >
            Cancel
          </button>
          <button className="rounded-xl bg-[#a79b8e]  text-white text-3xl pr-7 pt-3 pb-3 pl-7">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
