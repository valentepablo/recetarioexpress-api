const express = require('express');
const connectDB = require('./db/connectDB');
const corsOptions = require('./config/corsOptions');
const cors = require('cors');
const { router: userRouter } = require('./routes/users');
const { router: recipesRouter } = require('./routes/recipes');

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use('/auth', userRouter);
app.use('/api/recipes', recipesRouter);

const start = async () => {
  try {
    await connectDB();
    app.listen(5000, console.log('Server started!'));
  } catch (error) {
    console.log('Connection to database failed');
  }
};

start();
