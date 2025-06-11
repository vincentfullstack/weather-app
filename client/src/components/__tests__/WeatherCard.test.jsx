import { render, screen } from "@testing-library/react";
import WeatherCard from "../WeatherCard";

const mockWeather = {
  name: "Toronto",
  main: { temp: 22 },
  weather: [{ description: "Clear sky" }],
};

describe("WeatherCard", () => {
  test("renders city name", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("Toronto")).toBeInTheDocument();
  });

  test("renders temperature in Celsius", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText(/22\s?°C/)).toBeInTheDocument();
  });

  test("renders weather description", () => {
    render(<WeatherCard weather={mockWeather} />);
    expect(screen.getByText("Clear sky")).toBeInTheDocument();
  });
});
