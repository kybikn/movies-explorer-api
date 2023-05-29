const moviesRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const validationRules = require('../utils/validationRules');

const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.post('/', celebrate({
  body: Joi.object().keys({
    country: validationRules.country,
    director: validationRules.director,
    duration: validationRules.duration,
    year: validationRules.year,
    description: validationRules.description,
    image: validationRules.image,
    trailerLink: validationRules.trailerLink,
    thumbnail: validationRules.thumbnail,
    movieId: validationRules.movieId,
    nameRU: validationRules.nameRU,
    nameEN: validationRules.nameEN,
  }),
}), createMovie); // создаёт фильм с переданными в теле
// (country,director,duration,year,description,image,trailer,nameRU,nameEN и thumbnail,movieId)

moviesRouter.get('/', getMovies); // возвращает все сохранённые текущим  пользователем фильмы

moviesRouter.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: validationRules.id,
  }),
}), deleteMovie); // удаляет сохранённый фильм по id

module.exports = moviesRouter;
