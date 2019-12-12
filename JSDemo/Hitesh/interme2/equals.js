// == Equality
// === Identity


function print(msg) {
    console.log(msg);
}

print(2 == 2.0);
print(2 === 2.0);


print(" " === " ")
let a = " "
let b = " "
print(a === b)

let aa = {} // now its object
let bb = {}
print(aa === bb)
print(aa == bb)


let aaa = {}
let bbb = aaa
print(aaa === bbb)