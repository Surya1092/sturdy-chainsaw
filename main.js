var right_wrist_x = 0;
var right_wrist_y = 0;
var left_wrist_x = 0;
var left_wrist_y = 0;
var scoreLeftWrist = 0;
var scoreRightWrist = 0;



var audio = "";
function preload(){
    audio = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0 ,600 , 500);

    fill("#ff0000");
    stroke("#ff0000");

   
    if (scoreRightWrist > 0.2) {
        circle(right_wrist_x, right_wrist_y, 20);
        if (right_wrist_y > 0 && right_wrist_y <= 100) {
            document.getElementById("speed").innerHTML = "The Speed Is 0.5x" ;
            audio.rate(0.5);
        } 
        
        else if (right_wrist_y > 100 && right_wrist_y <= 200) {
            document.getElementById("speed").innerHTML = "The Speed Is 1x" ;
            audio.rate(1);
        } 

        else if (right_wrist_y > 200 && right_wrist_y <= 300) {
            document.getElementById("speed").innerHTML = "The Speed Is 1.5x" ;
            audio.rate(1.5);
        } 

        else if (right_wrist_y > 300 && right_wrist_y <= 400) {
            document.getElementById("speed").innerHTML = "The Speed Is 2x" ;
            audio.rate(2);
        } 

        else if (right_wrist_y > 400 && right_wrist_y <= 500) {
            document.getElementById("speed").innerHTML = "The Speed Is 2.5x" ;
            audio.rate(2.5);
        } 

    }
   



if (scoreLeftWrist > 0.2) {
    circle(left_wrist_x, left_wrist_y, 20);
    InNumberLeftWristY = Number(left_wrist_y);
    WithoutDecimalsLeftWristY = floor(InNumberLeftWristY);
    volume = WithoutDecimalsLeftWristY/500;
    document.getElementById("volume").innerHTML = "Volume is " + volume;
    audio.setVolume(volume);
    
}
    
}

function play(){
    audio.play();
    audio.setVolume(2);
    audio.rate(2);
}

function modelLoaded(){
    console.log("Mister Posenet is intialized yayyayyayyayyaayyayyayayaya");
}

function gotPoses(results){
    if (results.length > 0) {
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("Left Wrist Score = " + scoreLeftWrist + "Right Wrist Score = " + scoreRightWrist);

        console.log(results);
        right_wrist_x = results[0].pose.rightWrist.x;
        console.log("Right Wrist X Position Is " + right_wrist_x);
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("Right Wrist Y Position Is " + right_wrist_y);

        left_wrist_x = results[0].pose.leftWrist.x;
        console.log("Left Wrist X Position Is " + left_wrist_x);
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("Left Wrist y Position Is " + left_wrist_y);



    }
}