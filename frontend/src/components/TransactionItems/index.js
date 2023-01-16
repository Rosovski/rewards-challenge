import React, { useState, useEffect } from "react";
import apiClient from "../../utils/apiClient";
import "./index.css";

const TransactionItems = ({ customerId }) => {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const transactionsResp = await apiClient.get(
        `/api/transactions/${customerId}`
      );
      const { result } = transactionsResp.data;

      setTransactions(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {transactions && (
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Amount</th>
              <th>Bill Date</th>
            </tr>
            {transactions.map((item, i) => (
              <tr key={i}>
                <td>{item.Id}</td>
                <td>{item.amount}</td>
                <td>{item.billDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionItems;
