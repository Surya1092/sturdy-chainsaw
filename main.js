var right_wrist_x = 0;
var right_wrist_y = 0;
var left_wrist_x = 0;
var left_wrist_y = 0;
var scoreLeftWrist = 0;


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
        console.log("Left Wrist Score = " + scoreLeftWrist);

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