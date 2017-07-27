//Keeps track of stuff
var hp = 100;
var gold = 0;
var numberDefeated = 0;

function setup() {
    $("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");
    // Add game info 
    $("body").append("<p>Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.</p>");
    //add stats
    //TODO: add stat values
    $("body").append("<h3>STATS</h3><p id='stats'></p>");
    //Add attack button
    // THe onlick='attack' adds an attribute to this JQuery method. Meaning when the button is clicked the attack function is called.
    $("body").append("<button onclick='attack()'>Attack the Ogre!</button>");
    //Add container for ogre images
    $("body").append("<div id='ogres'></div>");
    
    updateStats();
}

function updateStats() {
    $("#stats").text("HP: " + hp + " | Gold: " + gold +  " | Ogres Slain: " + numberDefeated);
}


function attack() {
    console.log("Are you working");
    if (hp > 0) { // if player is still alive.
        // Interesting random function. It is so simple. 
        if(Math.random() * 100 > gold) {
            gold+=10;
            numberDefeated++;
            // add to webpage
            // Puts text before a picture.
            $("#ogres").prepend("<p>You won! +10 gold.</p>");
        } else {
            gold--;
            hp--;
            $("#ogres").prepend("<p>You lost! -1 gold.</p>");
        }
        updateStats();
        spawnOgre();
    } else {
        $("#ogres").prepend("<p>GameOver</p>");
    }
}

function spawnOgre() {
    $("#ogres").prepend("<img src= 'http://www.52insk.com/wp-content/uploads/2015/08/Shrek.jpg'>");
}
$(document).ready(setup);
//Add game title.
//Add game info.
//Add the stats
//Add Ogre Image;
//When the player clicks the button
//if the player has hp
//if the player defeats the ogre
//Add paragraph saying "you win
//+ Gold to player
//

