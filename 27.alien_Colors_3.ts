//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien

let alien_Color:string="green";

//• If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
if(alien_Color==="green"){
    console.log("player earned 5 points.");
}
else if(alien_Color==="yellow"){
    console.log("player earned 10 points.");
}
else if(alien_Color==="red"){
    console.log("player earned 15 points.");
}
else{
    console.log("Place select right color");
}

//Version 2 of the program
alien_Color="yellow"

if(alien_Color==="green"){
    console.log("player earned 5 points.");
}
else if(alien_Color==="yellow"){
    console.log("player earned 10 points.");
}
else if(alien_Color==="red"){
    console.log("player earned 15 points.");
}
else{
    console.log("Place select right color");
}


//Version 2 of the program
alien_Color="red"

if(alien_Color==="green"){
    console.log("player earned 5 points.");
}
else if(alien_Color==="yellow"){
    console.log("player earned 10 points.");
}
else if(alien_Color==="red"){
    console.log("player earned 15 points.");
}
else{
    console.log("Place select right color");
}

