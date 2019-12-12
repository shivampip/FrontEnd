let todos = {
    title: "Something",
    status: "pending",
    count: 0,

    addCount: function() {
        this.count++;
    },

    setCount: function(amount) {
        this.count = amount;
    },

    setDone: function() {
        this.status = "Done"
    },

    print: function() {
        console.log(this) //this means this object
    },

    showStatus: function() {
        console.log("Status: " + this.status);
    }

}


console.log(todos)
todos.addCount()
todos.addCount()
todos.addCount()
todos.addCount()
todos.setDone()
todos.showStatus()
todos.print();
todos.setCount(101)
todos.print();