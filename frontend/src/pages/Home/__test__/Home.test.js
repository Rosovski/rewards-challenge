import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "..";

afterEach(cleanup);

describe("test suite for the page of user's detail", () => {
  it("render the page", () => {
    render(<Home />);
  });

  it("find the transaction table and calculated result", () => {
    const { getByText } = render(<Home />);

    const welcome = getByText(/Welcome to the Online Rewards Calculator/);
    expect(welcome).toBeInTheDocument();
  });
});
