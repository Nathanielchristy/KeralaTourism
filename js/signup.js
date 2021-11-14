function validate(){
    let name=document.getElementById("Name").value
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let repassword=document.getElementById("repassword").value
    let mobno=document.getElementById("mobno").value;
    let regexpemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    let RepeatDisp =document.getElementById("RepeatDisp"); 
    let emailvalid=document.getElementById("emailvalid");
    // let strengthBadge = document.getElementById('StrengthDisp');
    // let strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    // let mediumPassword = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/

    if(name==="" || email==="" || password==="" || repassword===""||mobno===""){
        alert("Fields should not be empty");
        return false;
    }
    if(isNaN(mobno)){
        alert("Mobile number should only contain digits");
        return false;
    }
    if (mobno.length<10){
        alert("Please re enter mobile number");
        return false;
    }
    CheckPasswordStrength(password)
    function CheckPasswordStrength(password) {
        var password_strength = document.getElementById("password_strength");
 
        //TextBox left blank.
        if (password.length == 0) {
            password_strength.innerHTML = "";
            return;
        }
 
        //Regular Expressions.
        var regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.
 
        var passed = 0;
 
        //Validate for each Regular Expression.
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                passed++;
            }
        }
 
        //Validate for length of Password.
        if (passed > 2 && password.length > 8) {
            passed++;
        }
 
        //Display status.
        var color = "";
        var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Weak";
                color = "red";
                break;
            case 2:
                strength = "Good";
                color = "darkorange";
                break;
            case 3:
            case 4:
                strength = "Strong";
                color = "green";
                break;
            case 5:
                strength = "Very Strong";
                color = "darkgreen";
                break;
        }
        password_strength.innerHTML = strength;
        password_strength.style.color = color;
    }
    if(regexpemail.test(email)){
        emailvalid.style.backgroundColor = 'green';
        emailvalid.textContent = 'Email is valid';
    }
    else{
        emailvalid.style.backgroundColor = 'red';
        emailvalid.textContent = 'Email is Not valid';
        return false;
    }
    if(password==repassword){
        RepeatDisp.style.backgroundColor = 'green';
        RepeatDisp.textContent = 'Passwords match';
        alert("Signup Successfull.Please Login to Continue ")
        return true;
    }
    else{
        RepeatDisp.style.backgroundColor = 'red';
        RepeatDisp.textContent = 'Passwords Dont match';
        return false;
    }



}