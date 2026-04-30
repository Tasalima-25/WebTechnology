function updateClock(){

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;

    // date
    let options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    };

    document.getElementById("date").innerHTML =
    now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();