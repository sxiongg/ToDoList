const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const toDo = require('./routes/to-do');

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://sxiong:siaxiong1@ds111113.mlab.com:11113/todolist';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/thehandiest', toDo);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});