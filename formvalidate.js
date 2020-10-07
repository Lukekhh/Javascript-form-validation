    
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// add evenlister

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();

});

const sendData = (usernameVal, sRate, count) => {
    if(sRate === count){
       
       
        location.href = `demo.html?username=${usernameVal}`
    }
}


//for final form validate
const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
             var sRate = 0 + i;
             console.log(sRate);
             sendData(usernameVal, sRate, count);
        }else{
            return false;
        }
    }
}

//more validate email
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

//define validate function

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //validare username

    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'username min 3 chars');
    }else{
        setSuccessMsg(username);
    }

    //validate email
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not valid email');
    }else{
        setSuccessMsg(email);
    }

      //validate phone
      if(phoneVal === ""){
        setErrorMsg(phone, 'phone cannot be blank');
    }else if(phoneVal.length !== 7){
        setErrorMsg(phone, 'Not valid phone');
    }else{
        setSuccessMsg(phone);
    }

        //validate password
        if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }else if(passwordVal.length <= 6){
        setErrorMsg(password, 'password min 6');
    }else{
        setSuccessMsg(password);
    }

    //validate confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'confirm password cannot be blank');
    }else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpassword, 'Confirm password not match');
    }else{
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);

}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}
