const express = require("express");
const path = require("path");
const app = express();

// cập nhật file env
require("dotenv").config();

const port = process.env.PORT || 8080;

// config template enginees
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

// config files  public
app.use(express.static(path.join(__dirname, "./src/public")));

app.get("/", (req, res) => {
  res.send("Hello World\n duy anh dep trai 134");
});
app.get("/abc", (req, res) => {
  res.send("check abc");
});
app.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});
app.listen(port);
