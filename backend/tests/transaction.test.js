const request = require("supertest");
const express = require("express");

const {
  getTransactionsWithId,
} = require("../controllers/transactionController");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/transactions/:customerId", getTransactionsWithId);

describe("test suite for transactions route", () => {
  it("GET /api/transactions/:customerId --> all transactions from given customer", async () => {
    const res = await request(app).get("/api/transactions/1");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      result: [
        { Id: "1", amount: 145, billDate: "2023-01-13" },
        { Id: "1", amount: 145, billDate: "2022-12-13" },
        { Id: "1", amount: 145, billDate: "2022-11-13" },
        { Id: "1", amount: 145, billDate: "2022-10-13" },
        { Id: "1", amount: 145, billDate: "2022-09-13" },
      ],
    });
  });
});
