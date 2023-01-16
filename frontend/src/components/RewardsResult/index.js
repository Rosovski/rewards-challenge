import useFetch from "../../utils/hooks/useFetch";

const RewardsResult = ({ customerId }) => {
  const rewardsData = useFetch(`/api/rewards/${customerId}`);

  return (
    <div data-testid="rewards-component">
      {rewardsData !== null && (
        <h2 data-testid="rewards-result">
          The rewards that user earned in past 3 months is: {rewardsData} points
        </h2>
      )}
    </div>
  );
};

export default RewardsResult;
