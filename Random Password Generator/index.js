const passwordBox = document.querySelector('#password');
const len = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase ='abcdefghijklmnopqrstuvwxyz';
const digits = '0123456789';
const specialChars = '!@#$%^&*()_+{}:"<>?~,./;[]|';


const btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    let password = '';
    while( password.length < len){
        password+=upperCase[Math.floor(Math.random()*upperCase.length)];
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password+=digits[Math.floor(Math.random()*digits.length)];
        password+=specialChars[Math.floor(Math.random()*specialChars.length)];
    }
    passwordBox.value = password.slice(0, len); // making sure it is only 12 characters long
})

const copy = document.querySelector('.bi-files');
copy.addEventListener('click', ()=>{
    if(passwordBox.value.length === 0){
        alert('nothing to copy');
        return;
    }
    navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        alert("Copied to clipboard!");
    })
    .catch(() => {
        alert("Failed to copy!");
    });

})