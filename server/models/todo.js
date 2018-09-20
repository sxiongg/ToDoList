let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let toDoSchema = new Schema({
    text: String,
    completed: Boolean
})

let ToDo = mongoose.model('todo', toDoSchema); //ties the schema to the db collection

module.exports = ToDo;