const usersRouter = require('express').Router();
const { celebrate } = require('celebrate');

const { editProfileRules } = require('../utils/validationRules');

const {
  getMyProfile,
  editProfile,
} = require('../controllers/users');

usersRouter.get('/me', getMyProfile); // возвращает информацию о пользователе (email и имя)

usersRouter.patch('/me', celebrate(editProfileRules), editProfile); // обновляет информацию о пользователе (email и имя)

module.exports = usersRouter;
