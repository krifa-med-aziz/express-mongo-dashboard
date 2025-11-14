const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`server running at port : http://localhost:${port}`);
});
