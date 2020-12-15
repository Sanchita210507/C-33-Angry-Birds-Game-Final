const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var gameState = "onSling"
var score = 0

function preload() {
   
    getTime();
    backgroundImg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(790, 220);
    //box7 = new Box(810, 250, 70, 70)
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    

    bird = new Bird(200, 50);
    bird_angle = bird.body.angle
    slingshot = new Slingshot(bird.body,{x:200, y:50}) 
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    Engine.update(engine);
    stroke(0)
    textSize(35)
    fill("white")
    text("Score " + score, width-300,50)
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig1.score();
    pig3.score();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    //box7.display();
    box5.display();
    log4.display();
    log5.display();
    

    bird.display();
    platform.display();
    slingshot.display();
}
function mouseReleased(){
slingshot.fly()
gameState = "launched"
}
function mouseDragged(){
    if(gameState==="onSling"){
    Matter.Body.setPosition(bird.body,{x:mouseX, y: mouseY})
    }
    
}
function keyPressed() {
    if(keyCode === 32) {
        bird.trajectory = []
        Matter.Body.setPosition(bird.body,{x:200, y: 50})
        Matter.Body.setAngle(bird.body, bird_angle)
        slingshot.attach(bird.body)
        gameState = "onSling"
    }

}
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json()
    var datetime = responseJson.datetime
    var hour = datetime.slice(11,13)
    console.log(hour)
    hour = 20
    if(hour>=06&&hour<=19) {
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg)

}