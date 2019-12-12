try {
    let arr = [1, 2, 3, 4]
    let value = arr[-23]
    console.log("ans is " + value)
    throw Error("This is error") // baki js error ji ni de raha :(
} catch (e) {
    console.log("Can't divide")
}