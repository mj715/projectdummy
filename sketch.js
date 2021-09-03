var movingRect, fixedrect

function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 80, 50);
  fixedrect= createSprite(200, 200, 50, 80);
  movingRect.shapeColor= "green";
  fixedrect.shapeColor="green";
  movingRect.debug= true;
  fixedrect.debug= true;
}

function draw() {
  background(0);
  movingRect.x= mouseX;
  movingRect.y= mouseY;
  
  if(movingRect.x- fixedrect.x < movingRect.width/2+ fixedrect.width/2 &&
    fixedrect.x- movingRect.x<movingRect.width/2 + fixedrect.width/2
     ){
    movingRect.shapeColor= "red";
    fixedrect.shapeColor="red";
  }
  else{
    movingRect.shapeColor= "green";
    fixedrect.shapeColor="green";
  }

  drawSprites();
}