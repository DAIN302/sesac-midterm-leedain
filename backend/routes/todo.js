const express = require('express')
const controller = require('../controller/Ctodo')
const router = express.Router();

// 전체 조회
router.get('/', controller.getTodos);

// todo 추가
router.post('/', controller.postTodo);

// 특정 id의 todo 조회
router.get('/:id', controller.getTodo);

// 특정 id의 todo 수정
router.patch('/:id', controller.patchTodo);


module.exports = router;