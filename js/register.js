let usernameInput = document.getElementById("username");
let usernameAlert = document.getElementById("usernameAlert");
let emailInput = document.getElementById("email");
let emailAlert = document.getElementById("emailAlert");
let passwordInput = document.getElementById("password");
let registerBtn = document.getElementById("register");
let usersList;

// check data at localstorage
if(localStorage.getItem("users") != null){
    usersList = JSON.parse(localStorage.getItem("users"));
}else{
    usersList = [];
};

registerBtn.addEventListener("click" , function(e){
    e.preventDefault();
    validateUsername();
    validateEmail();
    validatePassword();
    if (userExist() == true) {
        alert("username or email is exist!");
    }else{
        if (validateUsername() == true && validateEmail() == true && validatePassword() == true) {
            let userInfo = {
                username: usernameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };
            usersList.push(userInfo);
            localStorage.setItem("users" , JSON.stringify(usersList));
            setTimeout( () => {
                window.location = "index.html"
            }, 750);
        };
    };
})

// check username or email is exist
function userExist(){
    if (usersList.length == 0) {
        return false;
    }else{
        for(let i = 0 ; i < usersList.length ; i++){
            if(usersList[i].username == usernameInput.value || usersList[i].email == emailInput.value){
                return true;
            };
        };
    };
};

function validateUsername(){
    let regex = /^[A-Z][a-z]{2,8}[0-9]{0,4}$/;
    if (regex.test(usernameInput.value) == true) {
        usernameInput.classList.replace("is-invalid" , "is-valid");
        usernameAlert.classList.add("d-none");
        return true;
    }else{
        usernameInput.classList.add("is-invalid");
        usernameAlert.classList.remove("d-none");
        return false;
    };
};

function validateEmail(){
    let regex = /^[a-z][a-z]{2,8}[0-9]{1,5}(\@gmail)(\.com)$/;
    if (regex.test(emailInput.value) == true) {
        emailInput.classList.replace("is-invalid" , "is-valid");
        emailAlert.classList.add("d-none");
        return true;
    }else{
        emailInput.classList.add("is-invalid");
        emailAlert.classList.remove("d-none");
        return false;
    };
};

function validatePassword(){
    let passwordAlert = document.getElementById("passwordAlert");
    let regex = /^.{5,15}$/;
    if (regex.test(passwordInput.value) == true) {
        passwordInput.classList.replace("is-invalid" , "is-valid");
        passwordAlert.classList.add("d-none");
        return true;
    }else{
        passwordInput.classList.add("is-invalid");
        passwordAlert.classList.remove("d-none");
        return false;
    };
};
