var nomi = ["Gianluca", "Sergio", "Giuseppe", "Franco", "Gianni", "Alfio", "Armando", "Italo", "Ugo", "Bettino"], cognomi = ["Spampalino", "Kellogs", "Medusa", "Fantozzi", "Craxi", "Trapani", "Kennedy", "Cocchi", "Lenzi", "Savini"], index = 0, nomiRandom = [];

for ( var i = 0; i < 3; i++ ) {
  index = Math.floor( Math.random() * 10 );
  nomiRandom[i] = nomi[index];
  nomi.pop(nomi[index]);
  index = Math.floor( Math.random() * 10 );
  nomiRandom[i] += " " + cognomi[index];
  cognomi.pop(cognomi[index]);
}

console.log(nomiRandom);
