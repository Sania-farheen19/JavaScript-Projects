const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const submit = document.getElementById("btn");
const message = document.getElementById("message");



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validInput();

})

const validInput = () =>

    {

        let isFormvalid = true; 

        let usernameValue = username.value.trim();
        let emailValue = email.value.trim();
        let passwordValue = password.value.trim();
        let cpasswordValue = cpassword.value.trim();
        //for user name
        if(usernameValue === ""){
            setError(username,"User name is required");
            
        }
        else{
            setSuccess(username);
        }

        //for email

        if(emailValue === "")
        {
            setError(email,"Email is required");
            isFormvalid = false
        }
        else if (!isValidEmail(emailValue)){
            setError(emailValue,"provide a valid Email")
            isFormvalid = false
        }


        else{
            setSuccess(email);
        }
        //for password
        if(passwordValue === ""){

            setError(password,"Password is required");
            isFormvalid = false;

        }
        else if (passwordValue.length < 8){
            setError(password,"Password must be 8 characters");
            isFormvalid = false;
        }
        else{
            setSuccess(password);
        }


        //for confirm password
        if(cpasswordValue === ""){
            setError(cpassword,"Please confirm your password")
            isFormvalid = false
        }
        else if(cpasswordValue != passwordValue){
            setError(password,"Password does not match ");
            isFormvalid = false
    
            }
            else{
                setSuccess(cpassword)
            }
    


            if(isFormvalid){
                clearForm();
                message.innerText = "Form submitted successfully!";
                message.style.display = "block";
            }




}


const clearForm = () =>{
    username.value = "";
    email.value = "";
    password.value = "";
    cpassword.value = "";

    // Clear success classes as well
    setSuccess(username);
    setSuccess(email);
    setSuccess(password);
    setSuccess(cpassword);
};




const setError = (element,message) => {

    let inputControl = element.parentElement;
    let displayError = inputControl.querySelector(".error");
     displayError.innerText = message;
     inputControl.classList.add("error");
     inputControl.classList.remove("success");

}
const setSuccess = (element) => {

    let inputControl = element.parentElement;
    let displayError = inputControl.querySelector(".error");
     displayError.innerText = "";
     inputControl.classList.add("success");
     inputControl.classList.remove("error");

}

function isValidEmail(e) {
    // Improved regex for email validation
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}



