// 모델 불러오기
const { Todo } = require('../models/index')

exports.getTodo = async (req,res) => {
    try {
        const todos = await Todo.findAll();
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}