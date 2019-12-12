const todos = [];

todos.push("Wake Up")
todos.push("Open Laptop")
todos.push("Code JS")

todos.forEach(function(element, index) {
    console.log(`Your task number ${index+1} is ${element}`);
})



function printer(task, index) {
    console.log(`Task # ${index+1}: ${task}`);
}

console.log("\n")

todos.forEach(printer)