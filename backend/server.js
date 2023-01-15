const express = require("express");
const cors = require("cors");

const rewardRoutes = require("./routes/rewardRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/rewards", rewardRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(3001, () => console.log("Server started on port 3001"));
