window.addEventListener('DOMContentLoaded', ()=>{
    const listTodo = document.querySelector('.list-todo ul')

    // 초기 Todo 목록 불러오기
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
                    <div class="btn-box">
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

    // Todo 추가
    function addTodo(e){
        e.preventDefault();
        const writeForm = document.forms['write-todoForm']

        if(!writeForm.todo_write.checkValidity() || writeForm.todo_write.value == " "){
            alert('내용을 입력해주세요')
            return;
        }
        
        let hcode = `
            <li>
                <div>
                    <input type="checkbox" class="todo-check">
                </div>
                <div class="todo-content">
                    <p>${inputtodo.value.trim()}</p>
                </div>
                <div class="btn-box">
                    <button class="delete-btn">X</button>
                </div>
            </li>
        `
        listTodo.insertAdjacentHTML('beforeend', hcode)

        inputtodo.value = ''

        deleteTodo()

        doneTodo()
    }

    // todo 삭제
    function deleteTodo() {
        const deleteBtn = document.querySelectorAll('.delete-btn')
            
        // 엑스 버튼 누르면 삭제
        deleteBtn.forEach(ele=>{
            ele.addEventListener('click', function(){
                $(this).parents('li').remove()
            })
        })
    }  

    // todo 완료
    function doneTodo(){
        const todoCheck = $('.todo-check')
        todoCheck.change(function(){
            const isDone = $(this).prop('checked')

            if(isDone){
                $(this).parents('li').addClass('done')
            } else {
                $(this).parents('li').removeClass('done')
            }
        })
    }
})