let dayel = document.querySelector("#day");
let hourel = document.querySelector("#hour");
let minel = document.querySelector("#min");
let secel = document.querySelector("#sec");

const newYearDate = new Date("Jan 1, 2026, 00:00:00").getTime();

setInterval(countDown,1000);
function countDown(){
   
    let currYearDate = new Date().getTime();
    // all store in sec
    let totalDuration = newYearDate - currYearDate;
    let oneSec = 1000;
    let oneMin = oneSec * 60;
    let oneHr = oneMin * 60;
    let oneDay = oneHr * 24;

    let Day = Math.floor(totalDuration / oneDay);
    dayel.innerText = Day;
    
    let hour = Math.floor((totalDuration % oneDay) / oneHr);
    hourel.innerText = hour.toString().padStart(2,"0");

    let min = Math.floor((totalDuration % oneHr) / oneMin);
    minel.innerText = min.toString().padStart(2,"0");

    let sec = Math.floor((totalDuration % oneMin) / oneSec);
    secel.innerText = sec.toString().padStart(2,"0");

}
