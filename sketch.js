//Create variables here
var dog, happyDog, database, Food, foodS,  foodStock;
var dogImg1, dogImg2
var x;
var database;
var canvas;
var feed, add;
var fedTime, lastFed;
var foodObj;

var fead;


function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png");  
  dogImg2 = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  

  dog = createSprite(250, 250);
  dog.addImage(dogImg1);
  dog.scale = 0.25;

  foodObj = new Moomilk(10, 10);

  feed = createButton("Feed");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  add = createButton("Add");
  add.position(800, 95);
  add.mousePressed(addFoodS);

  //foodStock = database.ref('Food');
  //foodStock.on("value", readStock);

  
}


function draw() {  
  background(46, 139, 87);


  
  foodObj.display();

  //writeStock(foodS);



  drawSprites();
  //add styles here
  
  fead();


  fill("white");
  textSize(15);
  text("Food:    " + foodS, 250, 50);

  if(lastFed>=12){
    
      text("Last Feed:   " + lastFed%12 + "PM", 350, 30);
  
    }
    else if (lastFed === 0){
    
      text("Last Feed  :  12 AM" , 350, 30 );

    }

    else{

      text("Last Feed  : " + lastFed + "AM", 350, 30 );

    }
}

function readStock(data){
  
  foodS = data.val();
  

}

function writeStock(x){
  
  database.ref('/').update({
    
    Food: x - 1
    


  })
  
}

function fead(){
  
  fedTime = database.ref('feedTime');
  fedTime.on("value", function(data){

    lastFed = data.val();

  });

    

}




function feedDog(){

  dog.addImage(dogImg2);

  foodS --;

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    
    Food: foodObj.getFoodStock(),
    lastFed: hour()
    
  })

}
function addFoodS(){

  foodS++;

  database.ref('/').update({
    
    Food: foodS
    
  })





}


