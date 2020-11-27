class Moomilk {

    constructor(width, height){

        this.image = loadImage("images/Milk.png");
        this.width = width;
        this.height = height;
    }
    

    
    display(){
       
        var x = 80;
        var y  = 100;
        
        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.foodStock !== 0){

            for(var i = 0; i < this.foodStock; i++){

              if(i % 10 === 0){

                x = 80;
                y = y+ 50;

              }  

            image(this.image, x, y, 50,50);
            
            x = x+ 30;

            }

        }

    }

    getFoodStock(){
      var foodSRef = database.ref('Food');
    foodSRef.on("value",(data)=>{
      foodS = data.val();
    })


    }
    updateFoodStock(x){
      database.ref('/').update({
    
        Food: x
        
      })
    }

    deductFood(x){

      database.ref('/').update({
    
        Food: x - 1
        
      })
    }

}