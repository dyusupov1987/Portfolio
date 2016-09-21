
/*Available letters to guess*/
var availableLetters = ['a', 'b', 'c'];

var guessedRighLetters = [];

var letterToGuess = null;

/* Keep track of guessed letters */
var totalOfGuesses = 9;
var guessesLeft = 9;

/* Starter values */
var wins = 0;
var losses = 0;

/* function to update gueseesLeft var */
var updateGuessesLeft = function(){
    document.querySelector('#guessesLeft').innerHTML = guessesLeft;
};


/* Function to update the letters that left to guess */
var updateLetterToGuess = function(){
    this.letterToGuess = this.availableLetters[Math.floor(Math.random() * this.availableLetters.length)];
};

/* function to count the number of guesses letters*/
var updateGuessesSoFar = function(){
    document.querySelector('#guessesSoFar').innerHTML = guessedRighLetters.join(', ');
};

/* function to reset everything to default */
var reset = function(){
    totalOfGuesses = 9;
    guessesLeft = 9;
    guessedRighLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

/* FUnction to capture the keyboard clicks */
document.onkeyup = function(event) {
    guessesLeft--;

    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    guessedRighLetters.push(letter);

    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0){

        if (letter == letterToGuess){

            wins++;
            document.querySelector('#wins').innerHTML = wins;

            reset();
        }

    }else if(guessesLeft == 0){

        losses++;
        document.querySelector('#losses').innerHTML = losses;

        reset();
    }
};
