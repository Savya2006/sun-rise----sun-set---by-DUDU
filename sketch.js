const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg ;

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 00 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
        var responseJSON = await response.json();
    
        var dateime = responseJSON.datetime;
        var hour = dateime.slice(11,13);
    
        if(hour>=04 && hour<=12){
            bg = "morning.jpg";
    
        }

        if (hour>=12 && hour<=15){
            bg = "afternoon.jpg";
        }

        if (hour>=15 && hour<=18){
            bg = "evening.jpg";
        }

        if (hour>=18 && hour<=04){
            bg = "night.jpg";
        }

        backgroundImg = loadImage(bg);
    }