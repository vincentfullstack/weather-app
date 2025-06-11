import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../SearchForm";

describe("SearchForm", () => {
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
    mockOnSubmit.mockClear();
  });

  test("renders input and submit button", () => {
    render(
      <SearchForm city="" onChange={mockOnChange} onSubmit={mockOnSubmit} />
    );
    expect(screen.getByLabelText(/enter city name/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /get weather/i })
    ).toBeInTheDocument();
  });

  test("calls onChange when typing", () => {
    render(
      <SearchForm city="" onChange={mockOnChange} onSubmit={mockOnSubmit} />
    );
    fireEvent.change(screen.getByLabelText(/enter city name/i), {
      target: { value: "Calgary" },
    });
    expect(mockOnChange).toHaveBeenCalledWith("Calgary");
  });

  test("calls onSubmit when form is submitted", () => {
    render(
      <SearchForm
        city="Toronto"
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /get weather/i }));
    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
