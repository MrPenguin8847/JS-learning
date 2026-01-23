let randomNum = parseInt((Math.random() * 100) + 1)
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const Guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuesses = []
let playGame = true
let numGuess = 1

if (playGame) {
    submit.addEventListener('click', (e) => {      
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuesses(guess)
    })
}
function validateGuesses(guess) {
    if (guess == '' || guess <= 0 || isNaN(guess) || guess > 100) {
        alert('Please enter a valid number')
    } else {
        prevGuesses.push(guess)
        if(numGuess == 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuesses(guess)
        }
    }
}
function checkGuesses(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage('Your guess is too low')
    } else if (guess > randomNum) {
        displayMessage('Your guess is too high')
    }
}
function displayMessage(message) {
    lowOrHi.innerHTML = `${message}`
}
function displayGuess(guess) {
    userInput.value = ''
    Guesses.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${12 - numGuess}`
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'> Start a new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        prevGuesses = []
        numGuess = 1
        randomNum = parseInt((Math.random() * 100) + 1)
        userInput.removeAttribute('disabled')
        Guesses.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        startOver.removeChild(p)
        playGame = true
    })
}

