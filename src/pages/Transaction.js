import React, { useState } from "react";
import { transactions } from "../api/auth";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";

const Transaction = () => {
  const { data: myself } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });
  console.log(myself);

  const { data: transaction } = useQuery({
    queryKey: ["transactions"],
    queryFn: transactions,
  });

  return (
    <div className="bg-black text-white min-h-screen" key={myself?.id}>
      <div>
        <h1> Transastion Page </h1>
      </div>
      <div>
        <div>
          <h1>
            {myself?.username} Balance is {myself?.balance}
          </h1>
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
                <td>{myself?.balance}</td>
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
