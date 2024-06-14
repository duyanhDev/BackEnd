const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getHome,
  HomePage,
  postCreateUser,
  getCreate,
} = require("./../controllers/homeController");

router.get("/home", getHomepage);

router.get("/abc", getABC);

router.get("/hoidanit", getHome);

router.get("/", HomePage);

router.post("/create-user", postCreateUser);

router.get("/create", getCreate);
module.exports = router;
