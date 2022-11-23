const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var ball;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(width/2,370,width,10);
  top = new Ground(width/2,20,width,20)
  left_wall = new Ground(20,height/2,20,height);
  right_wall = new Ground(1180,height/2,20,height);
  left = new Ground(900,327,10,75)
  right = new Ground(1050,327,10,75)

  ball_options = {
    isStatic:false,
    restitution:0.1,
    friction:0,
    density:1.2
  }

  ball = Bodies.circle(100,100,10,ball_options);
  fill("white");
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function keyPressed() {
  if (keyCode === (UP_ARROW)){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:18,y:-15 })
  }
}

function draw() 
{
  background("black");
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
 }

