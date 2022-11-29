const hourEl = document.getElementById("hour");


const minuteEl = document.getElementById("minutes");

const secondEl = document.getElementById("Second");

const ampmEl = document.getElementById("ampm");




function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm ="AM";

    if (h>12){
        h=h-12
        ampm="PM"
    }
    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    ampmEl.innerText -ampm;
    setTimeout(()=>
    updateClock()
    ,1000)

}

updateClock();











function processdata(f1,f2,f3)
{    

var artist = document.getElementById(f1).value ;
var date = document.getElementById(f2).value;
var seats =  document.getElementById(f3).value;
// var tickets = document,getElementById(f4).value;
let content =`You have succesfully booked a ticket to ${artist}'s concert on  ${date}. Your seat number is ${seats}.`;
alert(content)
document.getElementById("submit-button-attr").href="index.html";
// document.getElementById("hello").style.backgroundColor="beige";
// document.getElementById("hello").style.color="black";
// document.getElementById("hello").innerHTML=content

}









