const transactionsData = require("../mockData/transactions");

const getTransactionsData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ data: transactionsData }), 250)
  );

module.exports = getTransactionsData;
