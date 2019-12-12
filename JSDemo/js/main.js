// comment
console.log("Hello World Ji");

let name = "Shivam";
console.log(name);
name = 3.14;
console.log(name);
console.log(typeof name);

let person = {
    name: "Shivam",
    age: 23
};

console.log(person);

person.name = "shivampip";
console.log(person.name);
console.log(person['name']);


let selectedColors = ['red', 'blue'];

console.log(selectedColors);
console.log(selectedColors[1]);

selectedColors[2] = 3.14;
console.log(selectedColors);
console.log(selectedColors.length);



function greet(name, city) {
    console.log("Hello " + name + " from " + city);
}


greet("Shivam", "Pipariya");
greet("Ram");


function square(num) {
    return num * num;
}

console.log("Square of 2 is " + square(2));