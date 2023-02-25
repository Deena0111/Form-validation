let username = document.getElementById("name");
let password = document.getElementById("pwd");
let phoneNo = document.getElementById("phone");
let email = document.getElementById("email");
let phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


let flag = 1;

function validate() {
    if (username.value == "" || username.value.isEmpty()) {
        document.getElementById("userError").innerHTML = "Please enter your name";
        flag = 0;
    }
    else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    if (password.value === "" || password.value.length <= 7) {
        document.getElementById("passError").innerHTML = "Password charater should be at least 8";
        flag = 0;
    }
    else {
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    if (phoneNo.value.match(phoneNum)) {
        document.getElementById("phError").innerHTML = "";
        flag = 1;
    }
    else {
        document.getElementById("phError").innerHTML = "Enter valid phone num";
        flag = 0;
    }
    if (email.value.match(mail)) {
        document.getElementById("emError").innerHTML = "";
        flag = 1;
    }
    else {
        document.getElementById("emError").innerHTML = "Enter valid email Id";
        flag = 0;
    }
    if (flag) {
        return true;
    }
    else {
        return false;
    }

}