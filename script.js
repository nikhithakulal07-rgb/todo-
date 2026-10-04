//select dom elements
const input = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const todoList = document.getElementById('todo-list')
const saved = localStorage.getItem('todos') ;
const todos = saved? JSON.parse(saved) : [];
function savetodo(){
    localStorage.setItem('todos', JSON.stringify(todos));

}
function createdNode(todo, index){
    

}
function render(){
    list.innerHTML = '';
    todos.forEach((todo, index) => {
       const node  = createdNode(todo, index)
       list.appendChild(node) 
}