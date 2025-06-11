import { Paper, Typography } from "@mui/material";
import styles from "./WeatherCard.module.scss";

export default function WeatherCard({ weather }) {
  return (
    <Paper elevation={3} className={styles.weatherCard}>
      <Typography variant="h5">{weather.name}</Typography>
      <Typography>{weather.weather[0].description}</Typography>
      <Typography>Temperature: {weather.main.temp} °C</Typography>
    </Paper>
  );
}
