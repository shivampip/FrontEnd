let ram = {
    name: "I am Ram",
    age: 24,
    isActive: true
}

let sita = {
    name: "I am Sita",
    age: 23,
    isActive: true
}

let kkk = {
    name: "I am Kkk",
    age: 22,
    isActive: false
}


function print(msg) {
    console.log(msg);
}


let users = new Map()
print(typeof users);

users.set('ram', ram)
users.set('sita', sita)
users.set('kkk', kkk)

print(users)
print(users.size)
print(users.get('sita'))
print(users.keys()) //iterator
print(users.values()) //iterator


for (const key of users.keys()) {
    print(key)
}


for (const [key, value] of users.entries()) {
    print(`${key}: ${value.name}`)
}


users.forEach((value, key) => print(`${key}= ${value.isActive}`))