/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numb1 = 10;
const numb2 = 20;

if(numb1 > numb2){
  console.log(numb1 + " " +  "è il numero più grande!")
}else{
  if(numb2 > numb1){
    console.log(numb2 + " " + "è il numero più grande!")
  }
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const eser2 = 6;

if(eser2 != 5){
  console.log("Not equal!")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 
  (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const divisibile = (10 % 5);

if (divisibile === 0){
  console.log("10 è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro 
  addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const eser4 = 8;
const eser4B = eser4;

if(eser4 === eser4B){
  console.log("Il valore è uguale a 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile 
  "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const spedizioneG = 50;
const costoSped = 10;
const totalShoppingCart = 100;

if(totalShoppingCart > spedizioneG){
  console.log("Spedizione gratuita!" +" "+ "total da pagare:"+ " " + totalShoppingCart)
}else{
  console.log(totalShoppingCart + costoSped)
}

const totalShoppingCart2 = 25;
if(totalShoppingCart2 > spedizioneG){
  console.log("Spedizione gratuita!" +" "+ "total da pagare:"+ " " + totalShoppingCart2)
}else{
  console.log("Total da pagare:" + " "+ (totalShoppingCart2 + costoSped) + " "+ "(Costo di spedizione 10 aggiunto nel totale)")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima 
  se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const disconto20 = (totalShoppingCart / 100 * 20);
const totalBlack = (totalShoppingCart - disconto20);
console.log(totalBlack);

if(totalBlack > spedizioneG){
  console.log("Spedizione gratuita!" +" "+"Black Friday (disconto di 20% su ogni prodotto)"+" "+ "total da pagare:"+ " " + totalBlack)
}else{
  console.log(totalShoppingCart + costoSped)
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 
let variabileA = "10";
let variabileB = "20";
let variabileC = "30";

const variabileGroup = (variabileA +","+ variabileB +","+ variabileC);
console.log(variabileGroup);



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no 
  (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const eUmNumero = 5;
console.log(typeof eUmNumero);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeroPari = 5;

if(numeroPari % 2 === 0){
  console.log(numeroPari + " " + "non è pari")
} else{
  console.log(numeroPari + " " + "è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7

  if (val < 10){
      console.log("True."+ " " + val +" " + "è menore che 10.");
  }else if (val < 5){
    console.log("False");
  }else if(val === 10){
    console.log("Uguale a 10")
  }
  
  
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà 
  "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const documenti = []

documenti.push(1,2,3,4,5,6,7,8,9,10);
console.log(documenti);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

documenti.splice(9,1,100);
console.log(documenti);