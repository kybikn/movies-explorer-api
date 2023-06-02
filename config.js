require('dotenv').config();

const {
  NODE_ENV, JWT_SECRET_PROD, PORT = 3000, MONGO_URL_PROD,
} = process.env;

const JWT_SECRET_DEV = 'dev-secret';
const MONGO_URL_DEV = 'mongodb://127.0.0.1:27017/bitfilmsdb';

const JWT_SECRET = (NODE_ENV === 'production' && JWT_SECRET_PROD) ? JWT_SECRET_PROD : JWT_SECRET_DEV;
const MONGO_ADDRESS = (NODE_ENV === 'production' && MONGO_URL_PROD) ? MONGO_URL_PROD : MONGO_URL_DEV;

module.exports = {
  JWT_SECRET, PORT, MONGO_ADDRESS,
};
