class Game{
   
    constructor(){}


      getState(){

         var gameStateRef= database.ref('gameState');
         gameStateRef.on("value", function(data){
            gameState= data.val();
          
            
         });

    }

   async start(){

        if(gameState===0){

            player=new Player();

            var playerCountRef=await database.ref('playerCount').once("value");

            player.getCount();

       
            form=new Form();
            form.display();
            

         }
        

   }

   play(){
      textSize(30);
      text('Game Start!',120,100);
      form.disappear();
   }

   update(state){
      database.ref('/').update({
         gameState:state
    });
   
   }

  



}