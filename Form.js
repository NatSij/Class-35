class Form{
constructor(){




}
display(){
var title = createElement("h2");
title.html("Racing Game");
title.position(130, 0);
var input = createInput("Name: ")
input.position(130, 160);
var button = createButton("Ready!")
var greetings = createElement("h1")
button.position(200, 200);
button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount += 1;
player.update(name);
player.updateCount(playerCount);
greetings.html("Hello," + name + "!");
greetings.position(130, 160);
});
}
}