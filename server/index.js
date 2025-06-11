import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Schema & Model
const historySchema = new mongoose.Schema({
  city: String,
  temp: Number,
  description: String,
  timestamp: { type: Date, default: Date.now },
});
const History = mongoose.model("History", historySchema);

// Routes
app.get("/", (req, res) => {
  res.send("Weather backend is running");
});

app.post("/history", async (req, res) => {
  const { city, temp, description } = req.body;
  if (!city || !description || typeof temp !== "number") {
    return res.status(400).json({ error: "Invalid request body" });
  }

  try {
    const entry = new History({ city, temp, description });
    await entry.save();
    res.status(201).json({ message: "Search history saved", entry });
  } catch (error) {
    res.status(500).json({ error: "Failed to save history" });
  }
});

app.get("/history", async (req, res) => {
  try {
    const entries = await History.find().sort({ timestamp: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
