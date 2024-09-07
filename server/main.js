import express from "express";
import ViteExpress from "vite-express";

const app = express();
const port = 8000

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
