import React from "react";
import { useParams } from "react-router-dom";

import TransactionItems from "../../components/TransactionItems";
import RewardsResult from "../../components/RewardsResult";

const Details = () => {
  const { customerId } = useParams();

  return (
    <div>
      <h1>Query for the user with id: {customerId}</h1>
      <br />
      <TransactionItems customerId={customerId} />
      <br />
      <RewardsResult customerId={customerId} />
    </div>
  );
};

export default Details;
