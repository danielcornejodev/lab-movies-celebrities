const express = require("express");
const Celebrity = require("../../models/Celebrity.model");
const router = express.Router();


/* GET home page */
router.get("/", (req, res) => {
  res.render('index');
});

router.get("/celebrities/create", (req, res) => {
  res.render('celebrities/new-celebrity');
});

router.post("/celebrities/create", (req, res) => {
  Celebrity.create({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.catchPhrase
  }).then((err, response)=>{
    if(err) {
      res.render('celebrities/new-celebrity');
    }
    res.redirect('celebrities');
  })
});

module.exports = router;
