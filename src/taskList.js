class TaskList {
    constructor(tasks = []){
        this.tasks = tasks
    }
    appendUl =()=>{
        let ul = document.getElementById("list")
        ul.innerHTML = ''
        // console.log(displayTaskList)
        this.tasks.forEach(task => {
        ul.appendChild(task.createLi())
        })

    }
      
}
