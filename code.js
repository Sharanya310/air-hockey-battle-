var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4452971d-e956-46ff-a5fb-b134ee273fa1"],"propsByKey":{"4452971d-e956-46ff-a5fb-b134ee273fa1":{"name":"ball","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"wMJNNRZJdsRJPfOZkn6Iswlj36i2Uvp0","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":25},"rootRelativePath":"assets/4452971d-e956-46ff-a5fb-b134ee273fa1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerPaddle = createSprite(200,360,90,15);
playerPaddle.shapeColor = "MidnightBlue "

var computerPaddle = createSprite(200,40,90,15)
computerPaddle.shapeColor = "MidnightBlue "

var goal1 = createSprite(200,10,120,30)
goal1.shapeColor = "LemonChiffon"


var goal2 = createSprite(200,390,120,30)
goal2.shapeColor = "LemonChiffon"

var ball = createSprite(200,200,20,20)
ball.shapeColor = "coral"
ball.setAnimation("ball")

var compScore = 0 ;
var playerScore = 0 ;
var gameState = "serve";
function draw() {
  background("MediumSeaGreen")
  
  computerPaddle.setSpeedAndDirection(8);
  
 
  if(gameState === "serve")
  {
    textSize(25);
    fill("black")
    text("Press Space to start!",100,300);
    if(keyDown("SPACE")){
    ball.velocityX = 8;
    ball.velocityY = 8;
    gameState = "play"
  }
  }
  
  if(gameState === "play"){
    playerPaddle.x=World.mouseX
 
  if (ball.isTouching(goal2)){
    compScore = compScore+1;
    reset();
  }
  
  if (ball.isTouching(goal1)){
    playerScore = playerScore+1;
    reset();
  }
  
  }
  
  drawnet();
  textSize(20)
  fill("DarkViolet")
  text("Score:"+compScore,5,190)
  textSize(20)
  fill("DarkViolet")
  text("Score:"+playerScore,5,220)
  
  playerPaddle.velocityX = 0
  playerPaddle.velocityY = 0
  
 if (playerScore==5 || compScore==5){
    gameState = "end"
  }
  
  if(gameState ==="end"){
    textSize(30);
    fill("black")
    
    text("game over!" , 100,300);
    stop();
   }
   
  createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(goal1);
  ball.bounceOff(goal2);
  ball.bounceOff(computerPaddle);
  playerPaddle.bounceOff(edges);
  computerPaddle.bounceOff(edges);
  drawSprites()
 Serve()
}
function drawnet()
{  
  for(var num=0;num<400;num=num+30)
  {
    line(num,200,num+10,200);
  }
}
function reset(){
  ball.x = 200
  ball.y = 200
  ball.setVelocity(0,0)
  computerPaddle.setVelocity(0,0)
}


function Serve(){
  if (keyDown("space")){
    ball.velocityX = 8;
    ball.velocityY = 8;
    }
}

function stop(){
  ball.setVelocity(0,0)
  computerPaddle.setVelocity(0,0)
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
