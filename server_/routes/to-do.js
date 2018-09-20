const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const todo_controller = require('../controllers/to-do');


// a simple test url to check that all of our files are communicating correctly.
router.get('/to-dos', todo_controller.getAll);
router.post('/to-dos', todo_controller.create);

module.exports = router;