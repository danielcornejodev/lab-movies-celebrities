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

router.get("/celebrities", (req, res) => {
  Celebrity.find()
  .then((allCelebs) =>{
    res.render('celebrities/celebrities', {celebrities: allCelebs});
  }).catch((err)=> console.log(err))
});

router.post("/celebrities/create", (req, res) => {
  Celebrity.create({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.catchPhrase
  }).then((err, response)=>{
    res.redirect('celebrities');
  }).catch((err)=> res.render('celebrities/new-celebrity'))
});

module.exports = router;
