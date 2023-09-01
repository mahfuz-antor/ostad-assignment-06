const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("response successful.");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
