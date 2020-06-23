
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

		
	bob1 = new Ball(280,400);
	bob2 = new Ball(340,400);
	bob3 = new Ball(400,400);
	bob4 = new Ball(460,400);
	bob5 = new Ball(520,400);

	rope1 = new Rope(bob1.body,{x:280,y:200});
	rope2 = new Rope(bob2.body,{x:340,y:200});
	rope3 = new Rope(bob3.body,{x:400,y:200});
	rope4 = new Rope(bob4.body,{x:460,y:200});
	rope5 = new Rope(bob5.body,{x:520,y:200});
	
	
	stand = Bodies.rectangle(width/2, 200, 500,20, {isStatic:true} );
 	World.add(world,stand);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(280);
  rect(width/2,200,360,15);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-195,y:-215});
	}
}




