var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nuvem;
var nuvemImage;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score = 0;
function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");
  nuvemImage = loadImage("cloud.png");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {

  background("white");
  
  text("Pontuação: " + score, 500, 50);  
  score = score + Math.round(frameCount / 60);

  if(keyDown("space") && trex.y >= 160) {
    trex.velocityY = -12;
  }

  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
 
  trex.collide(invisibleGround);

  createClouds();

  createObstacles();

  drawSprites();
}

function createClouds() {
  // a cada 60 quadros 
  // console.log(frameCount);
  if(frameCount % 60 == 0) {
    nuvem = createSprite(600,100,40,10); 
    nuvem.addImage("nuvem", nuvemImage);
    // nuvem.scale = 0.2;
    nuvem.velocityX = -3;
    nuvem.y = Math.round(random(30,80));
    nuvem.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }


}

function createObstacles() {
  if (frameCount % 60 == 0) {
    var obstacle = createSprite(400, 165, 10, 40);
    obstacle.velocityX = -6;

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1);        
        break;
      case 2:
        obstacle.addImage(obstacle2);        
        break;
      case 3:
        obstacle.addImage(obstacle3);        
        break;
      case 4:
        obstacle.addImage(obstacle4);        
        break;
      case 5:
        obstacle.addImage(obstacle5);        
        break;
      case 6:
        obstacle.addImage(obstacle6);        
        break;
    }

    obstacle.scale = 0.5;
    obstacle.lifetime = 300; 

  }

}
