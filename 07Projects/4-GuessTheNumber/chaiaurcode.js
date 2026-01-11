const randomNum = parseInt((Math.random() * 100) + 1)
const form = document.querySelector('.form')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const p = document.createElement('p')
const inputValue = document.querySelector('#guessField')


let prevGuess = []
let numGuesses = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(inputValue.value)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a valid number')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if (numGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNum) {
        displayMessage(`Number is TOO low`)
    } else if (guess > randomNum) {
        displayMessage(`Number is TOO high`)
    }
}
function displayGuess(message) {
     inputValue.value = ''
     guessSlot.innerHTML += `${guess}`
     numGuesses++
     remaining.innerHTML = `${10 - numGuesses}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    
}
function newGame() {
    
}

