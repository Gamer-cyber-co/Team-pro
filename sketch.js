
var player, pname,animals

var lifeShow, bg,bullets,bgm,inp,play,flag,birds,htp
var gameState = 0
var tm = -10
var cofl = 20
var lifeCount = 200
var iv = 255
var bm = 530
var l2c = 0
var fll = 80
var htp,form
function preload(){
 
 weapon = loadImage("img/weapon.png")
  ibg = loadImage("img/ibg.png")
  pb = loadImage("img/play.png")
  ib = loadImage("img/iboard.png")
  licon = loadImage("img/life.png")
  playerimg = loadImage("img/hunter.png")
  bgm = loadSound("bgm/bird-waterfall-bgm.mp3")
  deer = loadImage("img/deer.png")
  birdimg = loadImage("img/bird.png")
  tempimg = loadImage("img/templebg.png")
  bimg = loadImage("img/bullet.png")
  deers = loadSound("bgm/deer.mp3")
  walk = loadSound("bgm/walking-on-grass.mp3")
  gun = loadSound("bgm/shoot.mp3")
  birdd = loadSound("bgm/bird.mp3")
  bull = loadImage("img/bull.png")
}
function setup(){
 can = createCanvas(windowWidth,windowHeight)

    bgm.loop()

    inp = createInput('').attribute("placeholder", "Enter Your Name");
    inp.size(100);
animals = new Group();
bullets = new Group()
lbullets = new Group()
birds = new Group()
weaponShow = createSprite(55,55)
weaponShow.addImage(weapon)
weaponShow.scale=0.1
weaponShow.visible=false

temple = createSprite(width-100,height/2-70);
temple.addImage(tempimg)
temple.scale=0.6
temple.debug=false
temple.visible=false;


player = createSprite(width/2-400,height/2+50);
player.addImage(playerimg)
player.scale=0.3
player.debug=false;
player.visible=false;





/*play =createSprite(width/2,height/2)
play.addImage(pb)
play.scale = 0.2*/

button= createButton("Start ")
form=new Form();


}

function draw(){
 if(bg)
  background(bg)
//camera.position.x = player.x
//camera.position.y = player.y


  if(gameState===0){
levelone();
     }
  
 if(gameState===1){
   leveltwo();
}




if(gameState===2){
bg = loadImage("img/bg2.png")
bgm = loadImage("bgm/bird-bgm.mp3")
deers.stop()
cursor("img/pointer.png")
text(l2c+"/15",50,50)
animals.destroyEach()

player.visible = false
temple.visible = false

weaponShow.visible = false
can.mousePressed(level2)
birdcome()
for (var i = 0; i < birds.length; i++) {
if (lbullets.isTouching(birds.get(i))) {
       birds.get(i).destroy() 
        lbullets.destroyEach()
  }
  //createIcon()
}
}

if(gameState===4){
animals.destroyEach()
weaponShow.visible = false
player.visible = false
weapon.visible=false
textFont('italic')
textSize(100)
fill("yellow")
stroke("red")
text("THE END",width/2-50,height/2)
}

    drawSprites();
  
   
}
//CREATING ANIMALS
function animalcome() {
  if(frameCount % random([50,100]) === 0) {
    var animal = createSprite(width+50,random([height/2+60]),20,30);
    animal.debug=true
    animal.setCollider('circle',0,0,300)
  animal.shapeColor="white"
   animal.velocityX = -6
 animal.addImage(deer);
    animal.scale=0.2
    deers.play()           
   
    animal.lifetime = 300;
   animal.depth = player.depth;
    
    //add each obstacle to the group
   animals.add(animal);
    
  }
}
//BULLET IMG
function bulletCome(){

var  bullet = createSprite(player.x+20,mouseY);
gun.play()
    bullet.debug=false
    bullet.setCollider('circle',0,0,45)
    bullet.shapeColor="white"
    bullet.velocityX = 15
    bullet.addImage(bimg);
    bullet.scale=0.03   

   
    bullet.lifetime = 300;
    bullet.depth = player.depth;
    bullets.add(bullet)
    
}

function birdcome() {
  if(frameCount % random([50,100]) === 0) {
    var bird = createSprite(width+50,random(50,height/2+50),20,30);
    bird.debug=false
    bird.setCollider('circle',0,0,300)
  bird.shapeColor="white"
   bird.velocityX = -6
 bird.addImage(birdimg);
 bird.scale=0.3
    birdd.play()           
   
    bird.lifetime = 300;
   bird.depth = player.depth;
    //add each obstacle to the group
   birds.add(bird);
    
  }
}

function level2(){


  var  lbullet = createSprite(mouseX,height);
  gun.play()
      lbullet.debug=false
      lbullet.setCollider('circle',0,0,45)
      lbullet.shapeColor="white"
      lbullet.velocityY = -15
      lbullet.addImage(bull);
      lbullet.scale=0.02   
  
     
      lbullet.lifetime = 300;
      lbullet.depth = player.depth;
      //bullet.add(bimg);
      lbullets.add(lbullet)
      
}
function createIcon(x)
{
  for(var i=x;i<=x+fll;i=i+20)
  {
  life = createSprite(i,55)
  life.addImage(licon)
  life.scale=0.02
 life.lifetime=20;
  }
}

function levelone()
{
  tint(255,iv)
image(ibg,0,0,width,height)
iv = iv-100
if(iv<=0){
  if(tm<=150){
    tm +=5
  }
  if(bm>=height/2-50){
    bm -=5
  }
}

bg = loadImage("img/bg.png")
  
    pname= inp.value();
  
//TEXT OF HEADING
      textFont('Bold')
      textSize(50)
      fill("yellow")
      stroke("red")
      text("Man vs Wild",width/2-150,tm)
      inp.position(width/2-50,bm);
      button.position(width/2-50,bm+100);

  
     form.display();
  
//STARTING THE GAME
button.mousePressed(()=>{
  gameState=1
})
}

function leveltwo()
{
  bg = loadImage("img/bg.png")
  cursor("img/pointer.png");

  inp.hide()
  button.hide()
  form.hide()
  
  player.visible=true;
  temple.visible=true;
  weaponShow.visible=true;

  if(player.x<=0){
   player.x =  50
  }else if(player.x>=temple.x-100){
   player.x = temple.x-100
  }
 

  can.mousePressed(bulletCome)
  animalcome()


  text(lifeCount,width/2,height/2)

  textFont('italic')
  textSize(20)
  fill("yellow")
  stroke("red")
  text(pname,120,25)



if(keyDown(LEFT_ARROW)){
player.x = player.x-6

}
if(keyDown(RIGHT_ARROW)){
  player.x = player.x+6
}
  
for (var i = 0; i < animals.length; i++) {
  var fl = 120
 
  if (player.isTouching(animals.get(i))) {
    animals.get(i).bounceOff(player);
    fll-=20
  }

  createIcon(fl);
  
   if (bullets.isTouching(animals.get(i))) {
        animals.get(i).destroy() 
        bullets.destroyEach()
  }
}
if(fll<=0){
  gameState=4
}
else if(player.x>=temple.x-100){
gameState=2
}
}