var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var PLAY = 1,END=0;
var yes=false;
var gameState = PLAY;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
    fairyVoice.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:yes});
	World.add(world, starBody);
	
	Engine.run(engine);
}

function draw() {
  background(bgImg);
  if(gameState==PLAY){
  keyPressed();
  fairy.debug = false
  fairy.setCollider("rectangle",0,-70,1005,50);
  }
  if(star.isTouching(fairy)){
	  star.velocityY=0;
	  gameState = END;
  }
  if(gameState==END){
	fairyVoice.stop();
  }
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("left")){
		fairy.x = fairy.x-4;
	}
	if(keyDown("right")){
		fairy.x = fairy.x+4;
	}
	if(keyDown("Down")){
		star.velocityY = 15;
	}

}
