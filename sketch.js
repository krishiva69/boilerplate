var movingrect;
var fixedrect;
var wall;
var car;


function setup() {
  createCanvas(1200,800);
 
  movingrect = createSprite(400, 200, 80, 30);
  fixedrect = createSprite(200, 200, 50, 80);
  car = createSprite(200, 300, 80, 20);
  wall = createSprite(800, 50, 20, 1200);

  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
  car.shapeColor = "blue";
  wall.shapeColor = "brown";

  car.velocityX = 4;
  movingrect.velocityX = -4;

  movingrect.debug = true;
  fixedrect.debug = true;
}

function draw() {
  background(0);  
  
 // movingrect.VelocityY = World.mouseY;
  
  
  console.log(movingrect.x - fixedrect.x);
  



if(isTouching(car, wall)){
  movingrect.shapeColor = "red";
  //xedrect.shapeColor = "red";
  //car.shapeColor = "white";
  //car.velocityX = 0;
  
}
  else{
    movingrect.shapeColor = "green";
  //fixedrect.shapeColor = "green";
  //car.shapeColor = "red";
  }

  bounceOff(movingrect, fixedrect)
  drawSprites();
}

