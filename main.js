// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali


// Creo una variabili una variabile prompt per inserire il testo
var testo = prompt("inserire il testo");

// trasformare il testo in minuscolo
testo = testo.toLowerCase();

var contenitore_testo = testo.split(" ");


// creo un array con delle parole censurate
var censurate = ["ciao", "buongiorno", "cane", "gatto"];
console.log(testo, censurate);
// creo una variabile per contare le parole censurate
var contatore_censurate = 0;

for (var i = 0; i < contenitore_testo.length; i++) {
  if (censurate.includes(contenitore_testo[i])) {
    contenitore_testo[i] = "xxx";
    contatore_censurate ++;
  }
}

console.log(contenitore_testo.join(" "));
console.log(contatore_censurate);

// creo un un indice parole censurate / testo
var badword_index = 0;
if (contenitore_testo.length != "0") {
  badword_index =  contatore_censurate/contenitore_testo.length
}
console.log(badword_index);
