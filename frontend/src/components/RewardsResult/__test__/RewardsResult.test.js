import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import RewardsResult from "..";
import apiClient from "../../../utils/apiClient";

afterEach(cleanup);

jest.mock("../../../utils/apiClient");

describe("test suite for the component of rewards calculation result", () => {
  it("render the component", () => {
    render(<RewardsResult customerId="1" />);
  });

  it("mock the api call to get response", async () => {
    apiClient.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { result: 420 } })
    );

    const { findByText, findByTestId } = render(
      <RewardsResult customerId="1" />
    );

    const result = await findByText(/420/);
    const resultDisplay = await findByTestId("rewards-result");

    expect(result).toBeInTheDocument();
    expect(resultDisplay).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<RewardsResult customerId="1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
