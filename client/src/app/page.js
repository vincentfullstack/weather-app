"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Container, Typography, Alert, Box } from "@mui/material";
import { fetchHistory, postHistory } from "@/libs/api";
import { paginate } from "@/libs/paginate";
import SearchForm from "@/components/SearchForm";
import WeatherCard from "@/components/WeatherCard";
import HistoryList from "@/components/HistoryList";
import PaginationControls from "@/components/PaginationControls";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState("");
  const [history, setHistory] = useState([]);
  const [historyError, setHistoryError] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { pageItems, totalPages } = paginate(history, page, pageSize);

  useEffect(() => {
    fetchHistory()
      .then(setHistory)
      .catch(() => setHistoryError("Failed to fetch history."));
  }, []);

  const handleSearch = async () => {
    if (!city) return;

    setWeatherError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      );

      if (res.status === 429) {
        setWeatherError("Too many requests. Please try again later.");
        return;
      }

      if (!res.ok) {
        setWeatherError("City not found or Weather API error.");
        return;
      }

      const weatherData = await res.json();
      setWeather(weatherData);

      await postHistory(weatherData).catch(() =>
        setHistoryError("Failed to update history")
      );
      await fetchHistory()
        .then(setHistory)
        .catch(() => setHistoryError("Failed to fetch history"));
    } catch (err) {
      setWeatherError("City not found or Weather API error.");
    } finally {
      setCity("");
    }
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Weather App
      </Typography>

      <SearchForm city={city} onChange={setCity} onSubmit={handleSearch} />

      <Box aria-live="polite">
        {weatherError && (
          <Alert severity="error" className={styles.alert}>
            {weatherError}
          </Alert>
        )}

        {weather && <WeatherCard weather={weather} />}
      </Box>

      <Box aria-live="polite">
        <Box mt={4}>
          <Typography variant="h6">Search History</Typography>
          {history.length > 0 && (
            <>
              <HistoryList entries={pageItems} />
              <PaginationControls
                page={page}
                totalPages={totalPages}
                pageSize={pageSize}
                setPage={setPage}
                setPageSize={setPageSize}
              />
            </>
          )}
        </Box>

        {historyError && (
          <Alert severity="error" className={styles.alert}>
            {historyError}
          </Alert>
        )}
      </Box>
    </Container>
  );
}
