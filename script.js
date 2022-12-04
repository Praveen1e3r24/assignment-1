const hour = document.getElementById("hour");


const minute = document.getElementById("minutes");

const second = document.getElementById("Second");

const ampm = document.getElementById("ampm");




function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm ="AM";

    if (h>12){
        h=h-12
        ampm="PM"
    }
    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    ampm.innerText =ampm;
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









