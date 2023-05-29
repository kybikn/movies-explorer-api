const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');

const config = require('./config');
const router = require('./routes/index');
const checkErrors = require('./middlewares/checkErrors');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');

const { PORT, MONGO_ADDRESS } = config;

const app = express();

mongoose.connect(MONGO_ADDRESS);

app.use(cors);
app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger); // подключаем логгер запросов
app.use(router);
app.use(errorLogger); // подключаем логгер ошибок
app.use(errors()); // обработчик ошибок celebrate
app.use(checkErrors);

app.listen(PORT);
