var bullet,wall;
var speed,weight,thickness;




function setup() 
{
  createCanvas(1600,400);

  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(255,255,255);
  speed = random(223,321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 50, 10);

  
  
  }


function draw() {
  background(0,0,0);  


  
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(fixed.x - moving.x < fixed.width / 2 + moving.width / 2 && moving.x - fixed.x < fixed.width / 2 + moving.width / 2 && moving.y - fixed.y < fixed.width / 2 + moving.width / 2 && fixed.y - moving.y < fixed.width / 2 + moving.width / 2)
  {

  
     
      
      if(damage>10){
        wall.shapeColor = color(255,0,0);
         
        bullet.velocityX = speed;
       

      }

      if(damage<10)
      {
        wall.shapeColor = color(0,255,0);
         
        bullet.velocityX = speed;
      
      }

    

  }
  
  

  drawSprites();
}

