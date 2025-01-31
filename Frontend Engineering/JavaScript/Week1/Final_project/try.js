
let data = {
    firstName: prompt("Input your Firstname"),
    lastName: prompt("Input yoru Lastname"),
    age: prompt("Input your age"),
    funFact: prompt("Fun fact about yourself")
}
let username = prompt("Input your Username:")
while (username.length > 10) {
    alert("Username should not exceed 10 characters")
    username = prompt("Change username:")
}

function createPassword() {
    let password = prompt("Input your Password:")
    while (password.length < 6) {
        alert("Password should be at least 6 characters")
        password = prompt("Change password:")
    }
    let confirmPassword = prompt("Confirm Password")
    if (password != confirmPassword) {
        alert("Password and Confirm Password does not match")
        createPassword()
    }
    return password
}

let password = createPassword()

console.log(`${username}\n${password}`)