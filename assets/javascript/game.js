var alpha = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "w", "x", "y", "z"
];


var guess;
var guesses = document.getElementById("guesses");
var left = document.getElementById("left");
var lose = document.getElementById("loses");
var guesses = document.getElementById("guesses");
var guessbtn = document.getElementById("guessbtn");


var randomLetter = alpha[Math.floor(Math.random() * 25)];
console.log(randomLetter);

guessbtn.addEventListener("click", test);

function test() {

    guess = document.getElementById("guess");

    if (guess.value === randomLetter) {

        document.getElementById("wins").innerHTML++;
        document.getElementById("guesses").innerHTML = "";
        left.innerHTML = 5;
        guess.value = "";
        guess.placeholder = "It was " + randomLetter + "! Guess again.";
        randomLetter = alpha[Math.floor(Math.random() * 25)];
        console.log(randomLetter);

    }
    else {

        left.innerHTML--;
        guesses.innerHTML += guess.value + ", ";
        guess.value = "";
        guess.placeholder = "Try again!";

        if (left.innerHTML == 0) {
            console.log("clear");
            randomLetter = alpha[Math.floor(Math.random() * 25)];
            console.log(randomLetter);
            left.innerHTML = 5;
            document.getElementById("guesses").innerHTML = "";
            lose.innerHTML++;
            guess.value = "";
            guess.placeholder = "Take a guess!";
        }
    }

}