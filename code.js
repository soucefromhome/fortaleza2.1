var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["383ba00d-e46e-468d-af69-b196b4e4608b","11fede07-90f8-43ba-ba67-5d17ee06be46","c9224c28-8b8c-4cd3-8377-4927c6ea056d","a25ba088-8ed7-496a-ae32-23947784c496","7ebd07c6-7de5-4bdf-bc0c-e608adfee6a6","3a6a1053-814e-4a37-a25e-bcd92578c600","ebef0cf6-c5ac-4cf3-bea9-377698d1389b","11f0da72-3a70-42ac-8e48-0a95c23fbbd2","3a9ca2dc-3487-4bf8-8045-43562761d799","f12b7552-b62e-417f-a6ba-759a6b842f7b","f5c3c100-f4f5-40aa-9979-a08cf4024e18"],"propsByKey":{"383ba00d-e46e-468d-af69-b196b4e4608b":{"name":"spacebattle_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xiD8bsaXoSQXe9vsg81OjENZ5ccU7rhr/category_retro/spacebattle_09.png","frameSize":{"x":304,"y":226},"frameCount":1,"looping":true,"frameDelay":2,"version":"xiD8bsaXoSQXe9vsg81OjENZ5ccU7rhr","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":226},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xiD8bsaXoSQXe9vsg81OjENZ5ccU7rhr/category_retro/spacebattle_09.png"},"11fede07-90f8-43ba-ba67-5d17ee06be46":{"name":"retroship_04_1","sourceUrl":null,"frameSize":{"x":277,"y":387},"frameCount":1,"looping":true,"frameDelay":12,"version":"4WC4EMhWpXWtpFZQ8gobePsiK9kwJqbr","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":277,"y":387},"rootRelativePath":"assets/11fede07-90f8-43ba-ba67-5d17ee06be46.png"},"c9224c28-8b8c-4cd3-8377-4927c6ea056d":{"name":"Jonhy_statico.jpg_1","sourceUrl":null,"frameSize":{"x":10,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"GqYFkiZE43JyJNtBCZ5_W81fsGteNrGa","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":15},"rootRelativePath":"assets/c9224c28-8b8c-4cd3-8377-4927c6ea056d.png"},"a25ba088-8ed7-496a-ae32-23947784c496":{"name":"Jonhy_Mov","sourceUrl":null,"frameSize":{"x":12,"y":15},"frameCount":2,"looping":true,"frameDelay":12,"version":"zh1zk4PErur9kdAoNILZCOAZOiFz9Nka","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":15},"rootRelativePath":"assets/a25ba088-8ed7-496a-ae32-23947784c496.png"},"7ebd07c6-7de5-4bdf-bc0c-e608adfee6a6":{"name":"Jonhy_Jump.jpg_1","sourceUrl":null,"frameSize":{"x":12,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"LFkbjXRpeFEAZLr.yy4fowEQf5ki.Wgm","loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":15},"rootRelativePath":"assets/7ebd07c6-7de5-4bdf-bc0c-e608adfee6a6.png"},"3a6a1053-814e-4a37-a25e-bcd92578c600":{"name":"enemigo_1.jpg_1","sourceUrl":null,"frameSize":{"x":6,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"DE8rLgppaJanQMpHEErLYMVhfmbMZO2H","loadedFromSource":true,"saved":true,"sourceSize":{"x":6,"y":7},"rootRelativePath":"assets/3a6a1053-814e-4a37-a25e-bcd92578c600.png"},"ebef0cf6-c5ac-4cf3-bea9-377698d1389b":{"name":"enemigo_2.jpg_1","sourceUrl":null,"frameSize":{"x":5,"y":6},"frameCount":1,"looping":true,"frameDelay":12,"version":".O1Ancfge1job.sgYWhMeYgSNaIBBg92","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":6},"rootRelativePath":"assets/ebef0cf6-c5ac-4cf3-bea9-377698d1389b.png"},"11f0da72-3a70-42ac-8e48-0a95c23fbbd2":{"name":"background.jpg_1","sourceUrl":null,"frameSize":{"x":100,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"pN5bYYMvJGE4A8spPP00GN1B9yzClOfu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":50},"rootRelativePath":"assets/11f0da72-3a70-42ac-8e48-0a95c23fbbd2.png"},"3a9ca2dc-3487-4bf8-8045-43562761d799":{"name":"Explosion_01.jpg_1","sourceUrl":null,"frameSize":{"x":36,"y":12},"frameCount":4,"looping":true,"frameDelay":12,"version":"PY8_at4eN2NB83j9w4Plm7U.iLai.NIM","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":48},"rootRelativePath":"assets/3a9ca2dc-3487-4bf8-8045-43562761d799.png"},"f12b7552-b62e-417f-a6ba-759a6b842f7b":{"name":"Tha_floor.jpg_1","sourceUrl":null,"frameSize":{"x":60,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"rI4Ee_FFFg5.T1oCTZKK7ygfC2n6vm1v","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":12},"rootRelativePath":"assets/f12b7552-b62e-417f-a6ba-759a6b842f7b.png"},"f5c3c100-f4f5-40aa-9979-a08cf4024e18":{"name":"tha_diamante.jpg_1","sourceUrl":null,"frameSize":{"x":8,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"19ih0EHTd0c0MKTqrX1dbleLoeZVTprR","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":7},"rootRelativePath":"assets/f5c3c100-f4f5-40aa-9979-a08cf4024e18.png"}}};
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

var fondo = createSprite(200,200,400,300);
fondo.setAnimation("background.jpg_1");
fondo.scale = 6;
var piso = createSprite(200,250,400,20);
piso.setAnimation("Tha_floor.jpg_1");
piso.scale = 7;
var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,210,250,3);//la que es para el piso
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
var wall7 = createSprite(41,170,50,3);
var wall8 = createSprite(41,210,50,3);//la de la referencia
var wall9 = createSprite(337,210,50,3);
var wall10 = createSprite(337,170,50,3);
var wall11 = createSprite(18,190,3,40);
var wall12 = createSprite(361,190,3,40);
var States = "jugando";

