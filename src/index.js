let id = 0
let newTaskList = new TaskList()

document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();

  // const listContainer = document.getElementById("list");
  // const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior Here!
  document.getElementById('create-task-form').addEventListener("submit", createTask)

  // renderApp()
});

function createTask(e){
  e.preventDefault()
  let newTask = new TaskListItem(e.target.newtaskdescription.value, id++)
  e.target.reset()
  newTaskList.tasks.push(newTask)
  newTaskList.appendUl()
  
}

function removeTask(e){
  console.log(e.target)
  for (let index = 0; index < newTaskList.tasks.length; index++){
    if (newTaskList.tasks[index].id == e.target.dataset.id){
      newTaskList.tasks.splice(index, 1)
    }
  }

  e.target.parentElement.remove()
}