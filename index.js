const $ = (n) => document.querySelector(n);

const hours = $('#hours');
const minutes = $('#minutes');
const seconds = $('#seconds');

function updateTime(){
    const date = new Date();
    hours.textContent = date.getHours();
    minutes.textContent= date.getMinutes();
    seconds.textContent= date.getSeconds();
}

setInterval(updateTime, 1000)