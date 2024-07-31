require("dotenv").config();
const express = require("express");
const connectDB = require("./libs/db");
const { PORT } = require("./libs/keys.js");
const router = require("./routes/index.routes.js");
const app = express();

const port = PORT || 3000;

connectDB();
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
