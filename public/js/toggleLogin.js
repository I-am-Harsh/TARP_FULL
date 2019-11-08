hideSignUp = () =>{
    document.getElementById('signUpform').style.display = "none";
    document.getElementById('loginform').style.display = "block";
    document.getElementById('signupHeading').style.display = "none";
    document.getElementById('loginHeading').style.display = "block";
}

hideLogin = () =>{
    document.getElementById('loginform').style.display = "none";
    document.getElementById('signUpform').style.display = "block";
    document.getElementById('loginHeading').style.display = "none";
    document.getElementById('signupHeading').style.display = "block";
}