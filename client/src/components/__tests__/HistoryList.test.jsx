import { render, screen } from "@testing-library/react";
import HistoryList from "../HistoryList";

const mockEntries = [
  {
    city: "Toronto",
    temp: 21,
    timestamp: new Date("2024-01-01T10:00:00Z").toISOString(),
  },
  {
    city: "Montreal",
    temp: -5,
    timestamp: new Date("2024-01-02T12:00:00Z").toISOString(),
  },
];

describe("HistoryList", () => {
  test("renders city and temperature", () => {
    render(<HistoryList entries={mockEntries} />);
    expect(screen.getByText(/Toronto — 21 °C/)).toBeInTheDocument();
    expect(screen.getByText(/Montreal — -5 °C/)).toBeInTheDocument();
  });

  test("renders human-readable timestamp", () => {
    render(<HistoryList entries={mockEntries} />);
    expect(
      screen.getByText(new Date(mockEntries[0].timestamp).toLocaleString())
    ).toBeInTheDocument();
  });

  test("renders empty state when entries is empty", () => {
    render(<HistoryList entries={[]} />);
    expect(screen.queryByRole("listitem")).toBeNull();
  });
});
