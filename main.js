noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;
function setup() {
  canvas = createCanvas(500, 500);
  canvas.position(600, 170);
  video = createCapture(VIDEO);
  video.size(450, 450);
  poseNet = ml5.poseNet(video, model_loaded);
  poseNet.on("pose", gotResults);
}
function model_loaded() {
  console.log("model loaded");
}

function gotResults(results, error) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);

    leftwristX = results[0].pose.leftWrist.x;
    rightWristY = results[0].pose.rightWrist.x;
    difference = float(leftwristX - rightwristX);
    console.log(
      "left wrist X =" + leftwristX + "right wrist X =" + rightwristX
    );
  }
}
function draw() {
  background("#969A97");
  document.getElementById("square_width_and_height").innerHTML =
    "Font size of the text will be" + difference + "px";
  fill("#F90093");
  textSize(difference);
  text("Maria", 40, 400);
}
