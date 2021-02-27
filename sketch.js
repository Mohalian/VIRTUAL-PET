var foodStock = 10;
var canvas;
var dog, dogIMG;
var form;
var button, button2;
var milkIMG,milk1,milk2, milk3,milk4,milk5,milk6,milk7,milk8,milk9,milk10,milk11,milk12,milk13,milk14,milk15;
function preload()
{
dogIMG = loadImage("images/dogImg.png");
}

function setup() {
	canvas = createCanvas(800, 700);
  background(45,200,0);
dog = createSprite(200,200,20,20);
dog.addImage(dogIMG);
dog.scale = 0.3;
button = createButton('feed');
this.button.position(100,100);
button2 = createButton('add food');
this.button2.position(150,100);
}


function draw() {  
  

this.button.mousePressed(()=>{
  foodStock = foodStock-1;
  foodStock.update();
});
this.button2.mousePressed(()=>{
  foodStock = foodStock+1;
  foodStock.update();
});

  drawSprites();
  fill("red");
  text("foodstock:" + foodStock, 100,400);

}