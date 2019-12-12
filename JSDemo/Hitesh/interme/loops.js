const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Sat', "Sun"]


for (let i = 0; i < days.length; i++) {
    let day = days[i];
    console.log("Day " + i + ": " + day);
}


days.forEach(function(day, index) {
    console.log(`Start with ${index} is ${day}`);
})