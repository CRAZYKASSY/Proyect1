var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(100,200,20,20);
}

function draw() 
{
  AA=20;
  B=80;
  background(AA,55,B);
  drawSprites();

  ball.velocityY=0;
  ball.velocityX=0;

  if (keyDown("RIGHT_ARROW")){
    ball.velocityX=4;
  }
  if (keyDown("LEFT_ARROW")){
    ball.velocityX=-4;
  }
  if (keyDown("UP_ARROW")){
    ball.velocityY=-4;
  }
  if (keyDown("DOWN_ARROW")){
    ball.velocityY=4;
  }
}




