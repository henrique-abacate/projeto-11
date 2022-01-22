var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
function preload(){
  //imagens pré-carregadas
  pathImg = loadImage("path.png");
  boyImg  = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
 path = createSprite (200,200);
 boy = createSprite (200,300,30,30);
 boy.addAnimation("boy1",boyImg);
 leftBoundary = createSprite (0,0,100,800);
 rightBoundary = createSprite (400,0,100,800);
 path.addImage(pathImg);
 leftBoundary.visible= false;
 rightBoundary.visible= false;
 path.velocityY = 4;

}

function draw() {
  background(0);
  
  path.velocityY = 4;
  boy.x = mouseX;
  
  if(path.y > 400){
  path.y = height/2;
}

boy.collide(leftBoundary);
boy.collide(rightBoundary);


drawSprites();


}





