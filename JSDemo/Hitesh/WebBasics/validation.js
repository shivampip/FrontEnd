//alert("connnected")


function validate() {
    let myvalue = document.getElementById("searchEt").value;
    if (isNaN(myvalue) || myvalue < 1 || myvalue > 20) {
        console.log("Not a valid input")
    } else {
        console.log("Value accepted")
    }

}


// Form validation

document.querySelector(".myform").addEventListener("submit", (eve) => {
    eve.preventDefault()
    console.log(eve.target.username.value)
    console.log(eve.target.fullname.value)
    eve.target.username.value = ""
    eve.target.fullname.value = ""
})