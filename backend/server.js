const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //set env variables in .env file

const app = express();
const port = process.env.PORT || 5000; //port setting

app.use(cors()); //middleware
app.use(express.json()); //middleware

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter); // (base URL, middleware function (a router object))
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});