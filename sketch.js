//Need to Scale dustbin Image

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var paper1;
var ground;
var dustbinImage;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(600,600,20,20);
	dustbin.addImage("dustbingreen",dustbinImage);
	dustbin.scale = 0.5;
	

	ground = new Ground(400,695,800,10);
	
	paper1 = new paper(100,350)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  paper1.display();
  ground.display();
  dustbin.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-200})
	}
}