var stay;
var move;
function setup() {
  createCanvas(800,400);
 stay = createSprite(400, 200, 50, 50);
 move = createSprite(400,100,50,50);
stay.shapeColor = "cyan";
move.shapeColor = "yellow";
move.debug = true;
stay.debug = true;
}

function draw() {
  background(0);  

move.x = mouseX;  
move.y = mouseY;

if(move.x - stay.x < move.width/2 + stay.width/2 && stay.x - move.x < stay.width/2 + move.width/2 && move.y - stay.y < move.height/2 + stay.height/2 && stay.y - move.y < stay.height/2 + move.height/2){
  move.shapeColor = "cyan";
  stay.shapeColor = "yellow";
}

else{
stay.shapeColor = "cyan";
move.shapeColor = "yellow";
}


  drawSprites();
}