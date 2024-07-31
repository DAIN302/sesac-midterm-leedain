window.addEventListener('DOMContentLoaded', ()=>{
    const listTodo = document.querySelector('.list-todo ul')

    async function getTodos() {
        try {
            const todoList = await axios.get('https://jsonplaceholder.typicode.com/todos')
            const todoListData = todoList.data.slice(0, 10)
            console.log(todoListData);

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
        }catch(err){
            console.log(err);
        }
    }
    getTodos();

    const todoBtn = document.querySelector('#todo-submit')
    let inputtodo = document.querySelector('#todo-write')

    todoBtn.addEventListener('click', addTodo)
    inputtodo.addEventListener('keypress', (e)=>{
        if(e.keyCode === 13){
            addTodo(e)
        }
    })

    function addTodo(e){
        e.preventDefault();
        
        if(!inputtodo.checkVisibility()){
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
        console.log(listTodo);
        listTodo.insertAdjacentHTML('beforeend', hcode)

        inputtodo.value = ''
    }
    
})