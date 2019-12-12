let pi = 22 / 7

console.log(pi.toFixed(2))


// Random
// Math.random()
for (let i = 0; i < 10; i++) {
    console.log((Math.random() * 10).toFixed(0));
}


let lower = 5;
let upper = 10;

for (let i = 0; i < 10; i++) {
    let num = Math.random() * (upper - lower + 1) + lower
    console.log("Next: " + num.toFixed(0))
}