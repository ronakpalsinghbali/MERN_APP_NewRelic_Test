const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
const connectURL = process.env.MONGO_URL || "mongodb+srv://ronaqpalsinghbali:ronaq1234@cluster0.7gwaawt.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(connectURL)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
