class TaskListItem {
  constructor(name, id){
    this.name = name
    this.id = id
  }

  createLi =()=>{
    let li = document.createElement('li')
    li.innerText = this.name
    li.id = 'list-item'

    let btn = document.createElement('button')
    btn.innerText = "Remove"
    btn.className = "button"
    btn.dataset.id = this.id
    btn.addEventListener("click", removeTask)    
    li.appendChild(btn)

    let p = document.createElement('p')
    p.className = "p"
    p.innerText = "Priority:  "
    let priority = ["Low","Medium","High","ASAP!!!"]
    let priorityList = document.createElement("select")
    priorityList.id = "prioritySelector"
    p.appendChild(priorityList)
    for (let i = 0; i < priority.length; i++) {
        let option = document.createElement("option")
        option.value = priority[i]
        option.text = priority[i]
        priorityList.appendChild(option)
    }
    li.appendChild(p)

    return li
  }
}
