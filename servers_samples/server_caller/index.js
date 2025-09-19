import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON (if needed)
app.use(express.json());

// Endpoint 1: /ping
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Endpoint 2: /hello
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
