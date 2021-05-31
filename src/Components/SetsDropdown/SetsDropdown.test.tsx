import { render, screen, fireEvent } from "@testing-library/react";
import { OptionTypeBase } from "react-select";
import SetsDropDown from "./index";
import React from "react";

const dropdownOptions = [
  { label: "Testing", value: "2EX" },
  { label: "Testing 2", value: "3SX" },
];

const props = {
  handleGatherCards: jest.fn(),
  onChange: jest.fn(),
  options: dropdownOptions,
};

jest.mock("react-select", () => ({ options, value, onChange }: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = options.find(
      (option: OptionTypeBase) => option.value === event.currentTarget.value
    );
    onChange(option);
  };
  return (
    <select data-testid="select" value={value} onChange={handleChange}>
      {options.map(({ label, value }: OptionTypeBase) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

describe("SetsDropdown Component", () => {
  test("should call handleGatherCards function", () => {
    render(<SetsDropDown {...props} />);

    const button = screen.getByText(/Gather cards/i);
    fireEvent.click(button);

    expect(props.handleGatherCards).toHaveBeenCalledTimes(1);
  });

  test("should call select dropdown change handler", () => {
    render(<SetsDropDown {...props} />);

    expect(screen.getByText("Select a Set:")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "2EX", label: "Testing" },
    });
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
