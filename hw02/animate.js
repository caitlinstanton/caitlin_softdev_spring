/*
  Caitlin Stanton
  SoftDev pd 3
  HW 2 -- Circular
  2016-02-22
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");

var radius = 0;
var growing = true;
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");

var requestID;

function drawDot() {

    ctx.clearRect(0,0,c.width,c.height);  //clears canvas
    ctx.strokeRect(0,0,c.width,c.height);

    if (growing == true) {
	radius = radius + 1;
    } else {
	radius = radius - 1;
    }
    if (radius >= (c.width/2)) {
	growing = false;
    } else if (radius <= 0) {
	growing = true;
    }

    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame(drawDot);
};

function stop() {
    ctx.clearRect(0,0,c.width,c.height); //clears canvas
    growing = false;
    radius = 0;
    window.cancelAnimationFrame(requestID);
};

startButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stop);
