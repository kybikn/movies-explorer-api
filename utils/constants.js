const SUCCESS_CODE = 200;
const CREATED_CODE = 201;
const ERROR_BAD_REQUEST = 400;
const ERROR_UNAUTHORIZED = 401;
const ERROR_FORBIDDEN = 403;
const ERROR_NOT_FOUND = 404;
const ERROR_CONFLICT = 409;
const ERROR_DEFAULT = 500;
const SUCCESS_MESSAGE = 'Фильм успешно удален';
const ERROR_BAD_REQUEST_MESSAGE = 'Некорректные данные';
const ERROR_UNAUTHORIZED_MESSAGE = 'Необходима авторизация';
const ERROR_FORBIDDEN_MESSAGE = 'Удаление чужого фильма запрещено';
const ERROR_NOT_FOUND_USER_MESSAGE = 'Пользователь по указанному _id не найден';
const ERROR_NOT_FOUND_MOVIE_MESSAGE = 'Фильм с указанным _id не найден';
const ERROR_NOT_FOUND_PAGE_MESSAGE = 'Страница не найдена';
const ERROR_CONFLICT_MESSAGE = 'Уже существует';
const ERROR_DEFAULT_MESSAGE = 'На сервере произошла ошибка';
const LOGOUT_MESSAGE = 'Пользователь вышел';
const MODEL_AUTH_ERROR_MESSAGE = 'Неправильные почта или пароль';
const MODEL_EMAIL_ERROR_MESSAGE = 'Поле email должно быть валидным';
const MODEL_LINK_ERROR_MESSAGE = 'Невалидная ссылка';
const urlRegex = /^(https:|http:|www\.)\S*/;

module.exports = {
  SUCCESS_CODE,
  CREATED_CODE,
  ERROR_BAD_REQUEST,
  ERROR_UNAUTHORIZED,
  ERROR_FORBIDDEN,
  ERROR_NOT_FOUND,
  ERROR_CONFLICT,
  ERROR_DEFAULT,
  SUCCESS_MESSAGE,
  ERROR_BAD_REQUEST_MESSAGE,
  ERROR_UNAUTHORIZED_MESSAGE,
  ERROR_FORBIDDEN_MESSAGE,
  ERROR_NOT_FOUND_USER_MESSAGE,
  ERROR_NOT_FOUND_MOVIE_MESSAGE,
  ERROR_NOT_FOUND_PAGE_MESSAGE,
  ERROR_CONFLICT_MESSAGE,
  ERROR_DEFAULT_MESSAGE,
  LOGOUT_MESSAGE,
  MODEL_AUTH_ERROR_MESSAGE,
  MODEL_EMAIL_ERROR_MESSAGE,
  MODEL_LINK_ERROR_MESSAGE,
  urlRegex,
};
