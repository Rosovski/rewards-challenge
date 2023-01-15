const rewardCalculator = (bill) => {
  if (typeof bill !== "number" || bill <= 0) {
    return 0;
  }

  let points = 0;

  if (bill > 100) {
    points += Math.floor(bill - 100) * 2;
  }

  if (bill > 50) {
    let numOfOnePoint = bill > 100 ? 50 : Math.floor(bill - 50);
    points += numOfOnePoint;
  }

  return points;
};

module.exports = rewardCalculator;
