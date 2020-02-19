const $ = (n) => document.querySelector(n);

const hours = $('#hours');
const minutes = $('#minutes');
const seconds = $('#seconds');
const am_pm = $('#am_pm');

function updateTime(){
    const date = new Date();
    hours.textContent = date.getHours();
    minutes.textContent= date.getMinutes();
    seconds.textContent= date.getSeconds();
    if(hours/12 >= 1){
        am_pm.textContent= "PM";
    }else{
        am_pm.textContent="AM";
    }
}

setInterval(updateTime, 1000)