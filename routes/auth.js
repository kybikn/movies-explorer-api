const authRouter = require('express').Router();
const { celebrate } = require('celebrate');

const { createUserRules, loginUserRules } = require('../utils/validationRules');
const { createUser, login, logout } = require('../controllers/users');

authRouter.post('/signup', celebrate(createUserRules), createUser); // создаёт пользователя с переданными в теле email, password и name

authRouter.post('/signin', celebrate(loginUserRules), login); // проверяет переданные в теле email, password и возвращает JWT в куке

authRouter.post('/signout', logout);

module.exports = authRouter;
