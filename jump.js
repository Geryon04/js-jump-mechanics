var canvas = document.querySelector("canvas");
var pencil = canvas.getContext("2d");

pencil.fillStyle = "gray",
pencil.fillRect(0, 0, 700, 500);

function ball(x, y){
    pencil.fillStyle = blue;
    pencil.beginPath();
    pencil.arc(x, y, 10, 0, Math.PI * 2);
    pencil.fill();
}

ball(20, 20);