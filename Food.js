class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=150,y=350;
      
      imageMode(CENTER);
      image(this.image,810,400,50,110);
     
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=150;
            y=y+20;
          }
          image(this.image,x,y,50,110);
          x=x+40;
        }
      }
    }
}
