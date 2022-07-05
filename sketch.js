
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var ball2;

let engine;
let world;
var ball;
var ground;
var ground1;
var ground2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
   var ball1_options = {
     restitution: 0.5,
     frictionAir:0.01


   }

   var ball2_options = {
     restitution: 0.5,
     frictionAir: 0.03
   }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground1 = Bodies.rectangle(300, 200, 450, 20, ground_options);
  World.add(world, ground1);
  
  ball1 = Bodies.circle(160, 20, 20, ball1_options);
  World.add(world,ball1);
  
  ball2 = Bodies.circle(130, 30, 20, ball2_options);
  World.add(world, ball2);

  ground2 = Bodies.rectangle(140, 30, 30, 20, ground_options);
  World.add(world, ground2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
  ellipse(ball1.position.x, ball1.position.y, 30);
  rect(ground1.position.x, ground1.position.y, 450, 20);
  
  ellipse(ball2.position.x, ball2.position.y, 40);
  rect(ground2.position.x, ground2.position.y, 520, 30);

}

