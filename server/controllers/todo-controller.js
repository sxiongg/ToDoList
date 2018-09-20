let ToDos = require('../models/todo');

var newToDo = new ToDos({
    text: 'Grocery Shopping',
    completed: false
}).save().then((doc) => {
    console.log('SAVED TO DO.', doc)
}, (e) => {
    console.log('ERROR SAVING TO DO')
}) 

function getAll(req, res) {
    ToDos.find().exec(function(err, docs) {
        res.json(docs);
    })
}

function create(req, res) {
    ToDos.create(req.body).then(function(todo) {
        res.json(todo)
    })
}

module.exports = {
    getAll,
    create,
}