var path, pathImg;
var runner,runnerImg;



function preload(){
  //pre-load images
runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

runner=createSprite(200,200);
runner.addAnimation("runner",runnerImg)
runner.scale=0.1;
invisibleGround = createSprite(50,300,10,600);
invisibleGround.visible=false;

invisibleGround2 = createSprite(360,300,10,600);
invisibleGround2.visible=false;

}

function draw() {
  background("blue");

  if(path.y>400){
    path.y=height/8;
  }
  
runner.collide(invisibleGround);
runner.collide(invisibleGround2);

runner.x=mouseX

drawSprites();
}

