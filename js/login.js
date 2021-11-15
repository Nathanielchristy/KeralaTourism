
function validate(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let regexpemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(email===""||password===""){
        alert("Flieds cannot be Empty");
        return false;
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

}