var tree, treeImg;
var limb,limbImg;
var birdGroup, lGroup,rGroup;
var copper, copperImg;
var nest, nestImg;
var kenny, kennyImg;
var bg, bgImg;

function preload(){
bgImg= loadImage("Images/Bg.png")
limbImg = loadImage("Images/Limb.png")
treeImg = loadImage("Images/Tree.png ")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bg.addImage(bgImg)
  bg.velocityY=2;
  tree = createSprite(displayWidth/2, displayHeight, 200, displayHeight*4);
  tree.addImage(treeImg)
  kenny = createSprite(displayWidth/2, displayHeight,50,200)
kenny.shapeColor="orange"
lGroup=new Group()
rGroup=new Group()
for(var i=0;i<5;i++){
var lBranch=createSprite(displayWidth/2-200,displayHeight-(300*i),10,10)
lBranch.addImage(limbImg)
lGroup.add(lBranch)
kenny.collide(lBranch)
lBranch.debug=true
lBranch.setCollider("rectangle",0,-40,250,20)
}
for(var i=0;i<5;i++){
  var rBranch=createSprite(displayWidth/2+200,displayHeight-(375*i),10,10)
  rBranch.addImage(limbImg)
  kenny.collide(rBranch)
rBranch.debug=true
rBranch.setCollider("rectangle",0,-40,250,20)
rGroup.add(rBranch)
  }
}

function draw() {
  background(255,255,255);
  if(bg.y>displayHeight-300){
    bg.y=displayHeight/2;
  }  
  if (keyDown (UP_ARROW)){
    kenny.velocityY=-10
    tree.velocityY=2
  }
  kenny.velocityY+=0.5
  if (keyDown (LEFT_ARROW)){
    kenny.velocityX=-2
  }
  if (keyDown (RIGHT_ARROW)){
    kenny.velocityX=2
  }
  for(var i=0;i<5;i++){
    kenny.collide(lGroup.get(i))
    kenny.collide(rGroup.get(i))
  }

  
  drawSprites();
  
}