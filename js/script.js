let title = document.getElementById("title");
let currantUser;

// get currantUser from localstorage
currantUser = JSON.parse(localStorage.getItem("currantUser"));

title.innerHTML += currantUser.username;