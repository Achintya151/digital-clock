// DOM Elements
const hours = document.getElementById('hr');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');
const amPmSpan = document.getElementById('am-pm');

// functions

const changeTime = () => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    // console.log(20 % 12);
    hour = hour ? hour : 12;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    // console.log(hour, minute, second);
    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
    amPmSpan.textContent = amPm;
}
changeTime();

