const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config();
// const bodyParser = require('body-parser');

// import routers
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');

app.use(express.json());

// route middleware
app.use('/api/user', authRouter);
app.use('/api/posts', postsRouter);

// connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connected to DB!')
);

app.listen(3000, () => console.log('Server Up and Running!'));