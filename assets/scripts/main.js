// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

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