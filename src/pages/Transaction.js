import React, { useState } from "react";
import { transactions } from "../api/auth";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import WithdrawModal from "./WithdrawModal";
import Filter from "./Filter";

const Transaction = () => {
  const { data: myself } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });
  console.log(myself);

  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [filter, setFilter] = useState([]);

  const handleType = (event) => {
    const selectedType = event.target.value;
    setType(selectedType);
    const transactionType = transaction?.filter(
      (transaction) => selectedType === "" || transaction.type === selectedType
    );
    setFilter(transactionType);
  };

  const { data: transaction } = useQuery({
    queryKey: ["transactions"],
    queryFn: transactions,
  });
  console.log(transaction);
  const [search, setSearch] = useState("");

  return (
    <div
      className="bg-black text-white min-h-screen hp-font text-4xl"
      key={myself?.id}
    >
      <div className="flex justify-center">
        <h1> Transastion Page </h1>
      </div>

      <div>
        <div className="flex justify-center">
          <h1>
            Hello {myself?.username}, your balance is{" "}
            {myself?.balance.toLocaleString()}
          </h1>
        </div>

        <div className="flex justify-center">
          <input
            className="text-black"
            type="text"
            placeholder="Search by amount or date"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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

        <div className="items-row space-x-20 flex items-center justify-center">
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
                  <tr className="flex w-full justify-between" key={index}>
                    {/* Transaction details */}
                    <td className="w-1/3 text-center">
                      {/* Conditional styling for the amount */}
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
                      {new Date(transaction?.createdAt).toLocaleDateString()}
                    </td>
                    <td className="w-1/3 text-center">
                      {/* Conditional styling for the type */}
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
