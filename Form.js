class Form {
   constructor(){






   }
  display(){
    var title = createElement("h1");
    title.html("CAR RACING GAME");
    title.position(230,100);

    var input = createInput("name");
    input.position(150,100);

    var button = createButton("PLAY");
    button.position(400,100);

    var greeting = createElement("h2");
    button.mousePressed(function (){
        input.hide();
        button.hide();
        var name = input.value()
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("HELLO,     " +name)
        greeting.position(300,50)
    })




  }
}