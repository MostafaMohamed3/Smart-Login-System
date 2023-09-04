let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let loginBtn = document.getElementById("login");
let usersList;

// get data from localstorage
usersList = JSON.parse(localStorage.getItem("users"));

loginBtn.addEventListener("click" , function(e){
    e.preventDefault();
    if (userExist() == true) {
        setTimeout( () => {
            window.location = "index.html"
        }, 750);
    }else{
        alert("invalid email or password!");
    };
});

// check account is exist at localstorage
function userExist(){
    if (emailInput.value == "" || passwordInput.value == "") {
        return false;
    }else{
        for(let i = 0 ; i < usersList.length ; i++){
            if(usersList[i].email == emailInput.value && usersList[i].password == passwordInput.value){
                // save currant user at localstorage
                localStorage.setItem("currantUser" , JSON.stringify(usersList[i]));
                return true;
            };
        };
    };
};
