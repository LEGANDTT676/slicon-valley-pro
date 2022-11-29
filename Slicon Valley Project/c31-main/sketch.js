var backgroundImage;
var alian,alianImage;
var bullet1,bullet1Image;
var bullet2,bullet2Image;
var hp,hpImage;
var mothership,mothershipImage;
var starship,starshipImage;
var youlose,youloseImage;
var youwin,youwinImage;
var alianGroup;

var bulletState = "loaded";



function preload() {
  backgroundImage=loadImage("assests/background.webp");
  alianImage=loadImage("assests/alian.png");
  bullet1Image=loadImage("assests/bullet1.png");
  bullet2Image=loadImage("assests/bullet2.png");
  hpImage=loadImage("assests/hp.png");
  mothershipImage=loadImage("assests/mothership.png");
  starshipImage=loadImage("assests/starship.png");
  youloseImage=loadImage("assests/youlose.jpg");
  youwinImage=loadImage("assests/youwin.jpg");

}
function setup() {
 createCanvas(windowWidth,windowHeight);
 starship=createSprite(width/2,height-150,25,25);
 starship.addImage(starshipImage)
 starship.scale=0.35;
 alianGroup=new Group();

  bullet2=createSprite(starship.x,starship.y,25,25);
  bullet2.addImage(bullet2Image);
  bullet2.scale=0.25;
}



function draw() {
  background(backgroundImage)
  drawSprites()
 spawningAlians()

 if (keyDown("a")) {
  starship.x-=5;
  bullet2.x =  starship.x;
 }
 if (keyDown("d")) {
  starship.x+=5;
  bullet2.y =  starship.y;
 }

 if (keyDown("space") && bulletState === "loaded") {
  bullet2.velocityY=-2;
  bulletState = "trigger";

 }

 if(bulletState === "trigger")
  {
    bullet2=createSprite(starship.x, height-150,25,25);
    bullet2.addImage(bullet2Image);
    console.log(bullet2);
    bullet2.scale=0.25;
    bulletState = "loaded";
  }
 drawSprites(); 
 
 if (alianGroup.collide(bullet2)) {
  alian.destroy()
 }

 
 
}

function spawningAlians() {
  if (frameCount%125===0) {
    
  
  alian=createSprite(Math.round(random(20,width-20)),0,25,25);
  alian.velocityY=2;
  alian.addImage(alianImage);
  alian.scale=0.25;
}
}

function createBullets()
{
  console.log("inside createBullet");

 
 
}