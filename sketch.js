const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1,box2,ground;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(160,100,50,100);
  ground=new Ground(200,390,400,20)
}

function draw() {
  background("pink");  

  Engine.update(myengine);

 box1.display();
 box2.display();
 ground.display();

}