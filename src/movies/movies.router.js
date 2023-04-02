const router = require('express').Router()

const movieServices = require('./movies.services')

router.get('/movies', movieServices.getAllMovies)
router.post('/movies', movieServices.postNewMovie)
router.get('/movies/:id', movieServices.getMovieById)

module.exports = router