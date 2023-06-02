const router = require('express').Router();

const authRouter = require('./auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');
const {
  ERROR_NOT_FOUND_PAGE_MESSAGE,
} = require('../utils/constants');

router.use(authRouter);
router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);

router.use('*', auth, (req, res, next) => {
  const err = new NotFoundError(ERROR_NOT_FOUND_PAGE_MESSAGE);
  next(err);
});

module.exports = router;
