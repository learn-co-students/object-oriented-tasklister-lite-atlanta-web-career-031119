class TaskList {
    constructor()   {
        this.tasks=[]
    }

    render()    {
        let listUl=document.createElement('ul')
        this.tasks.forEach(function(item) {
            listUl.appendChild(item)
        })
        console.log('listUl', listUl)
        return listUl
    }
}