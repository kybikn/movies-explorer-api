const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

const User = require('../models/users');
const NotFoundError = require('../errors/not-found-err');
const {
  SUCCESS_CODE,
  CREATED_CODE,
  ERROR_NOT_FOUND_USER_MESSAGE,
  LOGOUT_MESSAGE,
} = require('../utils/constants');

const { JWT_SECRET } = config;

// регистрация
const createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email, password: hash, name,
    }))
    .then((user) => {
      const userData = JSON.parse(JSON.stringify(user)); // копируем объект
      delete userData.password;
      res.status(CREATED_CODE).send({ user: userData });
    })
    .catch(next);
};

// логин
const login = (req, res, next) => {
  const {
    email, password,
  } = req.body;
  User
    .findUserByCredentials({ email, password })
    .then((user) => {
      const userData = JSON.parse(JSON.stringify(user)); // копируем объект
      delete userData.password;
      const jwtSecret = JWT_SECRET;
      const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: '7d' });
      res
        .cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        })
        .status(SUCCESS_CODE).send({ user: userData });
    })
    .catch(next);
};

// выход
const logout = (req, res, next) => {
  try {
    res
      .clearCookie('jwt')
      .status(SUCCESS_CODE)
      .send({ message: LOGOUT_MESSAGE });
  } catch (error) {
    next(error);
  }
};

const getMyProfile = (req, res, next) => {
  const id = req.user._id;
  User.findById(id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(ERROR_NOT_FOUND_USER_MESSAGE);
      } else {
        res.status(SUCCESS_CODE).send(user);
      }
    })
    .catch(next);
};

const editProfile = (req, res, next) => {
  const { email, name } = req.body;
  const data = { email, name };
  const id = req.user._id;
  User.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError(ERROR_NOT_FOUND_USER_MESSAGE);
      } else {
        res.status(SUCCESS_CODE).send(user);
      }
    })
    .catch(next);
};

module.exports = {
  createUser,
  login,
  logout,
  getMyProfile,
  editProfile,
};
