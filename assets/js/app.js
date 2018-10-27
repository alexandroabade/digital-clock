function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var minus = fullDate.getMinutes();
    var secos = fullDate.getSeconds();

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minus < 10){
        minus = "0" + minus;
    }
    if (secos < 10){
        secos = "0" + secos;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + minus;
    document.getElementById('second').innerHTML = ":" + secos;
}


setInterval(clock, 100)