const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p1,p2,p3,p4,p5,p6;
var p7,p8,p9,p10,p11,p12;
var p13,p14,p15,p16,p17,p18;
var p19,p20,p21,p22,p23,p24;
var p25,p26,p27,p28,p29,p30;
var p31,p32,p33,p34,p35,p36;
var ground1,ground2c,ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var d1,d2;
var rad=10;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=250;



function setup() {
  createCanvas(610,750);
  engine = Engine.create();
  world = engine.world;


  for(var k=0; k <= 600;k = k + 100){
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var i=20; i <= 600;i = i + 100){
    plinkos.push(new Plinko(i,75));
  }
  for(var i=70; i <= 600;i = i + 100){
    plinkos.push(new Plinko(i,175));
  }
  for(var i=20; i <= 600;i = i + 100){
    plinkos.push(new Plinko(i,275));
  }
  for(var i=70; i <= 600;i = i + 100){
    plinkos.push(new Plinko(i,375));
  }

 ground1 = new Ground(400,750,900,25);
 ground2 = new Ground(618,750,25,1900);
 ground3 = new Ground(-9,750,25,1900);
 
  
  Engine.run(engine);
}

function draw() {
  background(240,240,250); 
  if(frameCount%10===0)
  {
  particles.push(new ball(290,10,10));
  }
 
  
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
 }
  for(var k = 0; k < divisions.length; k++){
     divisions[k].display();
  }
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
 }


  ground1.display();
  ground2.display();
  ground3.display();

  drawSprites();
}