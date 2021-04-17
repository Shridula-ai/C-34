const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

function setup(){
    var canvas= createCanvas(1500,800);
    engine= Engine.create();
    world= engine.world;

    ground= new Ground(500,750,1000,20);

    box1= new Box(750,100,50,50);
    box2= new Box(750,200,50,50);
    box3= new Box(750,300,50,50);
    box4= new Box(750,400,50,50);
    box5= new Box(750,500,50,50);

    ball= new Ball(300,300,50,50);

    rope= new Rope(ball.body,{x:600,y:400})
}

function draw(){
    background("pink")

    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ball.display();

    rope.display();
}