// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.


// creo variabile input utente
var parola = document.getElementById("parola");
// creo variabile bottone controlla
var bottoneControlla = document.getElementById("controlla");
// creo  variabile bottone annulla
var bottoneAnnulla = document.getElementById("annulla");
// creo  variabile risultato
var risultato = document.getElementById("risultato");

// dopo il click sul bottone controlla
bottoneControlla.addEventListener("click",function(){
  // creo variabile e salvo il valore inserito
  var parolaU = parola.value;

  // rendo visibile sezione dopo il click controlla
	risultato.style.opacity = 1;

  // creo funzione per individuare parole palindrome
  function miaF(parolaInv){
    // inverso della parola
    var parolaInv = parolaU.split("").reverse().join("");

    console.log("parola inserita: " + parolaU + ",parola inversa: " + parolaInv);
    return parolaInv;
  }

  // creo variabile -- funzione appena creata -- valore inserito dall'utente
  var parolaNuova = miaF(parola);
  // console.log(miaF(parola));

  // verifico se la parola inserita è uguale al suo inverso (if else)
  if (parolaU === parolaNuova){
    // se è vero che è palindroma stampo...
    console.log("La parola inserita (" + parolaU + ") è palindroma");

    document.getElementById("palindroma").innerHTML = "La parola inserita (<span>" + parolaU + "</span>) è palindroma";

  } else {
    // altrimenti stampo
    console.log("La parola inserita (" + parolaU + ") NON è palindroma");

    document.getElementById("palindroma").innerHTML = "La parola inserita (<span>" + parolaU + "</span>) NON è palindroma";
  }
})


// dopo il click sul bottone annulla
bottoneAnnulla.addEventListener("click",function() {

	// cancello valore inserito dall'utente dopo il click annulla
	parola.value = "";

	// sezione a comparsa non più visibile dopo il click annulla
	risultato.style.opacity = 0;

})
