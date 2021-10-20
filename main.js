The_Man = ""
noseX = 0
noseY = 0
function preload() {
 The_Man = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")


}

function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(500, 500)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)

}

function draw() {
    image(video, 0, 0, 500, 500)
    image(The_Man,noseX,noseY,80,40)



}

function Take_it() {
    save("Mr_Mustache_Has_Returned.png")

}

function modelLoaded() {

    console.log("IT has loaded")

}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results)
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y    
    }
}