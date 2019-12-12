function print(msg) {
    console.log(msg)
}


print(document.title);

document.title = "Title is changed"


let watchP = document.getElementById('watch')
let ramP = document.getElementsByClassName('things')

let ps = document.querySelectorAll("p")
print(ps.length)
print(ps[1])

let pss = document.querySelectorAll("#watch") // # for id
pss[0].textContent = "Modified by ID"

let pac = document.querySelectorAll(".things") // . for class
pac[0].textContent = "Modified by class"