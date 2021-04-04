
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mangoImg;
var tree,treeImg;
var stone,stoneImg;
var ground;
var slingShot;

function preload()
{
	boyImg = loadImage("boy.png");
	//mangoImg = loadImage("mango.png");
	//treeImg = loadImage("tree.png");
	//stoneImg = loadImage("stone.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1200,680,500,50);
	ground.scale=0.1;

	stone = new Stone(400,500,50);
	
	//stone.addImage(stoneImg);

	tree = new Tree(1200,660,200,100);
	
	//tree.addImage(treeImg);

	mango1 = new Mango(1200,300,40);

	//mango1.addImage(mangoImg);
	mango2 = new Mango(1250,350,40);
	
	//mango2.addImage(mangoImg);
	mango3 = new Mango(1250,200,40);
	
	//mango3.addImage(mangoImg);
	mango4 = new Mango(1150,300,40);
	
	//mango4.addImage(mangoImg);
	mango5 = new Mango(1200,350,40);
	
	//mango5.addImage(mangoImg);
	mango6 = new Mango(1100,250,40);

	//mango6.addImage(mangoImg);

	boy = createSprite(400,500,100,50);
	boy.addImage(boyImg);
	boy.scale=0.2;

	slingShot = new Slingshot(stone.body,{x:200,y:100});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  slingShot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
  drawSprites();
 
}

function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position;
stoneBodyPosition=stone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcherObject.attach(stone.body);
	}
}





