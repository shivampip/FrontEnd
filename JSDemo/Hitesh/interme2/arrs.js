const todos = ['Wake Up', 'Go for morning walk', 'Tea', "Take Bath", "Code"]

function print(msg) {
    console.log(msg);
}


print(todos.indexOf('Tea'))
print(todos.indexOf('tea'))


const mytodos = [{
    title: "Eat",
    isDone: false,
}, {
    title: "Sleep",
    isDone: false,
}, {
    title: "Dream",
    isDone: true,
}]


const index = mytodos.findIndex(function(td, i) {
    print(td)
    return td.title == "Sleep"
})

print(index);


function findInTodo(todo, title) {
    const index = todo.findIndex(function(todo, index) {
        return todo.title.toLowerCase() == title.toLowerCase()
    })
    return index
}


print(findInTodo(mytodos, "dream"))