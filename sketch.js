const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1=new Box(880,590,200,120);
    //box2=new Box(810,630,20,200);
	//box3=new Box(1010,590,20,130);
	paper=new Paper(100,630);
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background("White");
  
  box1.display();
 // box2.display();
  //box3.display();
  ground.display();
  paper.display();

 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	 }
   }