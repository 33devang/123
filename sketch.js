const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var box1

function setup() {
  createCanvas(800,400);

engine = Engine.create()
world = engine.world

box1 = new box(100,100,20,20)
}

function draw() {
  background(255,255,255);  

box1.display()
  drawSprites();
}
