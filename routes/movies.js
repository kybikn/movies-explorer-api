const moviesRouter = require('express').Router();
const { celebrate } = require('celebrate');

const { createMovieRules, deleteMovieRules } = require('../utils/validationRules');

const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.post('/', celebrate(createMovieRules), createMovie); // создаёт фильм с переданными в теле
// (country,director,duration,year,description,image,trailer,nameRU,nameEN и thumbnail,movieId)

moviesRouter.get('/', getMovies); // возвращает все сохранённые текущим  пользователем фильмы

moviesRouter.delete('/:id', celebrate(deleteMovieRules), deleteMovie); // удаляет сохранённый фильм по id

module.exports = moviesRouter;
