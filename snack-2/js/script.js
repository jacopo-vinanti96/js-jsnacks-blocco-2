var numero;
// input numero
numero = parseInt( prompt("Inserisci un numero intero") );

while ( isNaN( numero ) ) {
  alert("Non hai inserito un numero, riprova");
  numero = parseInt( prompt("Inserisci un numero intero") );
}

if ( numero % 2 == 0 ) {
  console.log( numero );
} else {
  console.log( numero + 1 );
}
