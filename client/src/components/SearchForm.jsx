import { TextField, Button, Box } from "@mui/material";

export default function SearchForm({ city, onChange, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          label="Enter city name"
          variant="outlined"
          value={city}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Get Weather
        </Button>
      </Box>
    </form>
  );
}
