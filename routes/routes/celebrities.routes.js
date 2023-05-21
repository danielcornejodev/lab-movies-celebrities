const express = require("express");
const Celebrity = require("../../models/Celebrity.model");
const Movie = require("../../models/Movie.model");
const router = express.Router();


/* GET home page */
router.get("/", (req, res) => {
  res.render('index');
});

router.get("/celebrities/create", (req, res) => {
  Movie.find()
  .then((allMovies) => {
    res.render('celebrities/new-celebrity');
  }).catch((err)=> console.log(err))
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

router.get("/celebrities/:theID", (req, res)=>{
  // the .populate method in mongoose can noly be done after running something like .find or .findbyID
  // and what it does is it looks at the pokemon that have been found, and then does a subsequent .find on the related model
  // the string that goes inside the .populate as the argument must match
  // the key in the model that you are finding
  // so if Pokemon model has a key called trainer (lowercase)
  // then that is what you need to put inside .populate
  // (.populate should always have a lower case argument because keys 
  // on models should always be lower cased)
  Celebrity.findById(req.params.theID)
  .then((theCeleb)=>{
      // the .populate method, if it works, it finds the .trainer field on each pokemon and transforms it from an ID to an actual trainer object
      res.render("celebrities/celebrity-details", {celebrity: theCeleb})
  }).catch((err)=> console.log(err))
})

module.exports = router;
