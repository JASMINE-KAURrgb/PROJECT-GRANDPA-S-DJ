var peterpan="";
var harry="";
var leftwristx=0;
var leftwristy=0;
var rightwristx=0;
var rightwristy=0;

function preload(){
    peterpan=loadSound("peterpan.mp3");
    harry=loadSound("harrypotter.mp3");
}

function draw(){
    image(video,0,0);
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,200);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftwristx="+leftwristx+" leftwristy="+leftwristy);
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("rightwristx="+rightwristx+" rightwristy="+rightwristy);
    }
}

function modelLoaded(){
    console.log("posenet is initialized");
}
