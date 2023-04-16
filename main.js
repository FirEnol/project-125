leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#00ff0a");
    text('Sidek Sandhu',50,200);
}
function modelDone(){
    console.log("Posenet Is initialized And Loaded");

}
function gotposes(results){

    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

      

        difference = floor(leftWrist_x = rightWrist_x);
    }
}