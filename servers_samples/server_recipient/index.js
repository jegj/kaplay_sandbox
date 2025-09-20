import express from "express";

const app = express();
const PORT = 3001;

const HOUR = 3_600_000;
// Middleware to parse JSON (if needed)
app.use(express.json());

// Endpoint 1: /ping
app.get("/slow", (req, res) => {
  setTimeout(() => {
    res.send("This response was delayed");
  }, HOUR); // 3
});

// Endpoint 2: /hello
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  console.log("->libuv", process.env.UV_THREADPOOL_SIZE);
});
