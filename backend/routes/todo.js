const express = require('express')
const controller = require('../controller/Ctodo')
const router = express.Router();

router.get('/', controller.getTodos);

router.post('/', controller.postTodo);

router.get('/:id', controller.getTodo)

module.exports = router;