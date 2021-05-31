import { render, screen } from "@testing-library/react";
import Loader from "./index";

describe("Loader Component", () => {
  test("renders loader component", () => {
    render(<Loader message="loading tests" />);
    const loaderElement = screen.getByText(/loading tests/i);
    expect(loaderElement).toBeInTheDocument();
  });
});
