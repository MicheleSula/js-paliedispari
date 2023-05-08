// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

let inputUtente = prompt("Inserisci una parola:");
palindromoCheck (inputUtente);

function palindromoCheck (input) {
    // prendo l'input e lo rendo una stringa lower-case con solo simboli alfanumerici (a-z/0-9)
    input = input.replace(/\W+/g, '').toLowerCase();
    let reversedInput = input.split("").reverse().join("");

    if (reversedInput === input) {
        console.log("La parola è palindroma!");
    } else {
        console.log("La parola non è palindroma!");
    }


    console.log(reversedInput);
    // controllo se è palindroma
        // se è palindroma = true
        // else = false
}