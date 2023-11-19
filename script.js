function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if(username == "" || password == "") {
        alert("Field is blank")
    }
    else if(username == "admin" && password == "admin") {
        alert("Welcome! " + username)
    }
    else{
        alert("Incorrect username or password")
    }
}

function myfunc() {
    let password = document.getElementById("password")

    if(password.type == "password") {
        password.type = "text"
    }
    else{
        password.type = "password"
    }

}