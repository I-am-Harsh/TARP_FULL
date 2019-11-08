function handleLogin(){
    var email = document.getElementById("fq_email").value;
    var pass = document.getElementById("fq_password").value;
    window.test = "100";
    event.preventDefault();

    if(email === 'verma.harsh98@gmail.com'){
        if(pass === 'pass'){
            console.log('Passed -- Logging in');
            // same window
            window.location ="./home";
            // different window 
            // window.open('./home');
            event.preventDefault();     
        }
        else{
            window.alert('Wrong Password or Username');
            event.preventDefault();
        }
    }
    else if (email === 'manu@gmail.com'){
        if(pass === 'lmao'){
            console.log('Passed logging in')
        
        window.location ="./home";
            // different window 
            // window.open('./home');
            event.preventDefault();
        }
        else{
            window.alert('Wrong Password');
            event.preventDefault();
        }
    }
    else{
        console.log('GG');
        window.alert("Not in database, Create a new user first");
        event.preventDefault();
    }

}

 