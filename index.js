var sec=00
var min=00
var hr=00
var interval

function twoDigits(digit){
    if(digit<10){
        return('0' + digit);
    }else{
        return(digit)
    }
}

function start(){
    count();
    interval= setInterval(count,1000);
}

function stop(){
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
    sec=00;
    min=00;
    document.getElementById('counter').innerText='00:00:00'
}

function count(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            hr++
            min=0
        }
    }
    document.getElementById('counter').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}