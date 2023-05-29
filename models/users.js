const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/unauthorized-err');
const {
  ERROR_UNAUTHORIZED_WRONG_MESSAGE,
} = require('../utils/constants');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Поле email должно быть валидным',
    },
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  name: {
    type: String,
    default: 'Анастасия',
    minLength: 2,
    maxLength: 30,
    required: true,
  },
});

userSchema.statics.findUserByCredentials = function ({ email, password }) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(ERROR_UNAUTHORIZED_WRONG_MESSAGE);
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError(ERROR_UNAUTHORIZED_WRONG_MESSAGE);
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
