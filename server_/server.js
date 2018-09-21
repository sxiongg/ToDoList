const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const toDo = require('./routes/to-do');

const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://sxiong:siaxiong1@ds111113.mlab.com:11113/todolist';
let mongoDB = process.env.MONGODB_URI
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/thehandiest', toDo);

let port = process.ENV.PORT || 3000;
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});