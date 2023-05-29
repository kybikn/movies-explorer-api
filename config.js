require('dotenv').config();

const { NODE_ENV, JWT_SECRET, PORT = 3000 } = process.env;

const JWT_SECRET_DEV = 'dev-secret';
const MONGO_ADDRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = {
  NODE_ENV, JWT_SECRET, PORT, JWT_SECRET_DEV, MONGO_ADDRESS,
};
