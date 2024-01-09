function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotposes)
}

function modelloaded() {
    console.log("the model has been loaded")
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play()
}

function Stop() {
    song.pause()
}

leftwristX = ""
rightwristY = ""
leftwristY = ""
rightwristX = ""


function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        leftwristX = results[0].pose.leftWrist.x 
        rightwristY = results[0].pose.rightWrist.y 
        leftwristY = results[0].pose.leftWrist.y
        rightwristX = results[0].pose.rightWrist.x
        console.log("my coordinates " + leftwristX + " " + leftwristY + " " + rightwristX + " " + rightwristY)
    }

}