var El_Diamante = createSprite(350,190,3,40);
El_Diamante.setAnimation("tha_diamante.jpg_1");
El_Diamante.scale = 2;

var ding = createSprite(40,190,13,13);
ding.setAnimation("Jonhy_statico.jpg_1");
ding.scale = 2;

var dong1 = createSprite(100,130,10,10);
dong1.setAnimation("enemigo_1.jpg_1");
dong1.scale = 2;
var dong2 = createSprite(215,130,10,10);
dong2.setAnimation("enemigo_1.jpg_1");
dong2.scale = 2;
var dong3 = createSprite(165,200,10,10);
dong3.setAnimation("enemigo_1.jpg_1");
dong3.scale = 2;
var dong4 = createSprite(270,200,10,10);
dong4.setAnimation("enemigo_1.jpg_1");
dong4.scale = 2;

dong1.velocityY = 1;
dong2.velocityY = 1;
dong3.velocityY = -1;
dong4.velocityY = -1;

var count = 0;

//playSound("assets/category_background/gametime.mp3",true);

function draw() {
  background("white");
  drawSprites();
  if(States === "jugando") {
    strokeWeight(0);
  fill("yellow");
  textSize(18);
    text("muerte:" + count,200,100);
  //rect(18,170,52,40);
  //rect(308,170,52,40);
   dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  
  if(keyDown("RIGHT")){
    ding.x = ding.x+2;
    ding.setAnimation("Jonhy_Mov");
  } 
  if(keyDown("left")){
    ding.x = ding.x-2;
    ding.setAnimation("Jonhy_Mov");
  }
  if(keyWentUp("RIGHT")) {
    ding.setAnimation("Jonhy_statico.jpg_1");
  }
  
  if(keyWentUp("left")) {
    ding.setAnimation("Jonhy_statico.jpg_1");
  }
  
  if(ding.isTouching(wall1)||
  ding.isTouching(wall2)||
  ding.isTouching(dong1)||
  ding.isTouching(dong2)||
  ding.isTouching(dong3)||
  ding.isTouching(dong4))
  
  {
  ding.x = 40;
  ding.y = 190;
  count = count+1;
  }
  }
  
  if(ding.isTouching(El_Diamante)) {
    textSize(20);
    fill("green");
    text("Felicitaciones", 150,200);
    text("Presiona R para volver a jugar", 100,220);
    
    States = "Fin";
    ding.x = ding.x;
    ding.y = ding.y;
  }
  if(keyDown("R")&&States === "Fin"){
    States = "jugando";
    count = 0;
    ding.x = 40;
    ding.y = 190;
  }
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
