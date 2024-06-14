const express = require("express");
const path = require("path");

const configViewEngine = (app) => {
  //   console.log(
  //     "check diranme",
  //     path.join("./src/", "views", path.join("public"))
  //   );
  //   // Set views directory and view engine
  app.set("views", path.join("./src/", "views"));
  app.set("view engine", "ejs");

  // Serve static files from the 'public' directory
  app.use(express.static(path.join("src", "public")));
};

module.exports = configViewEngine;
