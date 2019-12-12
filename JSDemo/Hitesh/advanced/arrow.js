function print(msg) {
    console.log(msg);
}


const hello = function(name) {
    return "Hello " + name
}

const hello2 = (name) => {
    return "Hello " + name
}

const hello3 = (name) => `Hello ${name}`


print(hello('Ram'))
print(hello2("Krishna"))
print(hello3("Shiva"))


const todos = [{
    title: "Eat",
    isDone: false,
}, {
    title: "Sleep",
    isDone: true,
}, {
    title: "Dream",
    isDone: true,
}]


const thingsDone = todos.filter((todo) => {
    return todo.isDone
})

const thingsDone2 = todos.filter((todo) => todo.isDone)

print(thingsDone)
print(thingsDone2)

thingsDone.forEach((thing) => print(thing.title))

///////////////////////////////////////////////////
// Never use arrow functions in methods and constructors
const camera = {
    price: 600,
    weight: 2000,
    getDesc: function() {
        return `This camera is ${this.price} costly`
    }
}


print(camera.getDesc())