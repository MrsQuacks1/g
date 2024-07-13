var m=0;
var a=0

function preload() {
     g=loadImage("filtrodeperritp.png")
}

function setup() {
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet=ml5.poseNet(video, A);
    poseNet.on("pose",b)
}

function A() {
    console.log("i")
}

function b(i) {
if(i.length > 0) {
    console.log(i);
    m=i[0].pose.nose.x-10;
    a=i[0].pose.nose.y;
}
}

function draw() {
image(video, 0, 0, 400, 400);
image(g, m, a, 300, 300);
}

function d() {
    save("f.png")
}