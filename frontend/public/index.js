window.addEventListener('DOMContentLoaded', ()=>{
    const listTodo = document.querySelector('.list-todo ul')

    async function getTodos() {
        try {
            const todoList = await axios.get('https://jsonplaceholder.typicode.com/todos')
            const todoListData = todoList.data.slice(0, 10)

            let hcode = ''

            todoListData.forEach(ele=>{
                hcode += `
                <li>
                    <div>
                        <input type="checkbox">
                    </div>
                    <div>
                        <p>${ele.title}</p>
                    </div>
                    <div>
                        <button class="delete-btn">X</button>
                    </div>
                </li>
                `
            })
            listTodo.innerHTML = hcode

            const deleteBtn = document.querySelectorAll('.delete-btn')
            console.log(deleteBtn);
            

        }catch(err){
            console.log(err);
        }
    }
    getTodos();

    const todoBtn = document.querySelector('#todo-submit')
    let inputtodo = document.querySelector('#todo_write')

    todoBtn.addEventListener('click', addTodo)
    inputtodo.addEventListener('keypress', (e)=>{
        if(e.keyCode === 13){
            addTodo(e)
        }
    })

    function addTodo(e){
        e.preventDefault();
        const writeForm = document.forms['write-todoForm']

        if(!writeForm.todo_write.checkValidity()){
            alert('내용을 입력해주세요')
            return;
        }
        
        let hcode = `
            <li>
                <div>
                    <input type="checkbox">
                </div>
                <div>
                    <p>${inputtodo.value}</p>
                </div>
                <div>
                    <button class="delete-btn">X</button>
                </div>
            </li>
        `
        listTodo.insertAdjacentHTML('beforeend', hcode)

        inputtodo.value = ''
    }



    function deleteTodo() {
        
    }
    
})