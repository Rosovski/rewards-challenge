import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import TransactionItems from "..";
import apiClient from "../../../utils/apiClient";

afterEach(cleanup);

jest.mock("../../../utils/apiClient");

describe("test suite for the component of transaction table", () => {
  it("render the component", () => {
    render(<TransactionItems customerId="1" />);
  });

  it("mock the api call to get response", async () => {
    apiClient.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          result: [
            { Id: "1", amount: 145, billDate: "2023-01-13" },
            { Id: "1", amount: 145, billDate: "2022-12-13" },
            { Id: "1", amount: 145, billDate: "2022-11-13" },
            { Id: "1", amount: 145, billDate: "2022-10-13" },
            { Id: "1", amount: 145, billDate: "2022-09-13" },
          ],
        },
      })
    );

    const { findByText, findByTestId } = render(
      <TransactionItems customerId="1" />
    );

    const table = await findByTestId("transaction-table");
    const id = await findByText(/Id/);
    const amount = await findByText(/Amount/);
    const billDate = await findByText(/Bill Date/);

    expect(table).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
    expect(billDate).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<TransactionItems customerId="1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
