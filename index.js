//variable randomimage1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource1 = "images/dice" + randomNumber1 + ".png"

//variable randomimage2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png"

//variable image
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource1);
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

//if else condition
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<em>Player 1 WINS</em>"
} else if (randomNumber1 ==  randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw"
} else {
    document.querySelector("h1").innerHTML = "Player 2 WINS"
}