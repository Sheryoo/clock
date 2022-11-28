setInterval(setClock, 1000)

let hour = document.querySelector('[data-hour]')
let minute = document.querySelector('[data-minute]')
let second = document.querySelector('[data-second]')

function setClock() {
    const current = new Date();
    const secs = current.getSeconds() / 60 ;
    const minutes = (secs+current.getMinutes()) / 60;
    const hours = (minutes + current.getHours()) / 12;
    
    rotate(second,secs)
    rotate(minute,minutes)
    rotate(hour,hours)
}

function rotate(e, r) {
    e.style.setProperty('--rotation',r*360)
}

function digital() {
    var current = new Date()
    var secs = current.getSeconds();
    var minutes = current.getMinutes();
    var hours = current.getHours();
    var section = document.getElementById("section");
    if (hours >= 12) {
        section.innerHTML = "PM"
        if (hours > 12) {
            hours -= 12;
        }
    }
    else {
        section.innerHTML="AM"
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = secs;
}

setInterval(digital, 10)

function agenda() {
    var current = new Date()
    var days = current.getDate();
    var months = current.getMonth()
    
    document.getElementById("months").innerHTML = months+1;
    document.getElementById("days").innerHTML = days;
}
setInterval(agenda,10)