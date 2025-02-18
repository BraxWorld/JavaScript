// declare and initialize array
let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT"];
let choice = Math.floor(Math.random() * 4);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let guessedLetters = [];
let guessCount = 0;
// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){
    
    

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    for (let k = 0; k < guessedLetters.length; k++)
    {
        if (userLetter.toUpperCase() == guessedLetters[k])
        {
            document.getElementById("guesses").innerHTML = 'Try a different letter';
            return;
        }
        
    }  
    guessedLetters[guessCount] = userLetter.toUpperCase(); 

    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
            
        }
        output = output + display[c] + ' ';
    }
    if (found == false) {
        attemptsLeft--;
        guessCount++;
        
    }

    document.getElementById("guessed").innerHTML = guessedLetters;

    found = false;
    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
        document.getElementById("hangman").src = "images/07.png";
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
    
    document.getElementById("word").innerHTML = output;
    output = '';

    switch(attemptsLeft)
    {
        case 1:
            document.getElementById("hangman").src = "images/06.png";
            break;
        case 2:
            document.getElementById("hangman").src = "images/05.png";
            break;
        case 3:
            document.getElementById("hangman").src = "images/04.png";
            break;
        case 4:
            document.getElementById("hangman").src = "images/03.png";
            break;
        case 5:
            document.getElementById("hangman").src = "images/02.png";
            break;
    }
    
    
});




//scirpt connected fine somereason the button and the script are not registering.