
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30);

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1100,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1100,230,40);
	mango7=new mango(1100,230,40);
	mango8=new mango(1100,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1100,200,40);
	mango11=new mango(1100,50,40);

	tree=new Tree(1050,500);
	groundObject=new Ground(width/2,600,width,20);
	launcherObject=new Launcher(stoneObj.body,{x=235,y=420})
	var render = Render.create(
		element = document.body,
		engine=engine,
		options=(
			width=1300,
			height=600,
			wireframes=false

		)
	)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(25);
  text("Press Space to get a second Chance to Play!",50,50);
  image(boy,200,340,200,300);
  //display
  tree.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  groundObject.display();
  launcherObject.display();
  detectCollision(stoneObj.mango1);
  detectCollision(stoneObj.mango2);
  detectCollision(stoneObj.mango3);
  detectCollision(stoneObj.mango4);
  detectCollision(stoneObj.mango5);
  detectCollision(stoneObj.mango6);
  detectCollision(stoneObj.mango7);
  detectCollision(stoneObj.mango8);
  detectCollision(stoneObj.mango9);
  detectCollision(stoneObj.mango10);
  detectCollision(stoneObj.mango11);



  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(
      stone.body,{
          x:mouseX , y:mouseY
      
     
}
  )
}
function mouseReleased(){
  Launcher.fly()
}




