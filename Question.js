class Question {
    constructor() {
      this.input=createInput("Name");
      this.button= createButton("Play");
      this.greeting=createElement("h2");
    
    } 
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      this.title.html("MyQuizGame");
      this.title.position(350, 0);

      this.question.html("I have cities but no houses, forests but no trees, water but no fish. What am I?")
      this.question.position(150,80);
      this.option1.html("1:tap")
      this.option1.position(150,100)
      this.option2.html("2:lap")
      this.option2.position(150,120)
      this.option3.html("3:map")
      this.option3.position(150,140)

      this.inpyt1.position(150,230)

      

      
      //var input = createInput("Name");
     //var button = createButton('Play');
      
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update()
        player.updateCount(playerCount);
        //var greeting = createElement('h3');
        this.greeting.html("Hello " + player.name )
        this.greeting.position(130, 100)
      });
  
    }
  }
  