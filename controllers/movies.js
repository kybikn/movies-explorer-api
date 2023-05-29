const Movie = require('../models/movies');
const {
  SUCCESS_CODE,
  CREATED_CODE,
  SUCCESS_MESSAGE,
  ERROR_FORBIDDEN_MESSAGE,
  ERROR_NOT_FOUND_MOVIE_MESSAGE,
} = require('../utils/constants');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const { _id } = req.user;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner: _id,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => movie.populate('owner'))
    .then((populatedMovie) => {
      res.status(CREATED_CODE).send(populatedMovie);
    })
    .catch(next);
};

const getMovies = (req, res, next) => {
  Movie.find({})
    .populate('owner')
    .then((movie) => {
      res.status(SUCCESS_CODE).send(movie);
    })
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;
  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(ERROR_NOT_FOUND_MOVIE_MESSAGE);
      }
      if (movie.owner._id.toString() !== userId) {
        throw new ForbiddenError(ERROR_FORBIDDEN_MESSAGE);
      }
      movie.deleteOne()
        .then(() => {
          res.status(SUCCESS_CODE).send({ message: SUCCESS_MESSAGE });
        })
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  createMovie,
  getMovies,
  deleteMovie,
};
