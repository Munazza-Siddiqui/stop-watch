var min=0;
var sec=0;
var msec=0;
var minute=document.getElementById("min");
var second=document.getElementById("sec");
var milliSecond=document.getElementById("msec");
var interval;

function timer(){
    msec++;
    milliSecond.innerHTML=msec+' millisec';
    if(msec == 100){
        sec++;
        second.innerHTML=sec+' sec &nbsp :';
        msec=0;
    }
    if(sec ==60){
        min ++;
        minute.innerHTML=min+' min &nbsp :';
        sec=0;
    }
}
function start(){
interval = setInterval(timer,10);
var s=document.getElementById("start");
s.disabled= true;
}
 
function stop(){

    clearInterval(interval);
    var s=document.getElementById("start");
s.disabled= false;
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minute.innerHTML=min+' min &nbsp :';
    second.innerHTML= sec+' sec &nbsp :';
    milliSecond.innerHTML= msec+' millisec';
    clearInterval(interval);
}