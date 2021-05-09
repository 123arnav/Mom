lipX=0;
lipY=0;
dressX=0;
dressY=0;
hairX=0;
hairY=0;
function preload(){
lip=loadImage("lip.png");
hair=loadImage("hair.png");
dress=loadImage("dress.png");
}
function setup(){
    canvas=createCanvas(400,340)
    canvas.position(350,160)
    video=createCapture(VIDEO)
    video.size(400,380)
    video.hide();
    console.log(ml5.version);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("load");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    lipX=(results[0].pose.nose.x)-20
    lipY=(results[0].pose.nose.y)+40;
    hairX=(results[0].pose.nose.x)-155;
    hairY=(results[0].pose.nose.y)-150;
    dressX=(results[0].pose.nose.x)-70;
    dressY=(results[0].pose.nose.y)-200;
    console.log(lipY);
    console.log(lipX);
       }
}
function draw(){
image(video,0,0,400,400);
image(hair,hairX,hairY,280,320);
image(lip,lipX,lipY,50,30);
image(dress,dressX,dressY,200,30);
//fill(200,0,0);
//stroke(0,0,0);
//circle(mustacheX,mustacheY,40,);
}
function snip(){
    save("mom.png");
    }