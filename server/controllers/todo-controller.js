let ToDos = require('../models/todo');

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