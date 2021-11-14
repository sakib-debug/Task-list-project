// Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');
// Define event listeners

form.addEventListener('submit',addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click',clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);

// Define function
// add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task!');
    } else {
        // creat li element
        let li = document.creatElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.creatElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);

      storeTaskInLocalStorage(taskInput.value);

      taskInput.value ='';

}
e.preventDefault();


}
//Remove Task
function removeTask(e){
    if(e.target.hasAttribute("href")) {

    if(confirm("Are you sure?")){

    let ele = e.target.parentElement;
    ele.remove();
    //console.log(ele);
    removeFromLS(ele);
}}
}
// clear Task
function clearTask(e) {
    tasklist.innerHTML ="";
    //taskList.innerHTML = "";
    //faster
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
    localStorage.clear();
}
//filter task

function filterTask(e){
    let text = e.target.value.toLowerCase();
   document.querySelectorAll('li').forEach(task => {
     let item = task.firstChild.textContent;

     if(item.toLowerCase().indexOf(text)!= -1){
      task.style.display = 'none';

     }   });
    
}
//store in Local Storage
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks =[];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
task.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));
    }


   function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks =[];
    } else {
        tasks= JSON.parse(localStorage.getItem('tasks'));

} tasks.forEach(task => {
    let li= document.creatElement('li');
    li.appendChild(document.createTextNode(task + " "));
    let link = document.creatElement('a');
    link.setAttribute('href','#');
    link.innerHTML = 'x';
    li.appendChild(link);
  tasklist.appendChild(li);
});
}
function removeFromLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks =[];
    } else {
        tasks= JSON.parse(localStorage.getItem('tasks'));}  
        let li = taskItem;
        li.removeChild(li.lastChild);// <a>x</a>
        tasks.forEach((tasks, index) =>{
            if (li.textContent.trim() === task){
                tasks.splice(index, 1);

            }


        });
      localStorage.setItem('tsks', JSON.stringify(tasks));

}