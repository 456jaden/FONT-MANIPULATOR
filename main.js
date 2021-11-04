noseX=0
noseY=0
difference=0
rightwristX=0
leftwristx=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
 
    canvas=createCanvas(600,450);
    canvas.position(620,120);
    posenet=ml5.poseNet(video,modelLoaded);
        posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is anacitialled");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("noseX= "+noseX+" noseY= "+noseY);
        
        rightwristX=results[0].pose.rightWrist.x
        leftwristX=results[0].pose.leftWrist.x
        difference=floor(leftwristx-rightwristX);
        console.log("rightwristX= "+rightwristX+" leftwristx= "+leftwristx);
        console.log("difference="+difference);
    }
}
function draw(){
    background('#969897');
    document.getElementById("text").innerHTML="width and height of the text is "+difference +"px"
    fill('#f90093');
    stroke('#f90093');
    text("Hi",noseX,noseY,difference);
}