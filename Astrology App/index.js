
let target = document.getElementById("res");
let form = document.getElementById("Myform");
let errf = document.querySelector(".errf");
let errs = document.querySelector(".errs");
let errYear = document.querySelector(".errYear");
let errMonth = document.querySelector(".errMonth");
let errDay = document.querySelector(".errDay");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let flag = true;
    // alert("submitted!!");
    // alert(fname);
    let fname = e.currentTarget.fName.value.trim();
    let sname = e.currentTarget.sName.value.trim();
    let day = e.currentTarget.Day.value.trim();
    let month = e.currentTarget.Month.value.trim();
    let year = e.currentTarget.Year.value.trim();

    let dayNum = Number(day);
    let monthNum = Number(month);
    let yearNum = Number(year);

    target.textContent = "";

    errf.textContent = "";
    errs.textContent = "";
    errDay.textContent = "";
    errMonth.textContent = "";
    errYear.textContent = "";
    if(fname.length == 0){
        errf.textContent = "Can not leave this feild empty.";
        flag = false;
    }

    if(sname.length == 0) {
        errs.textContent = "Can not leave this empty.";
        flag = false;
    }

    if(day.length == 0){
        errDay.textContent = "Can not leave this empty.";
        flag = false;
    }
    else if(isNaN(dayNum)){
        errDay.textContent = "Has to be a number.";
        flag = false;
    }
    else if(dayNum<1 || dayNum>31){
        errDay.textContent= "Has to be a number between 1-31.";
        flag = false;
    }

    if(month.length == 0) {
        errMonth.textContent = "Can not leave this empty.";
        flag = false;
    }
    else if(isNaN(monthNum)){
        errMonth.textContent = "Has to be a number.";
        flag = false;
    }
    else if(monthNum<1 || monthNum>12) {
        errMonth.textContent= "Has to be a number between 1-12.";
        flag = false;
    }

    if(year.length == 0){
        errYear.textContent = "Can not leave this empty."
        flag = false;
    }
    else if(isNaN(yearNum)) {
        errYear.textContent = "Has to be a number.";
        flag = false;
    }

    if(flag){
        let sign, message, traits;

        if((monthNum === 3 && dayNum >= 21) || (monthNum === 4 && dayNum <= 19)){
            sign = "Aries";
            traits = "Energetic, confident, and courageous.";
        }
        else if((monthNum === 4 && dayNum >= 20) || (monthNum === 5 && dayNum <= 20)){
            sign = "Taurus";
            traits = "Reliable, patient, and practical.";
        }
        else if((monthNum === 5 && dayNum >= 21) || (monthNum === 6 && dayNum <= 20)){
            sign = "Gemini";
            traits = "Curious, adaptable, and expressive.";
        }
        else if((monthNum === 6 && dayNum >= 21) || (monthNum === 7 && dayNum <= 22)){
            sign = "Cancer";
            traits = "Emotional, caring, and intuitive.";
        }
        else if((monthNum === 7 && dayNum >= 23) || (monthNum === 8 && dayNum <= 22)){
            sign = "Leo";
            traits = "Confident, creative, and passionate.";
        }
        else if((monthNum === 8 && dayNum >= 23) || (monthNum === 9 && dayNum <= 22)){
            sign = "Virgo";
            traits = "Practical, analytical, and kind.";
        }
        else if((monthNum === 9 && dayNum >= 23) || (monthNum === 10 && dayNum <= 22)){
            sign = "Libra";
            traits = "Balanced, fair, and charming.";
        }
        else if((monthNum === 10 && dayNum >= 23) || (monthNum === 11 && dayNum <= 21)){
            sign = "Scorpio";
            traits = "Intense, loyal, and determined.";
        }
        else if((monthNum === 11 && dayNum >= 22) || (monthNum === 12 && dayNum <= 21)){
            sign = "Sagittarius";
            traits = "Optimistic, adventurous, and honest.";
        }
        else if((monthNum === 12 && dayNum >= 22) || (monthNum === 1 && dayNum <= 19)){
            sign = "Capricorn";
            traits = "Disciplined, responsible, and ambitious.";
        }
        else if((monthNum === 1 && dayNum >= 20) || (monthNum === 2 && dayNum <= 18)){
            sign = "Aquarius";
            traits = "Independent, creative, and humanitarian.";
        }
        else if((monthNum === 2 && dayNum >= 19) || (monthNum === 3 && dayNum <= 20)){
            sign = "Pisces";
            traits = "Compassionate, imaginative, and gentle.";
        }

        message = `Hello ${fname} ${sname}, you are a ${sign}.`;

        target.textContent = message + " " + traits;
    }
})