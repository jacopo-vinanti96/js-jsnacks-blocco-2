var nomi = ["Gianluca", "Sergio", "Giuseppe", "Franco", "Gianni", "Alfio", "Armando", "Italo", "Ugo", "Bettino"], cognomi = ["Spampalino", "Kellogs", "Medusa", "Fantozzi", "Craxi", "Trapani", "Kennedy", "Cocchi", "Lenzi", "Savini"], index = 0, nomiRandom = [], numStringhe = 10;

for ( var i = 0; i < 3; i++ ) {
  index = Math.floor( Math.random() * numStringhe );
  nomiRandom[i] = nomi[index];
  nomi.pop(nomi[index]);
  index = Math.floor( Math.random() * numStringhe );
  nomiRandom[i] += " " + cognomi[index];
  cognomi.pop(cognomi[index]);
  numStringhe--;
}

console.log(nomiRandom);
