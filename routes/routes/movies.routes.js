const router = require("express").Router();
const Movie = require("../../models/Movie.model");
const Celebrity = require("../../models/Celebrity.model");

router.get("/movies/create", (req, res) => {
  Celebrity.find()
  .then((allCelebs) => {
    res.render('movies/new-movie', {celebrities: allCelebs});
  })
});

router.get("/movies", (req, res) => {
  Movie.find()
  .then((allMovies) =>{
    res.render('movies/movies', {movies: allMovies});
  }).catch((err)=> console.log(err))
});

router.post("/movies/create", (req, res) => {
  Movie.create({
    title: req.body.movieTitle,
    genre: req.body.movieGenre,
    plot: req.body.moviePlot,
    cast: req.body.theCast
  }).then((err, response)=>{
    res.redirect('/');
  }).catch((err)=> res.render('movies/new-movie'))
});


module.exports = router;
