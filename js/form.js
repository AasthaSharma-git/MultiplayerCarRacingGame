class Form {

    constructor() {

        this.title = createElement('h2');
        this.title.html('Car Racing Game');
        this.title.position(130, 0);

        this.input = createInput("Name");
        this.input.position(130, 160);

        this.button = createButton("Play");
        this.button.position(250, 200);
          
    }


    disappear(){
      
        this.title.hide();
        this.greetings.hide();


    }

    display() {


        this.button.mousePressed(()=> {


           // console.log(this);

            this.input.hide();
            this.button.hide();

            var name = this.input.value();

            this.greetings = createElement('h3');
            this.greetings.html("Hello" + name);
            this.greetings.position(130, 160);
            playerCount=playerCount+1;
            player.updateCount(playerCount);


        });





    }











}