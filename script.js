let word = "javascript";
let guessedWord = "_".repeat(word.length);
let guessedLetters = [];
let attempts = 7;

document.getElementById("word").innerHTML = guessedWord;

function checkLetter(letter) {
    if (word.includes(letter) && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        let wordArray = word.split("");
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === letter) {
                guessedWord = guessedWord.split("");
                guessedWord[i] = letter;
                guessedWord = guessedWord.join("");
            }
        }
    } else if (!word.includes(letter) && !guessedLetters.includes(letter)) {
        attempts--;
        guessedLetters.push(letter);
    }

    if (guessedWord === word) {
        document.getElementById("game-status").innerHTML = "Congratulations! You guessed the word!";
    } else if (attempts === 0) {
        document.getElementById("game-status").innerHTML = "Game Over!";
    } else {
        document.getElementById("game-status").innerHTML = `Attempts Remaining: ${attempts}`;
    }

    document.getElementById("word").innerHTML = guessedWord;
}

function newGame() {
    word = "javascript";
    guessedWord = "_".repeat(word.length);
    guessedLetters = [];
    attempts = 7;

    document.getElementById("game-status").innerHTML = `Attempts Remaining: ${attempts}`;
    document.getElementById("word").innerHTML = guessedWord;
}