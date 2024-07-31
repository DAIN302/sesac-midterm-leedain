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
                        <input type="checkbox" class="todo-check">
                    </div>
                    <div class="todo-content">
                        <p>${ele.title}</p>
                    </div>
                    <div>
                        <button class="delete-btn">X</button>
                    </div>
                </li>
                `
            })
            listTodo.innerHTML = hcode

            deleteTodo();

            doneTodo();            
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
                    <input type="checkbox" class="todo-check">
                </div>
                <div class="todo-content">
                    <p>${inputtodo.value}</p>
                </div>
                <div>
                    <button class="delete-btn">X</button>
                </div>
            </li>
        `
        listTodo.insertAdjacentHTML('beforeend', hcode)

        inputtodo.value = ''

        deleteTodo()

        doneTodo()
    }

    function deleteTodo() {
        const deleteBtn = document.querySelectorAll('.delete-btn')
            
        // 엑스 버튼 누르면 삭제
        deleteBtn.forEach(ele=>{
            ele.addEventListener('click', function(){
                console.log($(this).parents('li'));
                $(this).parents('li').remove()

            })
        })
    }  

    function doneTodo(){
        const todoCheck = $('.todo-check')
        todoCheck.change(function(){
            console.log($(this).prop('checked'));

            const done = $(this).prop('checked')

            if(done){
                $(this).parents('li').addClass('done')
            } else {
                $(this).parents('li').removeClass('done')
            }
        })
    }
})