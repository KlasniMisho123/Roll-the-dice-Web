function randomNumber(){
  var randN = Math.floor(Math.random() * 6) + 1;
    return randN
}

// var playerName1 = prompt("First Player: ")
// var playerName2 = prompt("Second Player: ")

// var playerName1Element = document.querySelector(".player1")
// var playerName2Element = document.querySelector(".player2")
// playerName1Element.innerHTML = playerName1;
// playerName2Element.innerHTML = playerName2;


var img1Element = document.querySelector(".img1");
var img2Element = document.querySelector(".img2");
var refreshElement = document.querySelector("h1");
function rollTheDice(player1, player2) {
   for(i = 1; i <= player1; i++) {
    if (i == player1) {
        img1Element.src = "./images/dice" + i + ".png";
    } 
   }
   for(i = 1; i <= player2; i++) {
    if (i == player2) {
        img2Element.src = "./images/dice" + i + ".png";
    } 
   }
}

function winnerText(player1, player2) {
    if(player1 < player2) {
        refreshElement.innerHTML = "Player 2 Wins!"
    } else if(player1 == player2) {
        refreshElement.innerHTML = "it's a Draw!"
    } else {
        refreshElement.innerHTML = "Player 1 Wins!"
    }
}

function main() {
var ranN1 = randomNumber();
var ranN2 = randomNumber();
rollTheDice(ranN1,ranN2);
winnerText(ranN1,ranN2);
}

main();


