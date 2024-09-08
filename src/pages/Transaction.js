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

  const [show, setShow] = useState(false);
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

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
            {myself?.username} Balance is {myself?.balance}
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
          <button
            className="bg-white text-black m-4 p-4"
            onClick={() => onOpen()}
          >
            filter
          </button>
        </div>

        <div className="items-row space-x-20  flex items-center justify-center">
          <table class="table-fixed flex flex-col">
            <thead>
              <tr>
                {/* <th>id</th> */}
                <div>
                  <th>Amount</th>
                </div>
                <div>
                  <th>Date</th>
                </div>
                <div>
                  <th>Operation</th>
                </div>
              </tr>
            </thead>
            <tbody>
              <tr>
                {transaction?.map((transaction) => (
                  <div>
                    {/* <div>
                      <td>{transaction?.id}</td>
                    </div> */}
                    <div>
                      <td>{transaction?.amount}</td>
                    </div>
                    <div>
                      <td>{transaction?.createdAt}</td>
                    </div>
                    <div>
                      <td>{transaction.type}</td>
                    </div>
                  </div>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {show && <Filter onClose={onClose} />}
    </div>
  );
};

export default Transaction;
