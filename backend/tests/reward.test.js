const request = require("supertest");
const express = require("express");

const { getRewardsWithId } = require("../controllers/rewardController");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/rewards/:customerId", getRewardsWithId);

describe("test suite for rewards route", () => {
  it("GET /api/rewards/:customerId --> amount of earned rewards of given customer", async () => {
    const res = await request(app).get("/api/rewards/1");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ result: 420 });
  });
});
