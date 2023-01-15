const asyncHandler = require("express-async-handler");

const getTransactionsData = require("../utils/mockDataService/getTransactionData");
const rewardCalculator = require("../utils/helper/rewardCalculator");

const getRewardsWithId = asyncHandler(async (req, res) => {
  const transactionsResp = await getTransactionsData();
  const transactionsData = transactionsResp.data;

  const customerId = req.params.customerId;

  let rewards = 0;

  for (let transaction of transactionsData) {
    const { billDate, amount, Id } = transaction;

    if (Id !== customerId) {
      continue;
    }

    const dateOfToday = new Date();
    const dateOfBillDate = new Date(billDate);

    if (dateOfToday.getDay() - dateOfBillDate.getDay() > 90) {
      continue;
    }

    rewards += rewardCalculator(amount);
  }

  res.status(200).json({ result: rewards });
});

module.exports = { getRewardsWithId };
