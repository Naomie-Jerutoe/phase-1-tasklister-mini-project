document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const taskInput  = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', addTask);

  function addTask(event){
    event. preventDefault();
    const taskDescription = taskInput.value;

    const newTasks = document.createElement('li');
      newTasks.textContent = taskDescription;

    const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', ()=>{
      newTasks.remove();
    });

    newTasks.appendChild(deleteButton);
    taskList.appendChild(newTasks);
    taskInput.value= "";
  }
});
