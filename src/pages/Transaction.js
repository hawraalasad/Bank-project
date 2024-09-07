import React, { useState } from "react";
import { transactions } from "../api/auth";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import WithdrawModal from "./WithdrawModal";

const Transaction = () => {
  const { data: myself } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });
  console.log(myself);

  const { data: mytransaction } = useQuery({
    queryKey: ["transactions"],
    queryFn: transactions,
  });
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
            {myself?.username} Balance is {myself?.balance}
          </h1>
        </div>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search by amount or date"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="items-row space-x-20  flex items-center justify-center">
          <table class="table-fixed">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Date</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{WithdrawModal} ijwoidqjedok</td>
                <td>7-8-2024</td>
                <td>Deposit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
