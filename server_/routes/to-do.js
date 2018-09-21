const express = require('express');
const router = express.Router();

const todo_controller = require('../controllers/to-do');

router.get('/to-dos', todo_controller.getAll);
router.post('/to-dos', todo_controller.create);

module.exports = router;