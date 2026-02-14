const form = document.getElementById("nameForm")
let err01 = document.getElementById("error01");
let err02 = document.getElementById("error02");
let target = document.querySelector("#target");
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    err01.style.display= "none";
    err02.style.display= "none";
    let haserror = false;
    const fnameInput = e.target.fname.value.trim();
    const snameInput = e.target.sname.value.trim();

    
    if(fnameInput.length <= 0){
        err01.style.display= "inline";
        haserror = true;
    }else if(snameInput.length <= 0){
        err02.style.display= "inline";
        haserror = true;
    }
    if(haserror){
        return;
    }

    let score = ((fnameInput.length + snameInput.length) * (fnameInput.length + snameInput.length) *100)%101;
    console.log(score);

    target.textContent = `SCORE: ${score}`;

    target.style.display = "inline";


})