const { Joi } = require('celebrate');
const { urlRegex } = require('./constants');

const validationRules = {
  id: Joi.string().required().hex().length(24),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  name: Joi.string().required().min(2).max(30),
  link: Joi.string().required().pattern(urlRegex),
  country: Joi.string().required(),
  director: Joi.string().required(),
  duration: Joi.number().required(),
  year: Joi.string().required(),
  description: Joi.string().required(),
  owner: Joi.string().required(),
  movieId: Joi.number().required(),
  nameRU: Joi.string().required(),
  nameEN: Joi.string().required(),
};

const createMovieRules = {
  body: Joi.object().keys({
    country: validationRules.country,
    director: validationRules.director,
    duration: validationRules.duration,
    year: validationRules.year,
    description: validationRules.description,
    image: validationRules.link,
    trailerLink: validationRules.link,
    thumbnail: validationRules.link,
    movieId: validationRules.movieId,
    nameRU: validationRules.nameRU,
    nameEN: validationRules.nameEN,
  }),
};

const deleteMovieRules = {
  params: Joi.object().keys({
    id: validationRules.id,
  }),
};

const editProfileRules = {
  body: Joi.object().keys({
    email: validationRules.email,
    name: validationRules.name,
  }),
};

const createUserRules = {
  body: Joi.object().keys({
    email: validationRules.email,
    password: validationRules.password,
    name: validationRules.name,
  }),
};

const loginUserRules = {
  body: Joi.object().keys({
    email: validationRules.email,
    password: validationRules.password,
  }),
};

module.exports = {
  validationRules,
  createMovieRules,
  deleteMovieRules,
  editProfileRules,
  createUserRules,
  loginUserRules,
};
