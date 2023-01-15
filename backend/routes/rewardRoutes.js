const express = require("express");
const router = express.Router();

const { getRewardsWithId } = require("../controllers/rewardController");

router.get("/:customerId", getRewardsWithId);

module.exports = router;
