const res = document.getElementById("res");
setInterval(() => {
    let currDate = Date.now(); // 1 Jan 1970 - till now miliseconds

    let targetDate = new Date(2028,6,14).getTime();

    let diff = targetDate-currDate;
    if(diff < 0){
        res.textContent = "Time Passed!!";
        return;
    }

    let sec = parseInt(diff / 1000);
    let mili = diff%1000; // final

    let minutes = parseInt(sec/60);
    sec = sec%60;

    let hours = parseInt(minutes/60);
    minutes = minutes%60;

    let days = parseInt(hours/24);
    hours = hours%24;

    res.textContent = `${days} Day ${hours} Hours ${minutes} Minutes ${sec} Seconds ${mili} Miliseconds`; 
    }, 1000);