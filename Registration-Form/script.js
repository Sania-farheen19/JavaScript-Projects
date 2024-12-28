const Form = document.getElementById("Form");
const UserName = document.getElementById("UserName");
const EmaiId = document.getElementById("EmaiId");
const Password = document.getElementById("Password");
const ConfirmPassword = document.getElementById("ConfirmPassword");
const Submit = document.getElementById("btn");
const successMessage = document.getElementById("successMessage");


Form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInput();

})

const validateInput = ()=>{

    let isFormValid = true; // Assume form is valid initially

    const usernameValue = UserName.value.trim();
    const emailValue = EmaiId.value.trim();
    const passwordValue = Password.value.trim();
    const cpasswordValue = ConfirmPassword.value.trim();
    //userName
    if(usernameValue===""){
        setError(UserName,"User name is required");
        isFormValid = false
    }
    else{
        setSuccess(UserName)
    }
    //email
    if(emailValue===""){
        setError(EmaiId,"Email is required");
        isFormValid = false
    }
    else if(!isValidEmail(emailValue)){
        setError(EmaiId,"Provide a valid Email Id")
        isFormValid = false
    }
    else{
        setSuccess(EmaiId);
    }


    //password

    if(passwordValue===""){
        setError(Password,"Password is required");
        isFormValid = false
    }
    else if(passwordValue.length < 8){
        setError(Password,"Password must be 8 characters.");
        isFormValid = false

    }
    else{
        setSuccess(Password)
    }
    //confirm password

    if(cpasswordValue==="")
    {
        setError(ConfirmPassword,"Please confirm your password");
        isFormValid = false
    }
    else if(cpasswordValue !== passwordValue){
        
        setError(ConfirmPassword,"Password does not match");
        isFormValid = false

    }
    else{
        setSuccess(ConfirmPassword); 
    }

  // If all validations passed, clear the form and display a success message
  if (isFormValid) {
    clearForm();
    successMessage.innerText = "Form submitted successfully!";
    successMessage.style.display = "block"; // Show success message
}
else {
    successMessage.style.display = "none"; // Hide success message if form is invalid
}
}

// Clear the form fields
const clearForm = () => {
    UserName.value = "";
    EmaiId.value = "";
    Password.value = "";
    ConfirmPassword.value = "";

    // Clear success classes as well
    setSuccess(UserName);
    setSuccess(EmaiId);
    setSuccess(Password);
    setSuccess(ConfirmPassword);
};


//set error function

const setError =(element,message)=>{

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

//set success function
const setSuccess =(element)=>{

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText ="";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}
//valid email function

function isValidEmail(e) {
    // Improved regex for email validation
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}
