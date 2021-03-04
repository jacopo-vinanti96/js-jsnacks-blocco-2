// Dichiarazione variabili
var number = 0,
    sum = 0,
    i;

// Versione con FOR
// for ( i = 0; i < 5; i++ ) {
//   number = parseInt( prompt("Inserisci un numero intero") );
//
//   while ( isNaN( number ) ) {
//     alert("Il valore inserito non è un numero, riprova");
//     number = parseInt( prompt("Inserisci un numero intero") );
//   }
//
//   sum += number;
// }
//
// console.log(sum);

// Versione con WHILE
i = 0;
while ( i < 5) {
  number = parseInt( prompt("Inserisci un numero intero") );

  while ( isNaN( number ) ) {
    alert("Il valore inserito non è un numero, riprova");
    number = parseInt( prompt("Inserisci un numero intero") );
  }

  sum += number;
  i++;
}

console.log(sum);
