video = "";

function preload(){

  video = createVideo('video.mp4');
  video.hide();
}
function setup(){
canvas= createCanvas(480,300);
canvas.center();
}
function draw(){
    image(video,0,0,480,300);
}
function start(){
    object= ml5.objectDetector('cocossd',modelloaded);
        document.getElementById("detectedd").innerHTML="detecting objects";

}
function modelloaded(){
console.log("MODEL LOADED!!!");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}