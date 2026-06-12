const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Study Platform API Running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running");
});
