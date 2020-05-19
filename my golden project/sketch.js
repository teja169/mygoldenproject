var PLAY=1;
var END=0;
var gameState=PLAY;
var backgroundimg;
var player;
var playerimg;
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4;
var score;

function preload(){
playerimg= loadAnimation("testsubject.jpg");  

obstacle1 = loadImage("obs1.jpg");
obstacle2 = loadImage("obs2.jpg");
obstacle3 = loadImage("obs3.jpg");
obstacle4 = loadImage("obs4.jpg");
}



function setup() {
  createCanvas(800,400); 
  player=createSprite(50,320,20,50);

   player.scale = 1.0;
   obstaclesGroup = new Group();
   score=0;
   player.addImage("player",playerimg);
}

function draw(){
  background(backgroundimg);
  text("Score: "+score,500,50);

  if(gameState===PLAY){
    score = score+Math.round(getFrameRate()/60);

  

  if(keyDown("space")&&(obstaclesGroup.isTouching(player))){
    player.velocityY=-30;
  }

  player.velocityY = player.velocityY + 0.8
  spawnObstacles();

  if(player.x<10){
    gameState =END;
  }
}
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
      default: break;
    }
  }
    //assign scale and lifetime to the obstacle           
    // obstacle.scale = 0.5;
    // obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  
}