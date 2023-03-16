const moongose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  return await moongose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
