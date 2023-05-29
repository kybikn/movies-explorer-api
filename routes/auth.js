const authRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const validationRules = require('../utils/validationRules');
const { createUser, login, logout } = require('../controllers/users');

authRouter.post('/signup', celebrate({
  body: Joi.object().keys({
    email: validationRules.email,
    password: validationRules.password,
    name: validationRules.nameSignUp,
  }),
}), createUser); // создаёт пользователя с переданными в теле email, password и name

authRouter.post('/signin', celebrate({
  body: Joi.object().keys({
    email: validationRules.email,
    password: validationRules.password,
  }),
}), login); // проверяет переданные в теле email, password и возвращает JWT в куке

authRouter.post('/signout', logout);

module.exports = authRouter;
