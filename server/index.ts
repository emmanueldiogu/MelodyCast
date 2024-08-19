import express from "express";
import path from "path";
const __dirname = import.meta.dirname;

const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (_req, res) => {
  res.send("Hello from Express!");
});

// Serve the index.html file for any other requests
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
