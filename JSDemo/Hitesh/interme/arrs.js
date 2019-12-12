const nums = ['One', "Two", 'Three', 'Four', 'Five', 'Six'];

function print(msg) {
    console.log(msg);
}


print(nums.length);

nums[1] = "SOMETHING";

print(nums)

// Start
print(nums.shift())
print(nums);

nums.unshift("Anything")
print(nums);


// End
print(nums.pop())
print(nums);

print(nums.push("Seven"))
print(nums);


// Middle
nums.splice(2, 2, "Mid"); //start, num of element to delete, new element
print(nums);