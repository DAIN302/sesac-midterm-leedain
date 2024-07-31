window.addEventListener('DOMContentLoaded', ()=>{
    const listTodo = document.querySelector('.list-todo ul')

    async function getTodos() {
        try {
            const todoList = await axios.get('https://jsonplaceholder.typicode.com/todos')
            const todoListData = todoList.data.slice(0, 10)
            console.log(todoListData);

            let hcode = ''

            todoListData.forEach(ele=>{

            })

            
        }catch(err){

        }
    }
    getTodos();

    const todoBtn = document.querySelector('#todo-submit')
    const inputtodo = document.querySelector('#todo-write')

    todoBtn.addEventListener('click', addTodo)
    inputtodo.addEventListener('keypress', (e)=>{
        
    })

    function addTodo(event){
        e.preventDefault();
        console.log('click');
    }
    
})