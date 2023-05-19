const express = require("express");
const router = express.Router();
// const Pokemon = require("../models/Pokemon");
// const Trainer = require("../models/Trainer");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
