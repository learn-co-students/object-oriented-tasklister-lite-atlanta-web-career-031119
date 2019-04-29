class TaskListItem {
    constructor(name)   {
        this.name=name
        
    }

    renderItem()    {
        let taskItem=document.createElement('li')
        let delButt=document.createElement('button')

        delButt.innerText='Delete'
        delButt.addEventListener('click', (function(e) {
            e.target.parentNode.remove()
            renderApp()
        }))
        taskItem.innerText=this.name
        taskItem.appendChild(delButt)
        
        return taskItem
    }
}
