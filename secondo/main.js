// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.



// creo variabile input utente
var parola = document.getElementById("parola");
// creo variabile bottone gioca
var bottoneGioca = document.getElementById("gioca");
// creo  variabile bottone annulla
var bottoneAnnulla = document.getElementById("annulla");
// creo  variabile risultato
var risultato = document.getElementById("risultato");


// dopo il click sul bottone gioca
bottoneGioca.addEventListener("click",function(){
  // creo variabile e salvo il valore inserito
  var parolaU = parola.value;

  // rendo visibile sezione dopo il click controlla
	risultato.style.opacity = 1;

  // creo funzione per numero random
  function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // creo variabili -- funzione appena creata con valore min 1 e max 5
  var numeroUno = numeroRandom(1, 5);
  var numeroDue = numeroRandom(1, 5);

  console.log("Primo numero: " + numeroUno + "  Secondo numero: " + numeroDue);

  // creo variabile somma dei numeri
  var somma = numeroUno + numeroDue;

  console.log("La somma dei numeri è: " + somma);


  // per determinare chi ha vinto (if else)
  if ((somma % 2 == 0 && parolaU === "pari") || (somma % 2 !== 0 && parolaU === "dispari")){

    console.log("Hai vinto");

    document.getElementById("risultato").innerHTML = "Il primo numero è: <span>" + numeroUno + "</span>. Il secondo numero è: <span>" + numeroDue + "</span>. La somma è : <span>" + somma + "</span>. Complimenti hai vinto!";

    } else {

    console.log("Hai perso");

    document.getElementById("risultato").innerHTML = "Il primo numero è: <span>" + numeroUno + "</span>. Il secondo numero è: <span>" + numeroDue + "</span>. La somma è : <span>" + somma + "</span>. Peccato hai perso!";
  }
})



// dopo il click sul bottone annulla
bottoneAnnulla.addEventListener("click",function() {

	// cancello valore inserito dall'utente dopo il click annulla
	parola.value = "";

	// sezione a comparsa non più visibile dopo il click annulla
	risultato.style.opacity = 0;

})
