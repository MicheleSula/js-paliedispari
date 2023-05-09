// Primo esercizio ****************************************************************************
const checkPalindromoButton = document.getElementById("palindromo-button");
const resultPalindromo = document.getElementById("result");


checkPalindromoButton.addEventListener("click", 
    function () {
        let inputUtente = document.getElementById("input").value;
        let isPalindrome = palindromoCheck(inputUtente);
        if (isPalindrome) {
            document.getElementById("result").classList.add('green-text');
            document.getElementById("result").innerHTML = "La parola è palindroma!";
        } else {
            document.getElementById("result").classList.add('red-text');
            document.getElementById("result").innerHTML = "La parola non è palindroma!";
        }

        setTimeout(() => {
            document.getElementById("result").innerHTML = "";
            document.getElementById("result").classList.remove('red-text');
            document.getElementById("result").classList.remove('green-text');
        }, 1000);         
    }
);



// Funzioni
function palindromoCheck (input) {
    // prendo l'input e lo rendo una stringa lower-case con solo simboli alfanumerici (a-z/0-9)
    input = input.replace(/\W+/g, '').toLowerCase();
    // Creo il reverse dell'input
    let reversedInput = input.split("").reverse().join("");

    // Comparo il reverse dell'input all'input
    if (reversedInput === input) {
        return true;
    } else {
        return false;
    }
}


// Secondo esercizio ************************************************************************

// Rng for computer
function generateComputerNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Determine if the sum is odd or even using a function
function isOddOrEven(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Odd/even game
function playGame() {

    // Userchoice value
    let userChoice = document.querySelector("#user-choice").value;

    // User number
    let userNumber = parseInt(document.querySelector("#user-number").value);
    

    // Validate the user's input between 1 and 5
    if (userNumber < 1 || userNumber > 5) {
        // Error message
        document.querySelector("#error-message").textContent = "Please enter a number between 1 and 5.";
        document.querySelector("#error-message").value = "";
        return;
    } else {
        // Clear the error message
        document.querySelector("#error-message").textContent = "";
        document.getElementById("player-number-display").innerHTML = "Giocatore <br>" + userNumber;
    }

    // RNG from 1 to 5 + display of it
    let computerNumber = generateComputerNumber();
    document.getElementById("computer-number-display").innerHTML = "Computer <br>" + computerNumber;

    // Sum of numbers
    let sum = userNumber + computerNumber;

    // Determine if sum is odd or even
    let result = isOddOrEven(sum);

    // Winning conditions
    if (result === userChoice) {
        document.getElementById("game-result").innerHTML = sum + " : pari" + "<br>Vince il giocatore!";
    } else {
        document.getElementById("game-result").innerHTML = sum + " : dispari" + "<br>Vince il computer!";
    }
}
