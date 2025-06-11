import { render, screen, fireEvent } from "@testing-library/react";
import PaginationControls from "../PaginationControls";

describe("PaginationControls", () => {
  const mockSetPage = jest.fn();
  const mockSetPageSize = jest.fn();

  beforeEach(() => {
    mockSetPage.mockClear();
    mockSetPageSize.mockClear();
  });

  test("renders pagination and select with correct values", () => {
    render(
      <PaginationControls
        page={2}
        totalPages={5}
        pageSize={10}
        setPage={mockSetPage}
        setPageSize={mockSetPageSize}
      />
    );

    expect(screen.getByRole("button", { name: /page 2/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/page size/i)).toHaveTextContent("10");
  });

  test("calls setPage when pagination is clicked", () => {
    render(
      <PaginationControls
        page={1}
        totalPages={3}
        pageSize={10}
        setPage={mockSetPage}
        setPageSize={mockSetPageSize}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /go to page 2/i }));
    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  test("calls setPageSize and resets page to 1 when page size is changed", () => {
    render(
      <PaginationControls
        page={3}
        totalPages={10}
        pageSize={10}
        setPage={mockSetPage}
        setPageSize={mockSetPageSize}
      />
    );

    fireEvent.mouseDown(screen.getByLabelText(/page size/i));
    fireEvent.click(screen.getByRole("option", { name: "20" }));

    expect(mockSetPageSize).toHaveBeenCalledWith(20);
    expect(mockSetPage).toHaveBeenCalledWith(1);
  });
});
