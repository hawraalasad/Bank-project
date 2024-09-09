import React, { useState } from "react";
import { transactions } from "../api/auth";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import WithdrawModal from "./WithdrawModal";
import Filter from "./Filter";

const Transaction = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState([]);
  const [date, setDate] = useState("");
  const { data: myself } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });
  console.log(myself);

  const handleType = (event) => {
    let selectedType = event.target.value;
    setType(selectedType);
  };

  const handleAmount = (event) => {
    const selectedAmount = event.target.value;
    setAmount(selectedAmount);
  };

  const handleDate = () => {};

  const { data: transaction } = useQuery({
    queryKey: ["transactions"],
    queryFn: transactions,
  });
  console.log(transaction);

  const filter = transaction
    ?.filter((trans) => {
      return trans.type.includes(type);
    })
    .filter((transaction) => {
      return transaction.amount.toString().includes(amount);
    })
    .filter((transaction) => {
      return (
        date == "" ||
        (new Date(transaction.createdAt).toLocaleDateString("en-US") >=
          new Date(date.from).toLocaleDateString("en-US") &&
          new Date(transaction.createdAt).toLocaleDateString("en-US") <=
            new Date(date.to).toLocaleDateString("en-US"))
      );
    });

  return (
    <div
      className="bg-black text-white min-h-screen hp-font text-4xl"
      key={myself?.id}
    >
      <div className="flex justify-center hp-font">
        <h1 className="hp-font"> Transastion Page </h1>
      </div>

      <div>
        <div className="flex justify-center">
          <h1 className="hp-font">
            Hello {myself?.username}, your balance is{" "}
            {myself?.balance.toLocaleString()}
          </h1>
        </div>

        <div className="flex justify-center">
          <input
            className="bg-black text-white m-8 border-solid border-2 border-white rounded-3xl p-6"
            type="text"
            placeholder="Search by amount "
            onChange={handleAmount}
          />
          <button className="bg-black text-white m-8 border-solid border-2 border-white rounded-3xl p-6 ">
            Search
          </button>

          <select
            className="bg-black text-white m-8 border-solid border-2 border-white rounded-3xl p-6 "
            onChange={(type) => handleType(type)}
          >
            <option value="">All</option>
            <option value="transfer" className="hover:bg-white">
              transfer
            </option>

            <option value="withdraw">withdraw</option>
            <option value="deposit">deposit</option>
          </select>
        </div>
        <div className="m-20 flex justify-center ">
          {/* <DatePicker
            onChange={onDateChange}
            value={dateValue}
            autoFocus={true}
            className="date-picker"
            closeCalendar={false}
          /> */}
          From
          <input
            className=" rounded-3xl m-5 text-black"
            type="date"
            onChange={(e) => setDate({ ...date, from: e.target.value })}
          />
          To
          <input
            className="m-5 rounded-3xl  text-black"
            type="date"
            onChange={(e) => setDate({ ...date, to: e.target.value })}
          />
          <button
            className="bg-black text-white m-8 border-solid border-2 border-white rounded-3xl p-6 "
            onClick={handleDate}
          >
            Search
          </button>
        </div>
        <div className="items-row space-x-20 flex items-center justify-center p-20">
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex w-full justify-between">
                {/* Column headers */}
                <th className="w-1/3 text-center">Amount</th>
                <th className="w-1/3 text-center">Date</th>
                <th className="w-1/3 text-center">Operation</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping through transactions */}
              {filter?.map((transaction, index) => {
                // Normalize transaction type to avoid case-sensitivity issues
                const transactionType = transaction?.type?.toLowerCase();

                return (
                  <tr className="flex w-full justify-between">
                    {/* Transaction details */}
                    <td className="w-1/3 text-center">
                      {/* Conditional styling for the amount red for withdraw and tranfer, green for deposit */}
                      <span
                        className={
                          transactionType === "deposit"
                            ? "text-green-500"
                            : transactionType === "withdraw"
                            ? "text-red-500"
                            : "text-red-500"
                        }
                      >
                        {transaction?.amount.toLocaleString()}
                      </span>
                    </td>
                    <td className="w-1/3 text-center">
                      {new Date(transaction?.createdAt)
                        .toLocaleDateString("en-US")
                        .slice(
                          0,
                          new Date(transaction?.createdAt)
                            .toLocaleDateString("en-US")
                            .indexOf(",")
                        )}
                    </td>
                    <td className="w-1/3 text-center">
                      {/* Conditional styling for the type red for withdraw and tranfer, green for deposit */}
                      <span
                        className={
                          transactionType === "deposit"
                            ? "text-green-500"
                            : transactionType === "withdraw"
                            ? "text-red-500"
                            : "text-red-500"
                        }
                      >
                        {transaction?.type}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
