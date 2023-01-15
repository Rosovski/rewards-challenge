const express = require("express");
const router = express.Router();

const {
  getTransactionsWithId,
} = require("../controllers/transactionController");

router.get("/:customerId", getTransactionsWithId);

module.exports = router;
