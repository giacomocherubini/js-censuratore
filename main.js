// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

var testo = prompt("inserisci il testo");
var contenitore_testo = [];
testo == contenitore_testo;
console.log(contenitore_testo[i]);
var parole_censurate = prompt("inserisci parole da censurare");
var contenitore_censure = [];
parole_censurate == contenitore_censure;

function sostituzione(contenitore_testo, parole_censurate){
  for(var i = 0; i < contenitore_testo.length; i++) {
    if(contenitore_testo[i] == parole_censurate) {
        var res = parole_censurate.replace("","W3Schools");
        return res;
    }
  }
}

    console.log(contenitore_testo);
