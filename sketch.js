const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1=new box(200,300,60,60);
   
box2=new box(210,100,60,100);
   ground1=new ground()

    

  //  console.log(ground);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
box1.show();
box2.show();
ground1.show();
   
}