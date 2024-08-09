
const email = document.getElementById("email");
const form = document.getElementById("form");
const email_error = document.getElementById("email_error");

form.addEventListener("submit", (e)=> 
{

    var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML = "valid email is requried";
    }
    else{
        email_error.innerHTML = "";
    }
})


