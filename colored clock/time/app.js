const time = document.querySelector(".digital");
const secondHand = document.querySelector("#ss");
const minuteHand = document.getElementById("mn");
const hourHand = document.getElementById("hh");

const secdot = document.querySelector(".sec_dot");
const mindot = document.querySelector(".min_dot");
const hrdot = document.querySelector(".hr_dot");

const secline = document.getElementById("sec")
const minline = document.getElementById("min")
const hourline = document.getElementById("hour")

setInterval(() =>{
    let d =new Date();
    time.innerHTML = d.toLocaleTimeString();
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();
    
    hourHand.style.strokeDashoffset = 510 - (-510 * hour) / 12;
    minuteHand.style.strokeDashoffset = 630 - (630 * minute) / 60;
    secondHand.style.strokeDashoffset = 760 - (760 * second) / 60;

    secdot.style.transform = `rotateZ(${second * 6}deg)`;
    mindot.style.transform = `rotateZ(${minute * 6}deg)`;
    hrdot.style.transform = `rotateZ(${-hour * 30}deg)`;


    secline.style.transform = `rotateZ(${second * 6}deg)`;
    minline.style.transform = `rotateZ(${minute * 6}deg)`;
    hourline.style.transform = `rotateZ(${hour * 30}deg)`;


},1000

)