//alert("connetectd")
function print(msg) {
    console.log(msg);
}


const student = {
    name: "Shivam",
    age: 23,
    isActive: true,
}


//convert obj into string to be stored in local storage

const student_str = JSON.stringify(student)
print(student_str)

//localStorage.setItem("student", student_str)

//convert string to json

const student_json = JSON.parse(student_str);
print(typeof student_json)
print(student_json)

print(`Hello ${student_json.name}, you are ${student_json.age} years old.`)
if (student_json.isActive) {
    print("You are active")
} else {
    print("You are not active")
}