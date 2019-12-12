// Creating Element
const newFoto = document.createElement("p");
newFoto.textContent = "Created by JS"

document.querySelector("#galary").appendChild(newFoto)





//Event
let bText = document.querySelector("button").textContent
let clicked = false

document.querySelector("button").addEventListener('mouseover', (eve) => {
    eve.target.textContent = "Stay away from me :<"
    clicked = false
})

document.querySelector("button").addEventListener('mouseout', (eve) => {
    if (!clicked) {
        eve.target.textContent = bText
    }
})

document.querySelector("button").addEventListener('click', (eve) => {
    console.log(eve);
    //alert("Button was pressed")
    eve.target.textContent = "I was cliecked"
    clicked = true
    let newFoto = document.createElement("p");
    newFoto.textContent = "Created by JS"
    document.querySelector("#galary").appendChild(newFoto);
})


document.querySelector("#searchEt").addEventListener('input', (eve) => {
    let text = eve.target.value;
    console.log(text);
})