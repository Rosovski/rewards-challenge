import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Details from "..";

afterEach(cleanup);

describe("test suite for the page of user's detail", () => {
  it("render the page", () => {
    render(<Details />);
  });

  it("find the transaction table and calculated result", () => {
    const { getByTestId } = render(<Details />);

    const table = getByTestId("transaction-items-component");
    const points = getByTestId("rewards-component");

    expect(table).toBeInTheDocument();
    expect(points).toBeInTheDocument();
  });
});
