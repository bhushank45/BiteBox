//Authentication 
// login button 
function login(){
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let error=document.getElementById("error");
    if (email==="admin@1234" && pass==="1234"){
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user",email);

        window.location.href="index.html";
    }else{
        error.innerText="Invalid email or password";
    }
}

// toggle password
function togglePassword(){
    let passinput=document.getElementById("password");
    if(passinput.type="password"){
        passinput.type="text";
    }else{
        passinput.type="password";
    }
}
