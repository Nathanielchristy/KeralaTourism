
function validate(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if(email===""||password===""){
        alert("Flieds cannot be Empty");
        return false;
    }
    else{
        alert("Login Successfull")
        return true;
    }
}