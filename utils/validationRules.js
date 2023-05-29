const { Joi } = require('celebrate');
// const { urlRegex } = require('./constants');

const validationRules = {
  id: Joi.string().required().hex().length(24),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
  name: Joi.string().required().min(2).max(40),
  nameSignUp: Joi.string().min(2).max(40),
  link: Joi.string().required(),
  country: Joi.string().required(),
  director: Joi.string().required(),
  duration: Joi.number().required(),
  year: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  trailerLink: Joi.string().required(),
  thumbnail: Joi.string().required(),
  owner: Joi.string().required(),
  movieId: Joi.number().required(),
  nameRU: Joi.string().required(),
  nameEN: Joi.string().required(),
};

module.exports = validationRules;
