class User {
    constructor(fname, lname, credits) {
        this.fname = fname
        this.lname = lname;
        this.credits = credits
    }

    getFullName() {
        return this.fname + " " + this.lname;
    }

    editFullName(name) {
        const nname = name.split(" ")
        this.fname = nname[0]
        this.lname = nname[1]
    }

    print() {
        console.log(`My name is ${this.fname} ${this.lname}.`)
    }
}



class Teacher extends User {
    constructor(fname, lname, credits, subject) {
        super(fname, lname, credits)
        this.subject = subject
    }

    print() {
        console.log(`My name is ${this.fname} ${this.lname}. I teach ${this.subject}`)
    }

}


let user1 = new User("Shivangi", "Agrawal", 80)
let user2 = new User("Shivam", "Agrawal", 56);
let user3 = new User("Sittu", "Agrawal", 45);
console.log(user1.getFullName())
user1.editFullName("GG Agrawal")
console.log(user1.getFullName())

let user4 = new Teacher("Hitesh", "Ji", 459, "Javascript")
user4.print()