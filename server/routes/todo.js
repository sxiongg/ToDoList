let express = require('express');
let router = express.Router();

let todoController = require('./../controllers/todo-controller'); 

router.get('/', todoController.getAll); 
router.post('/', todoController.create); 

module.exports = router;