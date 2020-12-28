const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground(400,780,800,20);
  /*division1 = new Division(25,640,15,265);
  division2 = new Division(174,640,15,265);
  division3 = new Division(311,640,15,265);
  division4 = new Division(441,640,15,265);
*/
//division = new Division()




}

function draw() {
  background(0); 
  Engine.update(engine); 


  ground1.display();
  /*division1.display();
  division2.display();
  division2.display();
  division3.display();
  division4.display();
*/
for(var k = 0; k <=width; k = k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j<=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for (var j = 15; j <=width-10; j=j+50)
{

  plinkos.push(new Plinko(j,175));
}

for (var j = 0; j < particles.length; j++){
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++) {
  divisions[k].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10),10,10));
}

  drawSprites();
}