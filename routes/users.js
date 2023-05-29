const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const validationRules = require('../utils/validationRules');

const {
  getMyProfile,
  editProfile,
} = require('../controllers/users');

usersRouter.get('/me', getMyProfile); // возвращает информацию о пользователе (email и имя)

usersRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    email: validationRules.email,
    name: validationRules.name,
  }),
}), editProfile); // обновляет информацию о пользователе (email и имя)

module.exports = usersRouter;
