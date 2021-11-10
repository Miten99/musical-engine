song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() 
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")

}

function setup() 
{
     canvas = createCanvas(600,300);
     canvas.center();

     video = createCapture(VIDEO);
     video.hide();

     poseNet = ml5.posenet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}
function draw() 
{
    video(0,0,600,500);
}


function play() 
{
    song1.play();
    song1.setVolume(0.5);
    song1.rate(1)
}

 function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(result);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.x;
        console.log("leftWristX  = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.x;
        console.log("rightWristX  = " + rightWristX + "rightWristY = " + rightWristY);

    }
}