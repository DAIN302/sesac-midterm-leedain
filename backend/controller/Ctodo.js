// 모델 불러오기
const { Todo } = require('../models/index')

// 전체 조회
exports.getTodos = async (req,res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos)
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

// todo 추가
exports.postTodo = async (req,res) =>{
    try {
        const { title, done } = req.body
        
        const newTodo = await Todo.create({
            title, done
        })
        res.json(newTodo)
    } catch(err){
        console.error(err);
        res.status(500).json({"message" : "Internal Server Error"})
    }
}

// 특정 id 가진 todo 조회
exports.getTodo = async (req, res) => {
    try {
        const { id }   = req.params
    
        const todo = await Todo.findOne({
            where : { id }
        })
        if(todo){
            res.json(todo)
        } else {
            res.json({"message" : "Todo not found"})
        }
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 ID의 todo 수정
exports.patchTodo = async (req, res) => {
    try{
        const { id } = req.params;
        const { done } = req.body;
        const updateTodo = await Todo.update(
            { done },
            { where : { id }}
        )
        if(updateTodo[0]){
            const patchTodo = await Todo.findOne({
                where : {id}
            })
            return res.json(patchTodo)
        } else {
            return res.json({"message" : "Todo not found"})
        }
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

exports.deleteTodo = async (req, res) => {
    try{
        const { id } = req.params;

        const isDeleted = await Todo.destroy({
            where : { id }
        })
        if(isDeleted){
            return res.json({
                "message" : "Todo deleted successfully",
                "deletedId" : id
            })
        } else {
            return res.json({"message" : "Todo not found"})
        }
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

