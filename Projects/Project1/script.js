function sunny(){
    document.body.style.backgroundImage = "url('sunny.avif')";
    document.body.style.color = "black";
    document.getElementById("text").innerHTML = "It's a Sunny Day ☀";
}

function rainy(){
    document.body.style.backgroundImage = "url('rainy.webp')";
    document.body.style.color = "white";
    document.getElementById("text").innerHTML = "It's Rainy 🌧";
}

function night(){
    document.body.style.backgroundImage = "url('night.jpg')";
    document.body.style.color = "white";
    document.getElementById("text").innerHTML = "Good Night 🌙";
}