//alert("Connected")
function print(msg){
    console.log(msg)
}



let ul= document.getElementById("list")
let li;



let addButton= document.getElementById("add");
addButton.addEventListener('click', addItem);


let removeButton= document.getElementById("remove")
removeButton.addEventListener("click", removeItem);


function addItem(){
    print("Adding item")
    let input= document.getElementById("input");
    let value= input.value;
    ul= document.getElementById("list");
    
    let textNode= document.createTextNode(value);
    if(value=== ""){
        return false 
    }else{
        li= document.createElement("li");
        //li.setAttribute("class", "mycheck");
        li.className= "mycheck"
        
        let checkbox= document.createElement("input")
        checkbox.type= "checkbox";
        checkbox.setAttribute("id", "check")

        let label= document.createElement("label");
        

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        //ul.appendChild(li) 
        ul.insertBefore(li, ul.childNodes[0])
        
        input.value= "";

        setTimeout(()=> {
            li.className= "visual";
        }, 5)



    }


}




function removeItem(){
    print("Removing item")
    li= ul.children;
    for(let i=0; i<li.length; i++){
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i])
        }
    }
}