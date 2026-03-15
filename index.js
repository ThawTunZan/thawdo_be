const express = require("express");
const pool = require("/db");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
