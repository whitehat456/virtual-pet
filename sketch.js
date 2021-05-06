var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var bg
var time
var currentTime
var diff


//create feed and lastFed variable here
var feed,lastFed
var current = new Date();

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
bg = loadImage("bg.jpg")
}






function setup() {
  createCanvas(1150,500);
  database = firebase.database()
  

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(950,350,150,150);
  dog.addImage(sadDog);
  dog.scale=0.7;
  
  //create feed the dog button here
  feed=createButton("Feed the dog");
  feed.position(800,100);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(920,100);
  addFood.mousePressed(addFoods);

}

function draw() {
  background("lime");
  image (bg,0,0,1150,500)
  foodObj.display();


  
getCurrentime()
    
  text("Last Feed : "+time ,350,30)
  text("Last Feed : "+currentTime ,150,30)
  diff=currentTime-time
  text("Last Feed : "+diff ,150,50)
  //write code to read fedtime value from the database 

    if(diff>20000){
      text("its time feed the dog",350,80)
    }
 
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
  foodStock;
  database.ref('/').update({
    Food:foodS
  
  })
  //write code here to update food stock and last fed time


var food_stock_val = foodObj.getFoodStock()
if(food_stock_val<0){
foodObj.updateFoodStock(food_stock_val *0)
}
else{
  foodObj.updateFoodStock(food_stock_val -1)
}


getTime()



}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function getTime(){

firebase.database().ref('currentTime/').update({ time: firebase.database.ServerValue.TIMESTAMP })
.then(function (data) {
  firebase.database().ref('currentTime/')
    .once('value')
    .then(function (data) {

      var t = data.val()['time'];
   
      time=t

    }, function serverTimeErr(err) {
      console.log('coulnd nt reach to the server time !');
    });
}, function (err) {
  console.log ('set time error:', err)
});
}

function getCurrentime(){

  firebase.database().ref('currentTime/').update({ time: firebase.database.ServerValue.TIMESTAMP })
  .then(function (data) {
    firebase.database().ref('currentTime/')
      .once('value')
      .then(function (data) {
  
        var t = data.val()['time'];
     
        currentTime=t
  
      }, function serverTimeErr(err) {
        console.log('coulnd nt reach to the server time !');
      });
  }, function (err) {
    console.log ('set time error:', err)
  });
  }
  
  
