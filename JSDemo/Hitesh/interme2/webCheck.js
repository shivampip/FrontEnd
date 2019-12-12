let email = 'lco123'
let password = '1234'

function print(msg) {
    console.log(msg);
}

print(email.length);
print(email.toLowerCase());
print(email.toUpperCase());


function emailChecker(email) {
    if (email.includes(123) && email.length > 6) {
        return true
    }
    return false
}

print(emailChecker(email))