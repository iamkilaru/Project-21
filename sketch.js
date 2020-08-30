var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,150);
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor=color(20,40,60);
  thickness=random(22,38)
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x<(bullet.width + wall.width)/2){
    bullet.velocityX=0;
    damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }else if(damage<5){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}