    // Array of words for the game
    const words = ['hangman', 'javascript', 'html', 'css', 'developer'];

    // Select a random word from the array
    let selectedWord = words[Math.floor(Math.random() * words.length)];

    // Array to store guessed letters
    let guessedLetters = [];

    // Function to display the current state of the word
    function displayWord() {
      const wordDisplay = document.getElementById('game-status');
      wordDisplay.innerHTML = selectedWord
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');
    }

    // Function to handle user guesses
    function makeGuess() {
      const guessInput = document.getElementById('guess-word');
      const guess = guessInput.value.toLowerCase();

      // Check if the guess is a single letter
      if (guess.length === 1 && /^[a-zA-Z]$/.test(guess)) {
        // Check if the letter has already been guessed
        if (guessedLetters.includes(guess)) {
          setMessage('You already guessed that letter!');
        } else {
          guessedLetters.push(guess);
          displayWord();
          checkGameStatus();
        }
      } else {
        setMessage('Please enter a valid single letter.');
      }

      // Clear the input field
      guessInput.value = '';
    }

    // Function to check the game status
    function checkGameStatus() {
      const wordArray = selectedWord.split('');
      const correctGuesses = guessedLetters.filter(letter => wordArray.includes(letter));

      // Check if all letters have been guessed
      if (correctGuesses.length === new Set(wordArray).size) {
        document.getElementById('winnerimg').style.display='block';
        setMessage('Congratulations! You guessed the word: ' + selectedWord);
      } else {
        // Check if the player has reached the maximum allowed incorrect guesses
        const incorrectGuesses = guessedLetters.filter(letter => !wordArray.includes(letter));
        if (incorrectGuesses.length >= 6) {
          document.getElementById('hangimg').style.display='block';
          setMessage('Game Over! The word was: ' + selectedWord);
        }
      }
    }

    // Function to display messages
    function setMessage(message) {
      const messageElement = document.getElementById('message');
      messageElement.textContent = message;
    }

    function gamePage(){
      window.location.href ="game.html";
    }

    // Initial display
    displayWord();