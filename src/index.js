document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.appendChild(taskList.render()));

  document.querySelector('#create-task-form').addEventListener('submit', addTaskToList)

  function addTaskToList(e) {
    e.preventDefault()
    let item = new TaskListItem(e.target[0].value)
    taskList.tasks.push(item.renderItem())
    renderApp()
  }
  
  renderApp()
});

