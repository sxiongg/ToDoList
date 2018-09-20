let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');

let toDoRouter = require('./routes/todo');

let app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoList');
mongoose.connection.once('open', function(){
    console.log('Connected to Mongo');
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/todo-list', toDoRouter);

module.exports = app;