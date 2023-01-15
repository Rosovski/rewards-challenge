const asyncHandler = require("express-async-handler");

const getTransactionsData = require("../utils/mockDataService/getTransactionData");

const getTransactionsWithId = asyncHandler(async (req, res) => {
  const transactionsResp = await getTransactionsData();
  const transactionsData = transactionsResp.data;

  const customerId = req.params.customerId;

  let transactions = [];

  for (let transaction of transactionsData) {
    const { Id } = transaction;

    if (Id !== customerId) {
      continue;
    }

    transactions.push(transaction);
  }

  res.status(200).json({ result: transactions });
});

module.exports = { getTransactionsWithId };
