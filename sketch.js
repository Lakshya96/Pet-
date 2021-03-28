var dog,sadDog,happyDog,adder,feeder,foodObj,database;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database();

  foodObj=new Food();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feeder=createButton("FeedDog");
  feeder.position(700,95);
  feeder.mousePressed(feedDog());

  adder=createButton("Add Food");
  adder.position(700,95);
  adder.mousePressed(foodObj.addFood());
}

function draw() {
  background(46,139,87);
  foodObj.display();
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);

  if (foodObj.getFoodStock()<=0) {
    foodObj.updateFood(foodObj.getFoodStock()*0);
  } else {
    foodObj.updateFood(foodObj.getFoodStock()-1);
  }
}