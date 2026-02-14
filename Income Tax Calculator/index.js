
const form = document.getElementById("nameForm");
const target = document.getElementById("res");
let tax = 0;
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const salary = parseInt(e.target.salary.value.trim());
    // console.log(salary);
    if (isNaN(salary) || salary < 0) {
        target.textContent = "Please enter a valid positive salary.";
        target.style.display = "inline";
        return;
    }else if (salary <= 1200000){
        tax = 0;
    }else if(salary <= 1600000){
        tax = (salary-1200000)* 0.15;
    }else if(salary<=2000000){
        tax = ((salary-1600000) * 0.20) + (400000 * 0.15);
    }else{
        tax = ((salary-2000000) * 0.30) + (400000 * 0.20) + (400000 * 0.15);
    }
    
    target.textContent = `Tax: ${tax}`;
    target.style.display = "inline";
})