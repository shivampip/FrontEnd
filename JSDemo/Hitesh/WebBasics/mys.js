console.log("You are at right place")

//alert("file is attached")

// only first p
const psel = document.querySelector('p')
psel.textContent = "Modified by JS"

// all p
const psels = document.querySelectorAll('p')
psels.forEach((p) => p.textContent = "Modified inside JS Loop")
    //psels.forEach((p) => p.remove())