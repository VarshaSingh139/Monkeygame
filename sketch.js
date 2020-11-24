
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,bananaGroup;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(100,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(600,350,1000,50);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.shapeColor="brown";

  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background("lightgreen");
  stroke("black");
  textSize(24);
  text("Survival time: "+score,350,100);
  score=score+Math.round(getFrameRate()/60);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-8;
  }
  monkey.velocityY=monkey.velocityY+0.8;

  monkey.collide(ground);
  food();
  obstacles();

  //console.log(frameCount);
  drawSprites();
  
}
function food(){
  if(frameCount%80===0){
      banana=createSprite(400,random(120,200),20,20);
      banana.addImage(bananaImage);
      banana.velocityX=-4;
      banana.scale=0.1;
      banana.lifetime=100;
    
  }
  //bananaGroup.add(banana);
}
function obstacles(){
  if(frameCount%150===0){
  obstacle=createSprite(400,310,20,20);
  obstacle.velocityX=-4;   
  obstacle.scale=0.1;
  obstacle.addImage(obstacleImage);    obstacle.lifetime=100;

  }
}





