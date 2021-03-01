
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

	stand= new stand(380,200,600,30)
	bob1=new Ball(220,550,25)
	bob2=new Ball(280,550,25)
	bob3=new Ball(340,550,25)
	bob4=new Ball(400,550,25)
	bob5=new Ball(460,550,25)

	chain1 = new Chain(bob1.body {x:220,y:215})
	chain2 = new Chain(bob2.body {x:280,y:215})
	chain3 = new Chain(bob1.body {x:340,y:215})
	chain4 = new Chain(bob1.body {x:400,y:215})
	chain5 = new Chain(bob1.body {x:460,y:215})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  
  drawSprites();
 
  stand.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}

