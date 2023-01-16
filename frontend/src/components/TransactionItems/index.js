import React from "react";
import useFetch from "../../utils/hooks/useFetch";
import "./index.css";

const TransactionItems = ({ customerId }) => {
  const transactionsData = useFetch(`/api/transactions/${customerId}`);

  return (
    <div data-testid="transaction-items-component">
      <table data-testid="transaction-table">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Bill Date</th>
          </tr>
          {transactionsData &&
            transactionsData.map((item, i) => (
              <tr key={i}>
                <td>{item.Id}</td>
                <td>{item.amount}</td>
                <td>{item.billDate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionItems;
