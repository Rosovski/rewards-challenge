import React, { useState, useEffect } from "react";

import apiClient from "../../utils/apiClient";

const RewardsResult = ({ customerId }) => {
  const [rewards, setRewards] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const rewardsResp = await apiClient.get(`/api/rewards/${customerId}`);
      const { result } = rewardsResp.data;

      setRewards(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {rewards && (
        <h2>
          The rewards that user earned in past 3 months is: {rewards} points
        </h2>
      )}
    </div>
  );
};

export default RewardsResult;
