import React from "react";
import useFetch from "../../utils/hooks/useFetch";
import "./index.css";

const TransactionItems = ({ customerId }) => {
  const transactionsData = useFetch(`/api/transactions/${customerId}`);
  const dateOfToday = new Date();

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
            transactionsData.map((item, index) => {
              const dateOfBillDate = new Date(item.billDate);

              const diffTime = Math.abs(dateOfToday - dateOfBillDate);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

              if (diffDays > 90) {
                return;
              }

              return (
                <tr key={index}>
                  <td>{item.Id}</td>
                  <td>{item.amount}</td>
                  <td>{item.billDate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionItems;
