const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball1;
var ground1;
var basket1;

function setup() {
	createCanvas(1200, 400);



	engine = Engine.create();
	world = engine.world;
  


	  ball1 =new Ball(150,320,25);
    basket1=new Ground(800,325,15,100);
    basket2=new Ground(900,380,200,15);
    basket3=new Ground(1000,325,15,100);
    ground1=new Ground(600,392.5,1200,15);
	


  
}


function draw() {
  background(0);
  

  Engine.update(engine);

  
  basket1.display();
  basket2.display();
  basket3.display();
  ball1.display();
  ground1.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		
		Body.applyForce(ball1.body,ball1.body.position,{x:115,y:-115});
	}

}


