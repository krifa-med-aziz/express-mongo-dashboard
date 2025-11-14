const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
const port = 5000;
const Mydata = require("./models/myDataSchema.js");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.post("/", (req, res) => {
  try {
    const user = new Mydata(req.body);
    user.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    redirect("./views/404.html");
  }
});

mongoose
  .connect(
    "mongodb+srv://devaziz:i7pe3fmCdcgUDr91@cluster0.msndqch.mongodb.net/all-data?appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
