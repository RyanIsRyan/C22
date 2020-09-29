const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground, ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options  = {
    isStatic: true
  };
  ground = Bodies.rectangle(200,400,400,10, ground_options);
  World.add(world, ground);
  sky = Bodies.rectangle(200,10,400,10, ground_options);
  World.add(world, ground);
  var ball_options ={
    restitution : 1.0
  };
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world, ball);


  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(225);  

  Engine.update(engine);
  
  rectMode(CENTER);
  fill("green")
  rect(ground.position.x, ground.position.y, 400,10);
  rectMode(CENTER);
  fill("green")
  rect(ground.position.x, ground.position.y, 400,10);
  ellipseMode(RADIUS);
  fill("maroon");
  ellipse(ball.position.x, ball.position.y, 20,20);
}