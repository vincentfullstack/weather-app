import { List, ListItem, ListItemText, Divider } from "@mui/material";

export default function HistoryList({ entries }) {
  return (
    <List>
      {entries.map((entry, index) => (
        <div key={entry.timestamp}>
          <ListItem>
            <ListItemText
              primary={`${entry.city} — ${entry.temp} °C — ${entry.description}`}
              secondary={new Date(entry.timestamp).toLocaleString()}
            />
          </ListItem>
          {index < entries.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  );
}
