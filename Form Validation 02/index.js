const form = document.querySelector("#myForm");
const errorNm = document.querySelector("#errorName");
const errorMail = document.querySelector("#errorMail");
const errorPs = document.querySelector("#errorPs");
const errorCps = document.querySelector("#errorCps");

form.addEventListener("submit", function(e){
    const nameInput = e.currentTarget.username;
    const mailInput = e.currentTarget.mail;
    const psInput = e.currentTarget.password;
    const cpsInput = e.currentTarget.confirmPassword;

    const name = nameInput.value.trim();
    const email = mailInput.value.trim();
    const ps = psInput.value.trim();
    const cps = cpsInput.value.trim();

    // username validation
    if(name.length < 5){
        e.preventDefault();

        errorNm.textContent ="Name must be greater than 5 characters";
        errorNm.style.display = "inline";
        nameInput.value = "";
        nameInput.focus();
    }else{
        errorNm.style.display = "none";
    }
    
    // mail validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // something@something.something
    
    if(email == ""){
        e.preventDefault();
        
        errorMail.textContent = "Mail can not be left empty";
        errorMail.style.display = "inline"; 

        mailInput.value = "";
        mailInput.focus();
    }else if(!emailPattern.test(email)){
        e.preventDefault();
        
        errorMail.textContent = "Mail should be in \"something@something.something\" form";
        errorMail.style.display = "inline"; 

        mailInput.value = "";
        mailInput.focus();
    }
    else{
        errorMail.style.display = "none";
    }


    // password validation
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(ps.length < 8){
        e.preventDefault();

        errorPs.textContent = "Password cannot be less than 8 characters";
        errorPs.style.display = "inline";

        psInput.value = "";
        psInput.focus();
    }
    else if(!passwordPattern.test(ps)){
        e.preventDefault();
    
        errorPs.textContent = "Password must contain, uppercase, lowercase, number";
        errorPs.style.display = "inline";
    
        psInput.value = "";
        psInput.focus();        
    }

    // confirm Password validation
    if(cps != ps){
        e.preventDefault();

        errorCps.textContent ="Password in both feild must be similar";
        errorCps.style.display = "inline";

        cpsInput.value = "";
        cpsInput.focus();
    }else{
        errorCps.style.display = "none";
    }
   
})