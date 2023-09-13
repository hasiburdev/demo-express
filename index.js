const express = require("express");

const PORT = 80;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Server running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
