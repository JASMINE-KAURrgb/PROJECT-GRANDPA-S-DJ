var peterpan="";
var harry="";

function preload(){
    peterpan=loadSound("peterpan.mp3");
    harry=loadSound("harrypotter.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0);
}
